// Подключаем модули галпа
const gulp = require('gulp');
const concat = require('gulp-concat');

//Порядок подключения css файлов 
const cssFiles = [
    './src/css/style.css',
    './src/css/normalize.min.css',
    './src/css/animate.css',
    './src/css/slick.css',
    './src/css/slick-theme.css'
]

// Порядок подключения js файлов
const jsFiles = [
    './src/js/main.js',
    './src/js/modal.js',
    './src/js/slick.js',
    './src/js/wow.min.js',
    './src/js/jquery.validate.min.js',
    './src/js/jquery.maskedinput.min.js'
]


// Таск на стили CSS
function styles() {
  // Шаблон для поиска файлов CSS
  // Все файлы по шаблону './src/css/**/*.css'   
  return gulp.src(cssFiles)
  //Объединение файлов в один   
  .pipe(concat('style.css'))
}
// Выходная папка для стилей
.pipe(gulp.dest('./dist/css'))

// Таск на скрипты JS
function scripts() {
  // Шаблон для поиска файлов JS
  // Все файлы по шаблону './src/js/**/*.js'   
  return gulp.src(jsFiles)
   //Объединение файлов в один   
   .pipe(concat('script.css'))
}
// Выходная папка для стилей
.pipe(gulp.dest('./dist/js'))

// Таск вызывающий функцию styles
gulp.task('styles', styles);
// Таск вызывающий функцию scripts
gulp.task('scripts', scripts); 








// var gulp = require("gulp");
// var cleanCSS = require("gulp-clean-css");
// gulp.task("default", defaultTask);

// function defaultTask(done) {
//   done();
// }

// gulp.task("minify-css", function(done) {
//   gulp
//     .src("./src/css/*.css")
//     .pipe(
//       cleanCSS({
//         compatibility: "ie8"
//       })
//     )
//     .pipe(gulp.dest("dist/css/"));

//   done();
// });

// gulp.task("move-js", function(done) {
//   return gulp
//     .src("./src/js/*.js")
//     .pipe(gulp.dest("dist/js/"))

//     .pipe(gulp.dest("dist/css/"));

//   done();
// });
