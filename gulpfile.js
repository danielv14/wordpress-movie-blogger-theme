var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');


var paths = {
  'sass': {
    'source': 'assets/sass/style.scss',
    'all': [
      'assets/sass/*.scss',
      'assets/sass/*/*.scss'
    ],
    'output': './'
  }
}

gulp.task('sass', function() {
  return gulp.src(paths.sass.source)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.sass.output))
    .pipe(livereload());
});


gulp.task('watch', function() {
  livereload.listen({ host: null });
  gulp.watch(paths.sass.all, ['sass']);
});

gulp.task('default', ['sass', 'watch']);
