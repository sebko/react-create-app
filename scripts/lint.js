const gulpStylelint = require('gulp-stylelint');
const stylelintCheckstyleFormatter = require('stylelint-checkstyle-formatter');
const gulp = require('gulp');

gulp
  .src('src/**/*.css')
  .pipe(gulpStylelint({
    failAfterError: false,
    reportOutputDir: 'reports/lint',
    reporters: [
      {formatter: 'verbose', console: true},
      {formatter: stylelintCheckstyleFormatter, save: 'report.xml'}
    ],
    debug: true
  }));
