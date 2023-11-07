const nodeMap = new Map();

function domPrint(el) {
    const lines = [];

    function renderNode(node, offset) {
        let nodeStart = offset||'';
        const nodeRange = {sl:lines.length,sc:offset.length}

        if(node.nodeType==3) { //#text
            const txt = node.textContent.replace(/^(&nbsp;|\s)*/, '');
            if(!txt) return;

            nodeMap.set(node, nodeRange);

            const tlines = txt.split('\n');
            if(tlines.length==1) {
                if(txt.length<50) {
                    lines[lines.length-1] += txt;
                    nodeRange.el = lines.length;
                    nodeRange.ec = lines[lines.length-1].length;
                    return true;
                }
            }
            for(const ln of tlines) {
                if(ln.trim())  {
                    lines.push(offset+ln)
                }
            }
            nodeRange.el = lines.length;
            nodeRange.ec = lines[lines.length-1].length;
            return false;
        }

        nodeMap.set(node, nodeRange);
        nodeStart += '<'+(''+node.tagName).toLowerCase();
        for(const a of node.attributes) {
            if((''+a.nodeName).startsWith('_')) continue;
            if(a.nodeName=='class' && !a.nodeValue) continue;
            nodeStart += ' '+a.nodeName;
            if(a.nodeValue) nodeStart +='="'+a.nodeValue+'"';
        }
        if(node.hasChildNodes()) {
            nodeStart += '>';
            lines.push(nodeStart);
            let sameLine = true;
            for(const cn of node.childNodes) {
                sameLine = renderNode(cn, offset+'  ') && sameLine;
            }
            const close = '</'+(''+node.tagName).toLowerCase()+'>';
            if( sameLine ) {
                lines[lines.length-1]+=close;
            } else {
                lines.push(offset+close);
            }
        } else {
            nodeStart += '/>';
            lines.push(nodeStart);
        }
        nodeRange.el = lines.length-1;
        nodeRange.ec = lines[lines.length-1].length;
        return false;
    }
    renderNode(el,'');
    return lines.join('\n');
}

function prefill(id) {
    const el = document.querySelector('#'+id+' lia-editor');
    const editor = ace.edit(el);
    const val = editor.getSession().getValue();
    const iframe = document.getElementById('frame_'+id);
    const onLoaded = () => {
        iframe.removeEventListener('load', onLoaded);
        const doc = iframe.contentDocument.documentElement;
        let root = doc.querySelector('*[_root]')||doc;
        const phtml = domPrint(root,'');
        editor.getSession().setValue(phtml);

        var style = iframe.contentDocument.createElement('style');
        style.type = 'text/css';
        
        style.innerHTML = `.highlightFound {
            background: rgb(250, 250, 255);
            border: 1px solid rgb(200, 200, 250);
        }`;
        iframe.contentDocument.getElementsByTagName('head')[0].appendChild(style);
        iframe.style.height = (doc.offsetHeight+1) + 'px';
    }

    iframe.addEventListener('load', onLoaded);
    iframe.srcdoc = val;
}

function validateXPath(id, inp, send) {
    const highlightClass = 'highlightFound';
    const el = document.querySelector('#domq_'+id+' lia-editor');
    const editor = ace.edit(el);
    const prevMarkers = editor.getSession().getMarkers();
    if (prevMarkers) {
        const prevMarkersArr = Object.keys(prevMarkers);
        for (let item of prevMarkersArr) {
            editor.session.removeMarker(prevMarkers[item].id);
        }
    }

    const iframe = document.getElementById('frame_domq_'+id);
    const doc = iframe.contentDocument.documentElement;
    const dst = doc.querySelector('*[_root]')||doc;
    const treeWalker = document.createTreeWalker(
        dst,
        NodeFilter.SHOW_ELEMENT
    );

    while (treeWalker.nextNode()) {
        const node = treeWalker.currentNode;
        node.classList.remove(highlightClass);
    }

    const xpath = inp;
    if(xpath)
    {
        const foundNodes = iframe.contentDocument.evaluate(xpath, dst, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
        const allfound = [];
        let nfound;
        while(nfound = foundNodes.iterateNext()) {
            allfound.push(nfound)
        }

        const expectedCount = iframe.contentDocument.evaluate('count(//*[@_correct])', iframe.contentDocument).numberValue;

        let correct = 0;
        let wrong = 0;

        for(const found of allfound)
        {
            found.classList.add(highlightClass)
            const nodeRange = nodeMap.get(found);
            if(found.hasAttribute('_correct')) {
                correct++;
            } else {
                wrong++;
            }

            if(nodeRange) {
                var Range = ace.require('ace/range').Range
                var range = new Range(nodeRange.sl,nodeRange.sc,nodeRange.el,nodeRange.ec);
                editor.getSession().addMarker(range,'ace_selected-word', 'text');
            }
        }
        
        if(correct>0) {
            if(wrong>0) {
                send.lia('Another result expected')
            } else {
                if(expectedCount>correct) {
                    send.lia('Expected less')
                } else if(expectedCount<correct) {
                    send.lia('Expected more')
                } else {
                    send.lia('Great!')
                    return true
                }
            }
        } 
    } else {
        send.lia('XPath expected')
    }
    return false;

}