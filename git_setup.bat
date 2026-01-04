@echo off
echo Initializing Git Repository...
git init

echo Adding files...
git add .

echo Committing changes...
git commit -m "بداية جديدة"

echo Adding remote origin (Replace URL if needed)...
git remote add origin https://github.com/fasdokhos/اسم-المشروع-الجديد.git

echo Pushing to main...
git push -u origin main

echo Done.
pause
