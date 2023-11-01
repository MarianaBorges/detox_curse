const gulp = require('gulp');
const reporter = require('multiple-cucumber-html-reporter');

gulp.task('report-generation', async () => {
   await reporter.generate({"jsonDir":".tmp/","reportPath":"/reports/","pageTitle":"Pinnecle QA Academy - Android Test Automation Report","reportName":"Pinnecle QA Academy - Android Test Automation Report: Regression Test Suite","displayDuration":true,"metadate":{"device":"Pixel XL","platform":{"name":"Android","version":"10"},"app":{"name":"membersApp","version":"1.0.0"}},"customData":{"title":"Run Information","data":[{"label":"Execution Date","value":"2023-10-31T22:58:31.519Z"},{"label":"Execution Start Time","value":"2023-10-31T22:56:53.392Z"},{"label":"Execution End Time","value":"2023-10-31T22:58:31.519Z"},{"label":"Execution Duration","value":"2023-10-31T22:58:31.519Z"},{"label":"Environment","value":"UTA"},{"label":"Framework","value":"Detox"}]}})
})