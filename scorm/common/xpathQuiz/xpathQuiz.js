const nodeMap = new Map();

const highlightClass = 'highlightFound';
const currentClass = 'highlightCurrent';
const selectedMarkerClass = 'ace_selected-word';

function domPrint(el) {
    const lines = [];

    function renderNode(node, offset, sameLine) {
        let nodeStart = sameLine?'':(offset||'');
        const nodeRange = {sl:lines.length,sc:offset.length};

        if(sameLine) {
            const lastLine = lines.length>0?lines.length-1:0;
            const lastCol = lines.length>0?lines[lines.length-1].length:0;
            nodeRange.sl = lastLine;
            nodeRange.sc = lastCol;
        }

        if(node.nodeType==3) { //#text
            const txt = node.textContent.replace(/^(&nbsp;|\s)*/, '');
            if(!txt) return;

            nodeMap.set(node, nodeRange);

            const tlines = txt.split('\n');
            if(tlines.length==1) {
                if(sameLine || txt.length<50) {
                    lines[lines.length-1] += txt;
                    nodeRange.el = lines.length;
                    nodeRange.ec = lines[lines.length-1].length;
                    return true;
                }
            }
            for(const ln of tlines) {
                if(sameLine) {
                    lines[lines.length-1] += ln;
                } else {
                    if(ln.trim())  {
                        lines.push(offset+ln)
                    }    
                }
            }
            nodeRange.el = lines.length;
            nodeRange.ec = lines[lines.length-1].length;
            return false;
        }

        nodeMap.set(node, nodeRange);
        const tagName = (''+node.tagName).toLowerCase();
        nodeStart += '<'+tagName;
        let sameLineStart = false;
        if(node.attributes) {
            for(const a of node.attributes) {
                if((''+a.nodeName).startsWith('_')) {
                    if(a.nodeName=='_oneline') {
                        sameLineStart = true;
                    }
                    continue;
                }
                if(a.nodeName=='style'&&tagName=='iframe') continue;
                if(a.nodeName=='srcdoc') continue;
                if(a.nodeName=='class' && !a.nodeValue) continue;
                nodeStart += ' '+a.nodeName;
                if(a.nodeValue) nodeStart +='="'+a.nodeValue+'"';
            }    
        }
        if(node.nodeType==Node.DOCUMENT_FRAGMENT_NODE) {
            lines.push(offset+"#shadow-root (open)");
            for(const cn of node.childNodes) {
                renderNode(cn, offset+'  ', false);
            }  
        } else if(node.hasChildNodes()||node.shadowRoot) {
            if(node.hasAttribute('_internal')) return false;
            if(node.hasChildNodes()&&(''+node.tagName).toLowerCase()=='head'&&node.childNodes.length==1&&node.childNodes[0].hasAttribute('_internal')) return false;
            nodeStart += '>';
            if(sameLine) {
                lines[lines.length-1] += nodeStart;
            } else {
                lines.push(nodeStart);
            }
            let oneLine = true;
            if(node.shadowRoot) {
                oneLine = renderNode(node.shadowRoot, offset+'  ', sameLine||sameLineStart) && oneLine;
            } 
            if(tagName=='iframe') {
                let frameEl = node.contentDocument.documentElement;
                if(!frameEl) {
                    // Not yet loaded
                    return false;
                }
                lines.push(offset+'  '+"#document");
                frameEl = frameEl.querySelector('*[_root]')||frameEl;
                oneLine = renderNode(frameEl, offset+'  '+'  ', sameLine||sameLineStart) && oneLine;
            } else {
                for(const cn of node.childNodes) {
                    oneLine = renderNode(cn, offset+'  ', sameLine||sameLineStart) && oneLine;
                }    
            }
            const close = '</'+(''+node.tagName).toLowerCase()+'>';
            if( sameLine||sameLineStart||oneLine ) {
                lines[lines.length-1]+=close;
            } else {
                lines.push(offset+close);
            }
        } else {
            nodeStart += '/>';
            if(sameLine||sameLineStart) {
                lines[lines.length-1] += nodeStart;
            } else {
                lines.push(nodeStart);
            }
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
    const renderDoc = () => {
        const rootDoc = iframe.contentDocument.documentElement;
        const root = rootDoc.querySelector('*[_root]')||rootDoc;
        const phtml = domPrint(root,'');
        editor.getSession().setValue(phtml);

        const current = rootDoc.querySelector('*[_current]');
        if(current) {
            current.classList.add(currentClass);
            const nodeRange = nodeMap.get(current);
            if(nodeRange) {
                var Range = ace.require('ace/range').Range
                var range = new Range(nodeRange.sl,nodeRange.sc,nodeRange.el,nodeRange.ec);
                editor.getSession().addMarker(range, currentClass, 'text');
            }
        }
    };

    const allframes = [iframe];

    const onLoaded = (evt) => {
        const thisframe = evt.target;
        thisframe.removeEventListener('load', onLoaded);
        const doc = thisframe.contentDocument.documentElement;
        allframes.push(thisframe);
        var style = thisframe.contentDocument.createElement('style');
        style.id = 'frame-example-style';
        style.type = 'text/css';
        style.innerHTML = `
        .highlightFound {
            background: rgb(250, 250, 255);
            border: 1px solid rgb(200, 200, 250);
        }
        .highlightCurrent {
            border: 1px solid rgb(10, 200, 10);
        }
        iframe {
            border: 1px solid;
            width: 100%;
            overflow: hidden;
        }
        `;
        style.setAttribute('_internal','true');
        thisframe.contentDocument.getElementsByTagName('head')[0].appendChild(style);
        let hasNested = false;
        const alliframes = doc.querySelectorAll('iframe');
        for(const frame of alliframes) {
            hasNested = true;
            frame.addEventListener('load', onLoaded);
            const srcdata = frame.textContent;
            frame.srcdoc = srcdata;
        }

        if(!hasNested) {
            for(const frm of allframes.reverse()) {
                frm.style.height = (frm.contentDocument.documentElement.offsetHeight+1) + 'px';
            }
            renderDoc();
        }
    }

    iframe.addEventListener('load', onLoaded);
    iframe.srcdoc = val;
}

function fixat(id,ind) {
    const el = document.querySelectorAll('#'+id+' lia-editor')[ind||0];
    const editor = ace.edit(el);
    const val = editor.getSession().getValue();
    const val2 = val.replace(/\<at\>/ig,'@');
    if(val2!=val) {
        editor.getSession().setValue(val2);
    }
}

function validateXPath(id, inp, send, isCss) {
    return runXPath(id, inp, send, isCss, true)
}

function checkXPath(id, inp, send, isCss, nodeset) {
    return runXPath(id, inp, send, isCss, false, nodeset)
}

function runXPath(id, inp, send, isCss, bValidate, nodeset) {
    const el = document.querySelector('#domq_'+id+' lia-editor');
    const editor = ace.edit(el);
    const prevMarkers = editor.getSession().getMarkers();
    if (prevMarkers) {
        const prevMarkersArr = Object.keys(prevMarkers);
        for (let item of prevMarkersArr) {
            if( prevMarkers[item].clazz == selectedMarkerClass ) 
            {
                editor.getSession().removeMarker(prevMarkers[item].id);
            }
        }
    }

    const iframe = document.getElementById('frame_domq_'+id);
    let expectedText = 
        iframe.contentDocument.evaluate('//*[@_expectedText]/@_expectedText', iframe.contentDocument, null, XPathResult.STRING_TYPE);
    let doc = iframe.contentDocument.documentElement;
    const baseInp = inp;
    let frame = iframe;
    let partInp = '';
    let subFrameQueryIndex = inp.indexOf('@@@');
    let subDocumentQueryIndex = inp.indexOf('@#@');
    let partShadowDom = false;
    while(subFrameQueryIndex>0||subDocumentQueryIndex>0) {
        let part = '';
        let partCss = false;
        partShadowDom = false;
        if (subFrameQueryIndex>0 
            && 
            (subDocumentQueryIndex<0 || subFrameQueryIndex<subDocumentQueryIndex) 
            ) {
            part = inp.substring(0,subFrameQueryIndex);
            partInp += part + '@@@';
            inp = inp.substring(subFrameQueryIndex+3);
        } else {
            part = inp.substring(0,subDocumentQueryIndex);
            partInp += part + '@#@';
            inp = inp.substring(subDocumentQueryIndex+3);
            partShadowDom = true;
        }

        if(part.indexOf('css=')==0) {
            partCss = true;
            part = part.substring(4);
        }
        
        const allfound = [];
        let dst = frame.contentDocument.documentElement||frame;
        
        if(partCss) {
            doc
                .querySelectorAll(part)
                .forEach((item)=>allfound.push(item));
            if(!allfound.length && doc.shadowRoot) {
                doc.shadowRoot
                .querySelectorAll(part)
                .forEach((item)=>allfound.push(item));
            }
        } else {
            // xpath
            const foundNodes = frame.contentDocument.evaluate(part, dst, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
            let nfound;
            while(nfound = foundNodes.iterateNext()) {
                allfound.push(nfound)
            }
        }

        if(allfound.length==1) {
            frame = allfound[0];
        } else {
            throw new Error(`Partial locator: ${partInp} should find exactly one node, but it found ${allfound.length}`)
        }

        doc = partShadowDom?frame:frame.contentDocument;
        let treeWalker = document.createTreeWalker(
            frame.contentDocument?.documentElement||frame.shadowRoot||frame,
            NodeFilter.SHOW_ELEMENT
        );
    
        while (treeWalker.nextNode()) {
            const node = treeWalker.currentNode;
            node.classList.remove(highlightClass);
        }

        subFrameQueryIndex = inp.indexOf('@@@');
        subDocumentQueryIndex = inp.indexOf('@#@');
    }
    
    let dst = doc.querySelector('*[_current]')||doc.querySelector('*[_root]')||doc;   

    if(inp) {
        if(!nodeset)
        {
            if(expectedText&&expectedText.stringValue) {
                expectedText = expectedText.stringValue;

                const foundText = iframe.contentDocument.evaluate(inp, dst, null, XPathResult.STRING_TYPE, null).stringValue;
                if( expectedText!="*" && (""+expectedText).trim().toLowerCase()!=(""+foundText).trim().toLowerCase() ) {
                    send?.log('error','\n',['Expected:',expectedText,'Found:',foundText])
                    return false;
                } else {
                    send?.log('debug','',[foundText])
                    return true;
                }
            }
        }

        const allfound = [];
        if(inp.indexOf('css=')==0) {
            inp = inp.substring(4);
            isCss = true;
        }

        if(isCss) {
            doc
                .querySelectorAll(inp)
                .forEach((item)=>allfound.push(item));
            if (!allfound.length && doc.shadowRoot) {
                doc.shadowRoot
                    .querySelectorAll(inp)
                    .forEach((item)=>allfound.push(item));
            }
        } else {
            if(frame&&
                (!frame.contentDocument||!frame.contentDocument.evaluate)
            ) {
                throw new Error(''+(frame.tagName||frame)+' does not support XPath evaluation ('+inp+').')
            }
            const foundNodes = frame.contentDocument.evaluate(inp, dst, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
            let nfound;
            while(nfound = foundNodes.iterateNext()) {
                allfound.push(nfound)
            }
        }

        let correct = 0;
        let wrong = 0;

        for(const found of allfound) {
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
                editor.getSession().addMarker(range, selectedMarkerClass, 'text');
            }
        }
        
        send?.log('debug','',['Found '+allfound.length+' nodes'])

        const expectedCount = 
            iframe.contentDocument.evaluate('count(//*[@_correct])', iframe.contentDocument).numberValue;
        
        const expectedXPath = 
            iframe.contentDocument.evaluate('normalize-space(//*[@_expectedXPath]/@_expectedXPath)', iframe.contentDocument).stringValue;
        if(expectedXPath) {
            if( (""+expectedXPath).trim().toLowerCase()!=(""+inp).trim().toLowerCase() ) {
                if (expectedCount && wrong==0 && correct==expectedCount) {
                    throw new Error('You found correct node, but another input query is expected. Please, check the question and correct your query.')
                }
                return false;
            } else {
                return true;
            }
        }

        if(bValidate)
        {
            if(expectedCount>0) {
                if(wrong>0) {
                    if(correct>0) {
                        throw new Error('Result includes more nodes than expected')
                    } else if(expectedCount==1) {
                        throw new Error('You need to select other node')
                    } else if(expectedCount>1) {
                        throw new Error('You need to select other nodes')
                    }
                } else {
                    if(expectedCount>correct) {
                        throw new Error('Query should return more nodes')
                    } else if(expectedCount<correct) {
                        if(wrong>0) {
                            throw new Error('Query returns some unexpected nodes and misses some expected.')
                        } else {
                            throw new Error('Query misses some nodes.')
                        }
                    } else {
                        return true
                    }
                }
            }
        }
    } else {
        if(isCss) {
            throw new Error("CSS query expected")
        } else {
            throw new Error("XPath query expected");
        }
    }
    return false;
}

function unescMarkdown(str) {
    // <at> -> @
    // <bq> -> `
    return str.replace(/\<at\>/ig,"@").replace(/\<bq\>/ig,'`');
}