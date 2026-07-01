// ==UserScript==
// @name         Kyle Marko's Tampermonkey Dev Loader
// @version      1.0
// @description  Deploy this script with DevServer.bat to Load Beta.js live from localhost:8765. Run dev-server.bat first, then install this in Tampermonkey INSTEAD of the real script while developing. Update your requirements in tampermonkey settings to keep any changes up to date.
// @author       Kyle Marko
// @icon         ADD ICON.
// @match        ADD ANY MATCHES / URLS YOU WANT IT TO RUN ON HERE.
// @exclude      ADD ANY EXCLUDES HERE.
// @grant        ADD ANY NEEDED GRANTS HERE.
// @connect      ADD ANY SITES YOU NEED TO CONNECT TO HERE.
// @require      ADD ANY ADDITIONAL REQUIREMENTS HERE.
// @require      http://localhost:8765/Beta.js
// ==/UserScript==


// This file is intentionally empty — all logic is loaded via @require above.

// HOW TO USE:
//   1. Double-click dev-server.bat  (in the root of your folder)
//      → This starts a local HTTP server on port 8765 serving the Tampermonkey folder.
//
//   2. In Tampermonkey:
//      → DISABLE your real script you are currently editing.
//      → INSTALL this file (Beta-dev-loader.user.js) as a new script
//
//   3. In Tampermonkey Settings → Security:
//      → Make sure "Allow scripts with @require from localhost" is enabled
//        (or set the CSP/security level to allow localhost requires)
//
//   4. Edit Beta.js in your IDE → Save → Reload the page in Firefox
//      → Your changes are live so long as you update your script requirements in the Tampermonkey settings.
//
//   5. When done developing:
//      → Disable this loader script
//      → Re-enable your real script
//      → Stop the dev server (Ctrl+C in the bat window)
//
// NOTE: As alluded to in step 4, Tampermonkey caches @require files. If your changes aren't showing up,
//       go to Tampermonkey Dashboard → this script → Editor → click the
//       "Externals" tab and hit reload or refresh next to the localhost entry to bust
//       the cache, then reload the page.
// ─────────────────────────────────────────────────────────────────────────────
