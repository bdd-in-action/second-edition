# Server Nestjs

The server is achieved using Nestjs which is a pure TypeScript node web framework, if you would like to learn it, you can visit their website and documents.<br>
As you can see in this folder, a dist folder and a web folder are located. They are the back-end built files and front-end built files. If you have any changes of front-end or back-end, you will have to rebuilt them.<br>
In case you want to develop the code, you will need to have Nestjs cli installed. You can do that using `npm install -g @nestjs/cli`. After the cli is installed, you have to install all back-end dependencies using `npm install`. <br>
The back-end is producing restful services which can be consumed by the front-end or in case you would like to test the api you can use Postman, etc. <br>

> Note: some endpoints are protected by AuthGuard, you will need a token and attach it in the header `Authorization: 'Bearer token'` to access them. You can get the token by visiting the endpoint api/login and pass the default **email/password tracy@flyinghigh.com/trac3** <br>

You can start a live back-end server by using `nest start` or even start a hot-reload server by using `nest start --watch`.<br>
After you've finshied, you can build the back-end files using `nest build`. This operation will produce a dist folder in the root, which you can use node to start.<br>

## API
check the api doc at /api_doc
For example, if you start your server locally on port:3000, then you can check the doc at http://localhost:3000/api_doc/
