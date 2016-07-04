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
  'copy:cname',
  'copy:readme',
  'build',
  'pushToGithub'
]);


gulp.task('clear:dist', (done) => {
  exec(`rm -rf ${path.join(__dirname, 'dist/')}`, (err, stdout, stderr) => {
    if (err) throw new gutil.PluginError('child_process', err);
    if (stderr) throw new gutil.PluginError('child_process', stderr);
    done();
  });
});


gulp.task('copy:assets', (done) => {
  gulp.src('./app/assets/**/*')
  .pipe(gulp.dest('./dist/assets/'))
  .on('end', done);
});


gulp.task('copy:cname', (done) => {
  gulp.src('./CNAME')
  .pipe(gulp.dest('./dist/'))
  .on('end', done);
});


gulp.task('copy:readme', (done) => {
  gulp.src('./README.md')
  .pipe(gulp.dest('./dist/'))
  .on('end', done);
});


gulp.task('build', [
  'clear:dist',
  'copy:assets',
  'copy:cname',
  'copy:readme'
], (done) => {
  webpack(webpackConfigProduction, (err, stats) => {
    if (err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString({
      chunks: false,
      colors: true
    }));
    done();
  });
});


gulp.task('pushToGithub', ['build'], () => {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({
      branch: 'master'
    }));
});
