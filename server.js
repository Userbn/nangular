const http  = require('http');
const jsdom = require('jsdom');
const fs    = require("fs");

const hostname = '127.0.0.1';
const port = 3000;

var parameters   = [];

require('core-js/client/shim.min.js');
require('zone.js');
require('systemjs/dist/system.src.js');
require('./systemjs.config.js');

var document = jsdom.jsdom('<!doctype html><html><base href="/"><body><my-app><my-app></body></html>');
var window = document.defaultView;

global.document = document;
global.HTMLElement = window.HTMLElement;
global.XMLHttpRequest = window.XMLHttpRequest;
global.Element = function(){};


System.import('app').catch(function(err){ console.error(err); });

const server = http.createServer((request, response) => {
  console.log(request.url);
  window.location.href = request.url;
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');  
  response.end(document.body.innerHTML);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
