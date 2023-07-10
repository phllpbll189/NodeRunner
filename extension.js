// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const { join } = require('path');
const vscode = require('vscode');
const cp =require('child_process');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let running = true;

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "nodetestrunner" is now active!');

	//runs program
	let disposable = vscode.commands.registerCommand('nodetestrunner.helloWorld', function () {
		vscode.window.showInformationMessage('node runner is running');
		running = true;	
	});
	
	//listens for save event
	let listener = vscode.workspace.onDidSaveTextDocument(()=>{
		if(!running) return;

		vscode.window.showInformationMessage('running code from save!');	
	})

	let deactivate = vscode.commands.registerCommand('nodetestrunner.StopTestRunner', ()=>{
		running = false;
		vscode.window.showInformationMessage('Node Runner has been stopped!');	
	});


	context.subscriptions.push(disposable);
	context.subscriptions.push(listener);
	context.subscriptions.push(deactivate)
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
