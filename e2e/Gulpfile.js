const gulp = require('gulp');
const reporter = require('multiple-cucumber-html-reporter');

gulp.task('report-generation', async () => {
   await reporter.generate('options')
})