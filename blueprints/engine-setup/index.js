/*jshint node:true*/
var isPackageMissing = require('ember-cli-is-package-missing');

module.exports = {
  description: 'Convert an addon into an engine',
  anonymousOptions: [
    'name'
  ],

  locals: function(options) {
    return {
      engineName: options.entity.name
    };
  },

  afterInstall: function(options) {
    if (!options.dryRun && isPackageMissing(this, 'ember-cli-htmlbars')) {
      return this.addPackagesToProject([
        { name: 'ember-cli-htmlbars', target: '^1.0.3' }
      ]);
    }
  }
};
