const path = require("path");

const del = require("del");
const { src, dest, parallel, series } = require("gulp");
const gulpif = require("gulp-if");
const uglify = require("gulp-uglify");
const jsonMinify = require("gulp-json-minify");
const license = require("./tools/gulp-utils/license");

const outputBase = "dist";

const srcPaths = {
  config: "src/config/**/*",
  defaultConfigs: "src/defaultconfigs/**/*",
  js: "src/**/*.js",
  json: "src/**/*.json",
};

const fileChecker = {
  cfg: (file) => file.extname === ".cfg",
  toml: (file) => file.extname === ".toml",
};

const buildConfig = () => {
  return src([srcPaths.config, "!**/*.js", "!**/*.json"])
    .pipe(gulpif(fileChecker.cfg, license("hash")))
    .pipe(gulpif(fileChecker.toml, license("hash")))
    .pipe(dest(path.join(outputBase, "config")));
};

const buildDefaultConfigs = () => {
  return src([srcPaths.defaultConfigs, "!**/*.js", "!**/*.json"])
    .pipe(gulpif(fileChecker.cfg, license("hash")))
    .pipe(gulpif(fileChecker.toml, license("hash")))
    .pipe(dest(path.join(outputBase, "defaultconfigs")));
};

const buildJavaScript = () => {
  return src(srcPaths.js)
    .pipe(uglify())
    .pipe(license("js"))
    .pipe(dest(outputBase));
};

const buildJson = () => {
  return src(srcPaths.json).pipe(jsonMinify()).pipe(dest(outputBase));
};

const clean = () => {
  return del(outputBase);
};

const copyRemaining = () => {
  const excludes = Object.values(srcPaths).map((path) => `!${path}`);
  return src(["src/**/*", ...excludes]).pipe(dest(outputBase));
};

exports.default = exports.build = series(
  clean,
  parallel(
    buildJavaScript,
    buildJson,
    buildConfig,
    buildDefaultConfigs,
    copyRemaining
  )
);
