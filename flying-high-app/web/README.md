# Front-end Angular

The front-end is built with Angular, you'll need to install Angular cli to develop front-end. Make sure you have some basic knowledge of Angular and TypeScript. <br>
Install the Angular cli globally by using `npm install -g @angular/cli`.<br>
You will need to have a back-end running, please refer to the README of the back-end to see how to start the back-end server.<br>
After the back-end started, you'll have to install all front-end dependencies by using `npm install`.<br>
Since back-end is running default on port 3000, I preconfigured a proxy file which you can use to proxy all requests to the back-end. You can easily start the server and proxy together by using `ng serve --proxy-config proxy.conf.json`.<br>
Once you finish your changes or development, you can use `ng build --prod` to build front-end files, which you can copy all dist/web files to the server folder and serve all files using the back-end, again, please refer to the README in server<br>