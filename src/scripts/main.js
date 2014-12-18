// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  cube = require('bespoke-theme-cube'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  substeps = require('bespoke-substeps/dom')
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  notes = require('bespoke-notes'),
  sync = require('bespoke-sync/client');

// Bespoke.js
bespoke.from('article', [
  cube(),
  keys(),
  touch(),
  scale(),
  notes(),
  sync(),
  //bullets('li, .bullet'),
  substeps(),
  backdrop()
]);
