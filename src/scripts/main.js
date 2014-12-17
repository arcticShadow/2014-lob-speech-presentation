// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  cube = require('bespoke-theme-cube'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale');

// Bespoke.js
bespoke.from('article', [
  cube(),
  keys(),
  touch(),
  scale(),
  bullets('li, .bullet'),
  backdrop()
]);
