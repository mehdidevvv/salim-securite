@echo off
title BRAND AIoT Security (Production)
cd /d "%~dp0"
echo ========================================================
echo   Lancement du site web BRAND AIoT en mode production...
echo ========================================================
echo.

:: Liberation automatique du port 3000 si deja occupe
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":3000" ^| findstr "LISTENING"') do (
    echo Liberation du port 3000 (PID: %%a)...
    taskkill /F /PID %%a >nul 2>&1
)

echo Ouverture du navigateur sur http://localhost:3000 ...
start http://localhost:3000
echo Demarrage du serveur Next.js...
call npm.cmd run start
pause
