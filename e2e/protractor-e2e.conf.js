// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
const jasmineReporters = require('jasmine-reporters');
const PrettyReporter = require('protractor-pretty-html-reporter').Reporter;
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const now = new Date();
exports.report_name = 'Report-' + now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + "-" + now.getHours() + "-" + now.getMinutes() + "-" + now.getSeconds();
exports.logfile_name = 'results-' + now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + "-" + now.getHours() + "-" + now.getMinutes() + "-" + now.getSeconds();
var Reporter = path.resolve("./target/");
var report = `${Reporter}` + '/' + exports.report_name;

const mkdirSync = function (report) {
  try {
    fs.mkdirSync(report);
  }
  catch (err) {
    if (err.code !== 'EEXIST')
      throw err;
  }
};
// @ts-ignore
var prettyReporter = new PrettyReporter({
  path: report,
  screenshotOnPassed: true
});

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*-e2e.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome',
    'directConnect': true,
    sharedTestFiles: true,
    maxInstances: 1
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  beforeLaunch() {
    mkdirSync("target")
    prettyReporter.startReporter();
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(prettyReporter);
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};