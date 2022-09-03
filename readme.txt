ng new akita-demo

cd D:\src\akita-demo>

npm i @datorama/akita --save

npm install bootstrap --save

ng generate module course

Create a file called course.model.ts and place it under the app/course/model folder.

Define Akita artifacts such as entity store and query entity inside a directory app/course/store directory.

Create course.service.ts and place it under the app/course/services folder. This service class will be responsible for two primary tasks.
  > Invoking the backend API and performing the data operations.
  > Updating the application state with the functions provided by Akita entity store.

Create course-list and create-course components.

Create REST API server with fake data
=========================================

npm install json-server --save

Next, create a server folder in the root folder of your Angular project.

database.json acts as database.

npm i @faker-js/faker --save

Add generator.js to generate fake data.

Add following to package.json:
    "generate": "node ./server/generate.js > ./server/database.json",
    "server": "json-server --watch ./server/database.json"

npm run generate

npm run server (ref: https://www.techiediaries.com/angular-13-tutorial/build-json-rest-api/)

Configuring a Proxy to Access the REST API
=========================================

Create a file called proxy.conf.json inside the project’s root folder (the same level where package.json file exists) and below content:
{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false,
    "pathRewrite": {
      "^/api": ""
    }
  }
}

Open the the angular.json file, and simply add the proxyConfig option to the serve target as follows:

"architect": {
  "serve": {
    "builder": "@angular-devkit/build-angular:dev-server",
    "options": {
      "browserTarget": "<application-name>:build",
      "proxyConfig": "src/proxy.conf.json"
    },


OR instead of configuring proxy in angular.json, you can directory use proxy as :
  ng serve --proxy-config proxy.conf.json



