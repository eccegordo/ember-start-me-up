/* jshint node:true */
'use strict';

module.exports = function(environment) {
  var ENV = {
    modulePrefix: '<%= engineName %>',
    environment: environment
  }

  return ENV;
};
