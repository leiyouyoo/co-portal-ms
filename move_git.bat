@ECHO OFF
call :SET_GIT_REMOTE
IF %errorlevel% NEQ 0 GOTO :end
FOR /F "tokens=* USEBACKQ" %%F IN (`@dir apps /b`) DO (
SET dir_suffix=%%F
cd apps\%%F
call :SET_GIT_REMOTE
cd %~dp0
)
echo Config done
exit /b 0


:SET_GIT_REMOTE
FOR /F "tokens=* USEBACKQ" %%F IN (`git remote get-url origin`) DO (
SET dir_suffix=%%F
)
set "dir_suffix=%dir_suffix:*tfs/=%"
::ECHO %dir_suffix%
git remote set-url origin http://tfs.dev.com/tfs/%dir_suffix%
echo Set repo http://tfs.dev.com/tfs/%dir_suffix%
EXIT /B 0

:end
exit 0

