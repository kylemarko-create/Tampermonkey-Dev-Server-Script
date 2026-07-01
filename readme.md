# Tampermonkey Dev Server

A lightweight local development server for Tampermonkey userscripts. Edit your script in any IDE, save, and see changes instantly on page reload. No repeated copy pasting into the Tampermonkey editor required.

## How It Works

Instead of editing scripts directly inside Tampermonkey, this setup serves your script from a local HTTP server. A small "loader" userscript uses `@require http://localhost:8765/Beta.js` to pull in your working file on every page load.

```
┌─────────────┐       @require        ┌────────────────────┐
│ Tampermonkey│  ◄──────────────────  │  localhost:8765    │
│  (Loader)   │                       │  (DevServer.bat)   │
└─────────────┘                       └────────────────────┘
                                              ▲
                                              │ serves
                                              │
                                       ┌──────┴──────┐
                                       │  Beta.js    │
                                       │ (your code) │
                                       └─────────────┘
```

## Files

| File | Purpose |
|------|---------|
| `DevServer.bat` | Starts a Python HTTP server on port 8765, serving your plugin folder |
| `DevLoader Tampermonkey Script.js` | A Tampermonkey userscript template that loads `Beta.js` from localhost. Input this in your tampermonkey plugin. |

## Setup

### Prerequisites

- [Tampermonkey](https://www.tampermonkey.net/) browser extension
- Python 3 installed and available on your PATH

### Steps

1. **Create your plugin folder** Place your working script as `Beta.js` inside an `ExamplePlugin/` subfolder (or rename the folder in `DevServer.bat` to match your project).

2. **Configure the loader script** Open `DevLoader Tampermonkey Script.js` and fill in the placeholder fields:
   - `@match` — URLs where the script should run
   - `@exclude` — URLs to skip
   - `@grant` — Any GM APIs your script needs
   - `@connect` — Domains your script fetches from
   - `@icon` — Optional icon URL

Ideally, these should all match what is included in your actual tampermonkey you are targeting a production release for, with the exception of the localhost value.

3. **Install the loader in Tampermonkey** Create a new script in Tampermonkey and paste in the configured loader. Disable your production version of the script.

4. **Allow localhost requires** In Tampermonkey Settings → Security, make sure scripts are allowed to `@require` from `localhost`.

## Usage

1. Double-click `DevServer.bat` to start the local server.
2. Edit `Beta.js` in your IDE.
3. Save the file, then reload the target page in your browser.
4. Your changes are live.

When you're done developing, disable the loader script, re-enable your real script, and close the server window.

## Troubleshooting

**Changes not showing up?**
Tampermonkey caches `@require` files. To bust the cache:
1. Open Tampermonkey Dashboard → select the loader script → Editor tab.
2. Click the **Externals** tab.
3. Hit reload/refresh next to the `localhost` entry.
4. Reload the page.

**Server won't start?**
Make sure Python 3 is installed and on your PATH. Run `python --version` in a terminal to verify.

**Port conflict?**
If port 8765 is already in use, change it in both `DevServer.bat` and the `@require` URL in the loader script.

## Customization

- **Port** — Change `8765` in `DevServer.bat` and the loader's `@require` line.
- **Served folder** — Update the `cd` path in `DevServer.bat` to point at your script's directory.
- **Script filename** — Rename `Beta.js` to whatever you like; just update the `@require` URL to match.

## License

Open Source, no specific licence.
