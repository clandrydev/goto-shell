
const vscode = require('vscode');
const commandMap = require('./commands/commandMap');

function activate(context) {
    console.log("GOTO Shell activated 🚀");

    const disposable = vscode.commands.registerCommand('goto-shell.run', async () => {
        const input = await vscode.window.showInputBox({ prompt: 'Enter GOTO command' });
        if (!input) {
            // user cancelled
            return;
        }

        const key = input.toLowerCase();
        const command = commandMap[key];

        if (command) {
            vscode.window.showInformationMessage(`PowerShell: ${command}`);
            const terminal = vscode.window.createTerminal("GOTO Shell");
            terminal.sendText(command);
            terminal.show();
        } else {
            vscode.window.showErrorMessage("Command not recognized");
        }
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = { activate, deactivate };
