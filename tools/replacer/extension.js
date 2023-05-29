// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "replacer" is now active!');
    
    function doConvert(scaling)
    {
        const textEditor = vscode.window.activeTextEditor;
		if (!textEditor) {
			return;  // No open text editor
		}

		var selection = textEditor.selection; 
		var text = textEditor.document.getText(selection);

		var regexp = /!\[([^\]]*)\]\(([^\)]*)\)([0-9]+)/g;

		var matches = regexp.exec(text);
		
		if (matches.length == 4)
		{
			var newWidth = Math.round(parseInt(matches[3])/scaling);
			var newUrl = matches[2];
			var newText = '![' + matches[1] + '](' + newUrl + '){width="' + newWidth + 'px"}'; 

			textEditor.edit(function (editBuilder) {
				editBuilder.replace(selection, newText);
			});
	
			// Display a message box to the user
			vscode.window.showInformationMessage('Replaced: ' + text + ' with: ' + newText);
		}
    }

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let d100 = vscode.commands.registerCommand('replacer.convertImage100', function () {
		// The code you place here will be executed every time your command is executed
		doConvert(1.0);
	});
	context.subscriptions.push(d100);
    
	let d125 = vscode.commands.registerCommand('replacer.convertImage125', function () {
		doConvert(1.25);
	});
	context.subscriptions.push(d125);

	let d150 = vscode.commands.registerCommand('replacer.convertImage150', function () {
		doConvert(1.50);
	});
	context.subscriptions.push(d150);    
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
