# Demo flight app
This app consists of front-end (Angular) and back-end (Nestjs).

You need to install nodejs and npm to start the app.

## Running the application locally
To run the application locally, f

First install the node dependencies:
```
npm install
```

Then start the application as follows:
```
npm start
```

This will start the application on http://localhost:3000/
The API docs can be found on http://localhost:3000/api_doc/

## Running the Cypress tests

You can run the Cypress tests against a running server like this:
```
npx run cypress
```

You can start up the server and run the tests like this:
```
npm run test
```

## To develp with the application

To work on the code of the application itself, you can follow these instructions:

Go to the server directory and you'll see a dist folder which contains the built files of the back-end and a web folder which contains the web built files.<br>
In this server directory, install all back-end dependencies by using `npm install` and then simply start the app by using `node dist/main`<br>
If you want to develop the project by yourself, please refer to the README in the server or web folder.

# How to run the application locally
## FRONT END BUILD
The Angular front end needs to be built and deployed to the server/web directory
```
cd web
npm install -g @angular/cli
npm install
npx ng build
```

The compiled front-end application is now in the web/dist/web directory
We need to copy it to the server/web directory

```
cp -Rf dist/web ../server/
```

## SERVER BUILD
Next we go to the server directory and start up the complete application.

```cd server
npm install -g @nestjs/cli
npm install
nest start
```
