'use strict';
const fs = require('fs')

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const pages_file = fs.readFileSync("public/pages.json");
const urls = JSON.parse(pages_file).pages.map( p => `/page/${p.id}`)

// kill the title url
urls.shift(1)

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    prember: {
      urls: ['/'].concat(urls.slice(0,10))
    }
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
