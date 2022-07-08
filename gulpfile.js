const { src, watch, task, series, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

task("compileSass", () => {
  return src("./src/sass/**/*.scss").pipe(sass()).pipe(dest("./src/css/"));
});

task("watchSass", () => {
  return watch("./src/sass/**/*.scss", series("compileSass"));
});

exports.default = series("compileSass", "watchSass");
