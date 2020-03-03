var gulp = require("gulp");
var cleanCSS = require("gulp-clean-css");
gulp.task("default", defaultTask);

function defaultTask(done) {
  done();
}

gulp.task("minify-css", function(done) {
  gulp
    .src("./src/css/*.css")
    .pipe(
      cleanCSS({
        compatibility: "ie8"
      })
    )
    .pipe(gulp.dest("dist/css/"));

  done();
});

gulp.task("move-js", function(done) {
  return gulp
    .src("./src/js/*.js")
    .pipe(gulp.dest("dist/js/"))

    .pipe(gulp.dest("dist/css/"));

  done();
});
