/* jshint node: true */
fs = require("fs");

module.exports = function(environment) {
  var ENV;
  var secrets;
  secrets = JSON.parse(fs.readFileSync("./config/secrets.json"));

  ENV = {
    modulePrefix: 'termo-ui',
    environment: environment,
    apiKey: secrets.apiKey,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: { FEATURES: { } },
    APP: { }
  };

  if (environment === 'development') {
    ENV.host = "http://localhost:8080";
    ENV.apiKey = "development";

    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.host = secrets.host;
    ENV.apiKey = secrets.apiKey;
  }

  return ENV;
};
