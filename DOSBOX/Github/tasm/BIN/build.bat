@echo off
::if [%2]==[-o] (goto exe) else (goto start)
::start
echo ----TASM----
tasm %1.asm
echo ----TLINK----
tlink %1
::exe
echo ----EXECUTEABLE----
%1.exe
echo.

