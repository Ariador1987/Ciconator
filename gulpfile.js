const gulp = require("gulp");
const uglify = require("gulp-uglify");
const htmlmin = require("gulp-htmlmin");
const cssnano = require("gulp-cssnano");
const imagemin = require("gulp-imagemin");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const webpack = require("webpack-stream");
const babel = require("gulp-babel");
const { dest } = require("gulp");
const mode = require("gulp-mode")();

gulp.task("process-sass", () => {
    return gulp
        .src("src/scss/main.scss")
        .pipe(mode.development(sourcemaps.init()))
        .pipe(sass().on("error", sass.logError))
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["> 1%"],
            })
        )
        .pipe(cssnano())
        .pipe(mode.development(sourcemaps.write()))
        .pipe(gulp.dest("dist/css"));
});

gulp.task("minify-html", () => {
    return gulp
        .src("src/*.html")
        .pipe(
            htmlmin({
                removeComments: true,
                collapseWhitespace: true,
                preserveLineBreaks: true,
            })
        )
        .pipe(dest("dist"));
});

gulp.task("minify-img", () => {
    return gulp.src("src/img/*").pipe(imagemin()).pipe(dest("dist/img"));
});

gulp.task("process-js", () => {
    return gulp
        .src("src/js/main.js")
        .pipe(
            webpack({
                mode: mode.development() ? "development" : "production",
                watch: true,
                output: {
                    filename: "bundle.js",
                },
            })
        )
        .pipe(babel({ presets: ["@babel/env"] }))
        .pipe(mode.development(sourcemaps.init()))
        .pipe(
            uglify().on("error", (uglify) => {
                console.error(uglify.message);
                this.emit("end");
            })
        )
        .pipe(mode.development(sourcemaps.write()))
        .pipe(gulp.dest("dist/js"));
});

gulp.task("default", () => {
    gulp.watch(
        ["src/scss/*.scss", "src/scss/*/*.scss"],
        { ignoreInitial: false },
        gulp.series("process-sass")
    );

    gulp.watch(
        ["src/js/*.js", "src/js/*/*.js"],
        { ignoreInitial: false },
        gulp.series("process-js")
    );

    gulp.watch(
        ["src/*.html"],
        { ignoreInitial: false },
        gulp.series("minify-html")
    );
});
