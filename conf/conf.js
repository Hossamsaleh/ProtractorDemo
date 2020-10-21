exports.config = {
  directConnect: true,
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['../steps/**/*.js']
  },
  baseUrl: 'about:blank',
  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../features/**/*.feature'],

  // Setup the report before any tests start
  // beforeLaunch: function() {
  //   });
  // },

  // Assign the test reporter to each running instance
  // onPrepare: function() {
  // },

  // Close the report after all tests finish
  // afterLaunch: function(exitCode) {
  // }

};
