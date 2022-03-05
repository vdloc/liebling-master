let mix = require('laravel-mix');

mix.options({
  terser: {
    extractComments: false,
  },
});

mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules(?!\/foundation-sites)|bower_components/,
        use: [
          {
            loader: 'babel-loader',
            options: Config.babel(),
          },
        ],
      },
    ],
  },
});

mix
  .js('js/app.js', 'js/')
  .js('js/home.js', 'js/')
  .js('js/category.js', 'js/')
  .js('js/post.js', 'js/')
  .js('js/page.js', 'js/')
  .extract()
  .setResourceRoot('/assets')
  .setPublicPath('../assets')
  .copy('css/post.css', '../assets/css/')
  .copy('css/comment.css', '../assets/css/')
  .copy('js/vendor/content-api.min.js', '../assets/js/vendor/')
  .browserSync({
    proxy: 'localhost:2368',
    files: ['js/**/*.js', 'css/**/*.css', '../**/*.hbs'],
  });
