@echo off
title Example Tampermonkey Dev Server
echo ============================================
echo  Tampermonkey Dev Server
echo  Serving: ExamplePlugin\ on http://localhost:8765
echo ============================================
echo.
echo  Tampermonkey will load Beta.js live from:
echo  http://localhost:8765/Beta.js
echo.
echo  Just save Beta.js in your IDE, then reload
echo  the page in your browser - changes are live!
echo.
echo  Press Ctrl+C to stop the server.
echo.
cd /d "%~dp0ExamplePlugin"
python -m http.server 8765
pause
