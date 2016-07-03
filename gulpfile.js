const gulp = require('gulp');
const gutil = require('gulp-util');
const ghPages = require('gulp-gh-pages');
const webpack = require('webpack');
const webpackConfigProduction = require('./webpack.config.production');
const exec = require('child_process').exec;
const path = require('path');


gulp.task('deploy', [
  'clear:dist',
  'copy:assets',
  'build',
  'pushToGithub'
]);


gulp.task('clear:dist', () => {
  exec(`rm -rf ${path.join(__dirname, 'dist/')}`);
});


gulp.task('copy:assets', () => {
  gulp.src('./app/assets/**/*')
  .pipe(gulp.dest('./dist/assets/'));
});


gulp.task('build', (callback) => {
  webpack(webpackConfigProduction, (err, stats) => {
    if (err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString());
    callback();
  });
});


gulp.task('pushToGithub', () => {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({
      branch: 'master'
    }));
});
