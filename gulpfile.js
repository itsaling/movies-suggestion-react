var gulp = require("gulp");
var sass = require("gulp-sass");
const { watch } = require("gulp");

gulp.task("hello", function() {
  console.log("hello");
});

gulp.task("sass", function() {
  return gulp
    .src("./src/scss/style.scss")
    .pipe(sass())
    .pipe(gulp.dest("./src/css"));
});

gulp.task("watch", function() {
  gulp.watch("./src/scss/*.scss", gulp.series("sass"));
  // Other watchers
});

// function defaultTask(cb) {
//   // place code for your default task here
//   cb();
// }

// exports.default = defaultTask;
