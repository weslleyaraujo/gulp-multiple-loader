/* global describe it:true */
'use strict';

var assert = require('assert');
var eslint = require('eslint');
var cli = new eslint.CLIEngine();
var formatter = cli.getFormatter();

var report;

describe('#code style', function() {
  it('index.js should follow style guide', function() {
    report = cli.executeOnFiles(['index.js']);
    if (report.errorCount > 0 || report.warningCount > 0) {
      console.log(formatter(report.results));
    }

    assert.equal(0, report.errorCount);
    assert.equal(0, report.warningCount);
  });

  it('tests should follow style guide', function() {
    report = cli.executeOnFiles(['test/lint.js', 'test/main.js']);
    if (report.errorCount > 0 || report.warningCount > 0) {
      console.log(formatter(report.results));
    }

    assert.equal(0, report.errorCount);
    assert.equal(0, report.warningCount);
  });
});
