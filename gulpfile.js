var gulp         = require('gulp'),
    less         = require('gulp-less'),
    browserSync  = require('browser-sync'),
    cssnano      = require('gulp-cssnano'),
    rename       = require('gulp-rename'),
    del          = require('del'),
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    cache        = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function () {
    return gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({stream:true}))
});

gulp.task('css-min', ['less'], function () {
    return gulp.src('src/css/style.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('src/css'));
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'src'
        },
        notify: false
    });
});

gulp.task('clean', function () {
    return del.sync('dist');
});

gulp.task('clear', function () {
    return cache.clearAll();
});

gulp.task('img', function () {
    return gulp.src('src/img/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{remoteViewBox: false}],
            une: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('icon', function () {
    return gulp.src('src/icons/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{remoteViewBox: false}],
            une: [pngquant()]
        })))
        .pipe(gulp.dest('dist/icons'));
});

gulp.task('watch', ['browser-sync', 'css-min'], function () {
    gulp.watch('src/less/*.less', ['less']);
    gulp.watch('src/*.html', browserSync.reload);
    gulp.watch('src/js/*.js', browserSync.reload);
});

gulp.task('build', ['clean', 'img', 'icon', 'less'], function () {
    var buildCss = gulp.src([
        'src/css/style.min.css'
    ])
        .pipe(gulp.dest('dist/css'));

    var buildJs = gulp.src('src/js/*.js')
        .pipe(gulp.dest('dist/js'));

    var buildHtml = gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});