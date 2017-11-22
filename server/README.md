# Algorithms API

RESTful API for Algorithms App

+ express
+ mongoose
+ babel-cli
+ winston and morgan for logging
+ Async/Await

## Installation

npm install
```

## Starting the server

```
npm start
```

The server will run on port 3000. You can change this by editing `config.dev.js` file.

## Run server in production with Docker

```
npm run build
```

After npm building the project, go to project root directory, open shell and run:
```
docker build -t server .
```

## Debugging with Webstorm

Set babel-node executable as the node interpreter.
Pass node parameters of --preset=babel-preset-es2015
