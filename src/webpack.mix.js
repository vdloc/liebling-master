let mix = require('laravel-mix');

mix.options({
  terser: {
    extractComments: false
  }
});

mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: Config.babel()
          }
        ]
      }
    ]
  }
});

mix
  .js('js/helpers.js', 'js/')
  .js('js/app.js', 'js/')
  .js('js/home.js', 'js/')
  .js('js/category.js', 'js/')
  .js('js/post.js', 'js/')
  .js('js/page.js', 'js/')
  .js('js/images.js', 'js/')
  .extract()
  .setResourceRoot('/assets')
  .setPublicPath('../assets')
  .sass('sass/app.scss', 'css/')
  .sass('sass/home.scss', 'css/')
  .sass('sass/listing.scss', 'css/')
  .sass('sass/post.scss', 'css/')
  .sass('sass/custom-images-post.scss', 'css/')
  .sass('sass/newsletter.scss', 'css/')
  .sass('sass/tags.scss', 'css/')
  .sass('sass/404.scss', 'css/')
  .sass('sass/contact.scss', 'css/')
  .sass('sass/disclaimer.scss', 'css/')
  .sass('sass/privacy.scss', 'css/')
  .options({
    processCssUrls: false
  })
  .copy('sass/fonts/icomoon/*.*', '../assets/fonts/icomoon/')
  .copyDirectory(
    'sass/fonts/source-sans-pro/',
    '../assets/fonts/source-sans-pro/'
  )
  .copy('js/vendor/content-api.min.js', '../assets/js/vendor/')
  .browserSync({
    proxy: 'localhost:2368',
    files: ['js/**/*.js', 'sass/**/*.scss', '../**/*.hbs']
  });
