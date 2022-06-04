const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const typescript = require('gulp-typescript');
const del = require('del');

const typescriptProject = typescript.createProject('tsconfig.json');

// Delete dist directory if present
gulp.task('build-clean', () => (
  del('dist/')
));

// Transpile JS to TS
gulp.task('typescript', () => (
  typescriptProject
    .src()
    .pipe(sourcemaps.init())
    .pipe(typescriptProject()).js
    .pipe(sourcemaps.write('.', { sourceRoot: '../src' }))
    .pipe(gulp.dest('dist'))
));

// Copy views
gulp.task('views', () => (
  gulp
    .src('src/views/**/*.ejs')
    .pipe(gulp.dest('./dist/views'))
));

// Copy static files
gulp.task('public', () => (
  gulp
    .src('src/public/**/*')
    .pipe(gulp.dest('./dist/public'))
));

gulp.task('default', gulp.series(
  'build-clean',
  'typescript',
  'views',
  'public',
));
