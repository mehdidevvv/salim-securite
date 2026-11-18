@echo off
chcp 65001 >nul
echo ========================================================
echo   Envoi du site vers GitHub (mehdidevv/salim-securite)
echo ========================================================
echo.
git push -u origin main
echo.
echo Opération terminée. Appuyez sur une touche pour quitter.
pause >nul
