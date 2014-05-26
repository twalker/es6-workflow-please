var builder = require('systemjs-builder')
  , path = require('path');

builder.build('app', {
  baseURL: path.resolve('app/'),

  // any map config
  map: {
    jquery: '../bower_components/jquery/dist/jquery',
    underscore: '../bower_components/lodash/dist/lodash',
    backbone: '../bower_components/backbone/backbone',
    mustache: '../bower_components/mustache/mustache'
  },

  // etc. any SystemJS config
}, 'app-built.js')
.then(function() {
  console.log('Build complete');
})
.catch(function(err) {
  console.log('Build error');
  console.log(err);
});