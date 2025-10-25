
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

## 🧠 Command Mappings

| GOTO Command         | PowerShell Equivalent                          | Description                                 |
|----------------------|------------------------------------------------|---------------------------------------------|
| `status device`      | `Get-ComputerInfo`                             | Shows system information                    |
| `check cpu`          | `Get-CimInstance Win32_Processor`              | Displays CPU details                        |
| `ping google`        | `Test-Connection google.com`                   | Pings Google to test connectivity           |
| `check memory`       | `Get-CimInstance Win32_PhysicalMemory`         | Shows RAM specs                             |
| `list disks`         | `Get-PhysicalDisk`                             | Lists physical disks                        |
| `check battery`      | `Get-CimInstance Win32_Battery`                | Displays battery status (if available)      |
| `check network`      | `Get-NetAdapter`                               | Lists network adapters                      |
| `check wifi`         | `Get-NetAdapter -Name "Wi-Fi"`                 | Shows Wi-Fi adapter status                  |
| `check os`           | `Get-CimInstance Win32_OperatingSystem`        | Displays OS details                         |
| `check bios`         | `Get-CimInstance Win32_BIOS`                   | Shows BIOS version and info                 |
| `check gpu`          | `Get-CimInstance Win32_VideoController`        | Displays graphics card info                 |
| `check sound`        | `Get-CimInstance Win32_SoundDevice`            | Lists sound devices                         |
| `check user`         | `whoami`                                       | Shows current user                          |
| `check uptime`       | `Get-CimInstance Win32_OperatingSystem | Select-Object LastBootUpTime` | Shows system uptime                         |

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
