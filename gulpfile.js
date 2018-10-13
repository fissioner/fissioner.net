const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
 
gulp.task('autoprefix', () =>
    gulp.src('styles.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'))
);