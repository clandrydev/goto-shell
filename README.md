
# 🧠 GOTO Shell
*A retro-themed command interpreter for PowerShell inside VS Code*

![Version](https://img.shields.io/badge/version-0.0.1-blue)
![VS Code](https://img.shields.io/badge/VS%20Code-Extension-green)

## 🚀 Overview

GOTO Shell is a playful, retro-inspired VS Code extension that lets you run natural language commands like `status device` or `ping google` and translates them into real PowerShell commands. It’s designed for developers who love semantic control, ASCII flair, and command-line nostalgia.

## 🚀 Core Features

| Feature              | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| **Command Parser**   | Converts GOTO-style input into PowerShell equivalents using a command map. |
| **Execution Preview**| Displays the translated PowerShell command before executing it.            |
| **ASCII Splash**     | Shows a retro splash screen on extension activation.                       |
| **Command History**  | Logs previously entered commands and their results.                        |
| **Accessibility Hooks** | Optional toggles for narrator, magnifier, and other adaptive tools.     |

## 📦 Installation

Clone this repo:
```bash
git clone https://github.com/clandrydev/goto-shell.git
cd goto-shell
```

## Install Dependencies

``` powershell
npm install
```

## 🧪 Usage

1. Open the Command Palette (`Ctrl+Shift+P`)
2. Run `Run GOTO Shell Command`
3. Enter a GOTO-style command like:
   - `status device`
   - `check cpu`
   - `ping google`

The extension will preview and execute the corresponding PowerShell command in a terminal.

## 🎨 Customization

- Add new commands in `commands/commandMap.js`
- Modify the splash screen in `assets/asciiSplash.txt`
- Extend functionality with fuzzy matching, dry-run mode, or command aliases

## 🤝 Contributing

Pull requests are welcome! If you have ideas for new commands, retro themes, or accessibility features, feel free to fork and submit a PR.

## 📜 License

MIT License. See `LICENSE` file for details.
