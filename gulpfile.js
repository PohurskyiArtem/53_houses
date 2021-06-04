const { src, dest, parallel, series, watch, task, gulp } = require("gulp"),
  srcUrl = "D:/projects/53_houses/src/",
  srcFonts = srcUrl + "scss/_fonts.scss",
  dist = "D:/projects/53_houses/app/",
  baseDir = "app",
  sass = require("gulp-sass"),
  notify = require("gulp-notify"),
  sourcemaps = require("gulp-sourcemaps"),
  rename = require("gulp-rename"),
  autoprefixer = require("gulp-autoprefixer"),
  cleanCSS = require("gulp-clean-css"),
  browserSync = require("browser-sync").create(),
  fileInclude = require("gulp-file-include"),
  svgSprite = require("gulp-svg-sprite"),
  ttf2woff = require("gulp-ttf2woff"),
  ttf2woff2 = require("gulp-ttf2woff2"),
  cb = () => {},
  fs = require("fs"),
  del = require("del"),
  webpack = require("webpack"),
  webpackStream = require("webpack-stream"),
  uglify = require("gulp-uglify-es").default,
  gulpif = require('gulp-if'),
  tinypng = require("gulp-tinypng-free"),
  gutil = require("gulp-util"),
  ftp = require("vinyl-ftp"),
  htmlMin = require("gulp-htmlmin"),
  rev = require('gulp-rev'),
  revRewrite = require('gulp-rev-rewrite'),
  revDel = require('gulp-rev-delete-original'),
  concat = require('gulp-concat');

//converting fonts ttf => woff, woff2
const fonts = () => {
  src(srcUrl + "fonts/**.ttf")
    .pipe(ttf2woff())
    .pipe(dest(dist + "fonts/"));

  return src(srcUrl + "fonts/**.ttf")
    .pipe(ttf2woff2())
    .pipe(dest(dist + "fonts/"));
};

//including fonts
const fontsStyle = (done) => {
  let file_content = fs.readFileSync(srcFonts);

  fs.writeFile(srcFonts, "", cb);
  fs.readdir(dist + "fonts/", function (err, items) {
    if (items) {
      let c_fontname, i;
      for (i = 0; i < items.length; i += 1) {
        let fontname = items[i].split(".");
        fontname = fontname[0];
        if (c_fontname != fontname) {
          fs.appendFile(
            srcFonts,
            '@include font-face("' +
              fontname +
              '", "' +
              fontname +
              '", 400);\r\n',
            cb
          );
        }
        c_fontname = fontname;
      }
    }
  });

  done();
};

//copying svg to sprite.svg
const svgSprites = () => {
  return src(srcUrl + "img/svg/**.svg")
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: "../sprite.svg",
          },
        },
      })
    )
    .pipe(dest(dist + "img"));
};
{
  /* <svg class="">
    <use xlink:href="folder/sprite.svg#filename"></use>
</svg> */
}

//styling processing
const styles = () => {
  return src(srcUrl + "scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "expanded",
      }).on("error", notify.onError)
    )
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(dest(dist + "css/"))
    .pipe(browserSync.stream());
};

//including html files
const htmlInclude = () => {
  return src([srcUrl + "*.html"])
    .pipe(
      fileInclude({
        prefix: "@",
        basepath: "@file",
      })
    )
    .pipe(dest(dist))
    .pipe(browserSync.stream());
};

//copying images to dev build
const imgToApp = () => {
  return src([
    srcUrl + "img/**/**.jpg",
    srcUrl + "img/**/**.png",
    srcUrl + "img/**/**.jpeg",
  ]).pipe(dest(dist + "img/"));
};

const faviconToApp = () => {
  return src(srcUrl + "favicon/**.**").pipe(dest(dist + "favicon/"));
};

//copying resources
const resources = () => {
  return src(srcUrl + "resources/**").pipe(dest(dist));
};

//delete build
const clean = () => {
  return del(dist + "*");
};

//javascript building
const scripts = () => {
  src(srcUrl + "js/vendor/**.js")
    .pipe(concat('vendor.min.js'))
    .pipe(uglify().on("error", notify.onError()))
    .pipe(dest(dist + "scripts/"))
  return src(srcUrl + "js/index.js")
    .pipe(
      webpackStream({
        output: {
          filename: "index.js",
        },
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: [["@babel/preset-env", { targets: "defaults" }]],
                },
              },
            },
          ],
        },
      })
    )
    .on("error", function (err) {
      console.error("WEBPACK ERROR", err);
      this.emit("end"); // Don't stop the rest of the task
    })
    .pipe(sourcemaps.init())
    .pipe(uglify().on("error", notify.onError()))
    .pipe(sourcemaps.write("."))
    .pipe(dest(dist + "scripts/"))
    .pipe(browserSync.stream());
};

//watching file changes, live server
const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: dist,
    },
  });

  watch(srcUrl + "scss/**/*.scss", styles);
  watch(srcUrl + "*.html", htmlInclude);
  watch(srcUrl + "partials/*.html", htmlInclude);

  //watching all required types of images
  watch(srcUrl + "img/**.jpg", imgToApp);
  watch(srcUrl + "img/**.png", imgToApp);
  watch(srcUrl + "img/**.jpeg", imgToApp);
  watch(srcUrl + "img/**.svg", svgSprites);

  watch(srcUrl + "resources/**", resources);
  watch(srcUrl + "fonts/**.ttf", fonts);
  watch(srcUrl + "fonts/**.ttf", fontsStyle);
  watch(srcUrl + "js/**/*.js", scripts);
};

exports.watchFiles = watchFiles;
exports.clean = clean;

exports.default = series(
  // clean,
  parallel(htmlInclude, scripts, fonts, resources, faviconToApp, imgToApp, svgSprites),
  fontsStyle,
  styles,
  watchFiles
);

//production build
const stylesBuild = () => {
  return src(srcUrl + "scss/**/*.scss")
    .pipe(
      sass({
        outputStyle: "expanded",
      }).on("error", notify.onError)
    )
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(dest(dist + "css/"));
};

const scriptsBuild = () => {
  return src(srcUrl + "js/index.js")
    .pipe(
      webpackStream({
        output: {
          filename: "index.js",
        },
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: [["@babel/preset-env", { targets: "defaults" }]],
                },
              },
            },
          ],
        },
      })
    )
    .pipe(uglify().on("error", notify.onError()))
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(dest(dist + "scripts/"));
};

//compress images
const tinyPng = () => {
  return src([
    srcUrl + "img/**/**.jpg",
    srcUrl + "img/**/**.png",
    srcUrl + "img/**/**.jpeg",
  ])
    .pipe(tinypng({}))
    .pipe(dest(dist + "images/"));
};

const htmlMinify = () => {
  return src(srcUrl + "**/*.html")
    .pipe(htmlMin({
      collapseWhitespace: true
    }))
    .pipe(dest(dist));
}

//cache all assets
const cache = () => {
  return src(dist + '**/*.{css,js,svg,png,jpg,jpeg,woff2}', {
    base: baseDir})
    .pipe(rev())
    .pipe(revDel())
		.pipe(dest(baseDir))
    .pipe(rev.manifest('rev.json'))
    .pipe(dest(baseDir));
};

const rewrite = () => {
  const manifest = readFileSync(dist + 'rev.json');
	src(dist + 'css/*.css')
		.pipe(revRewrite({
      manifest
    }))
		.pipe(dest(dist + 'css'));
  return src(dist + '**/*.html')
    .pipe(revRewrite({
      manifest
    }))
    .pipe(dest(dist));
}

exports.cache = series(cache, rewrite);

exports.build = series(
  // clean,
  parallel(htmlInclude, scriptsBuild, fonts, resources, imgToApp, svgSprites),
  fontsStyle,
  stylesBuild,
  // htmlMinify,
  // tinyPng,
  // cache,
  // rewrite
);

const deploy = () => {
  let conn = ftp.create({
    host: "mywebsite.tld",
    user: "me",
    password: "mypass",
    parallel: 10,
    log: gutil.log,
  });

  let globs = [dist + "**"];

  // using base = '.' will transfer everything to /public_html correctly
  // turn off buffering in gulp.src for best performance

  return src(globs, { base: dist, buffer: false })
    .pipe(conn.newer("/www/exanple.com/")) // only upload newer files
    .pipe(conn.dest("/www/exanple.com/")); // / - necessarily at the end
};

exports.deploy = deploy;