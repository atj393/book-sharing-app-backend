@echo off
SETLOCAL

REM Create root directory
mkdir book-sharing-app-backend
cd book-sharing-app-backend

REM Create main folders
mkdir config controllers models routes services utils test

REM Create config files
cd config
echo. > database.ts
echo. > index.ts
cd ..

REM Create controller files
cd controllers
echo. > userController.ts
echo. > imageController.ts
cd ..

REM Create model files
cd models
echo. > userModel.ts
echo. > imageModel.ts
cd ..

REM Create route files
cd routes
echo. > userRoutes.ts
echo. > imageRoutes.ts
cd ..

REM Create service files
cd services
echo. > userService.ts
echo. > imageService.ts
cd ..

REM Create utility files
cd utils
echo. > errorHandler.ts
echo. > helpers.ts
cd ..

REM Create test folders and files
cd test
mkdir unit integration
cd unit
echo. > exampleTest.ts
cd ..
cd integration
echo. > exampleIntegrationTest.ts
cd ..

REM Create root files
cd ..
echo. > app.ts
echo. > server.ts
echo. > .env
echo. > tsconfig.json
echo. > package.json
echo. > README.md

echo Folder structure and files created successfully!

ENDLOCAL
