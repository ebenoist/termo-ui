/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

var app = new EmberApp();

app.import('bower_components/bootstrap/dist/js/bootstrap.js');
app.import('bower_components/bootstrap/dist/css/bootstrap.css');
app.import('bower_components/font-awesome/css/font-awesome.css');
app.import('bower_components/weather-icons/css/weather-icons.css');
app.import('bower_components/jquery-knob/js/jquery.knob.js');
app.import('bower_components/simpleWeather/jquery.simpleWeather.js');

var faTree = pickFiles('bower_components/font-awesome/fonts', {
  srcDir: '/',
  files: ['*'],
  destDir: '/fonts'
});

var wiTree = pickFiles('bower_components/weather-icons/font', {
  srcDir: '/',
  files: ['*'],
  destDir: '/font'
});

module.exports = mergeTrees([app.toTree(), faTree, wiTree]);
