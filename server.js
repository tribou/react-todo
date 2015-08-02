// Bundle the client assets with Webpack
//var StartWebpack = require('./webpack');
//StartWebpack();

// Create a basic Hapi.js server
var Hapi = require('hapi');
var dateFormat = require('dateformat');
var format = "dd mmm HH:MM:ss";

// Basic Hapi.js connection stuff
var server = new Hapi.Server();
server.connection({
  host: '0.0.0.0',
  port: 8000
});

// Add the React-rendering view engine
server.views({
    engines: {
        jsx: require('hapi-react-views')
    },
    relativeTo: __dirname,
    path: 'views'
});

// Add a route to serve static assets (CSS, JS, IMG)
server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: 'assets',
      index: ['index.html']
    }
  }
});

// Add main app route
server.route({
  method: 'GET',
  path: '/',
  handler: {
    view: 'Default'
  }
});

server.start(function() {
  console.log(dateFormat(new Date(), format) + ' - Server started at: ' + server.info.uri);
});

