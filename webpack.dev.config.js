var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.MODE;
var isProd = ENV === 'build';
var nodeModules = path.join(process.cwd(), 'node_modules');
module.exports = function makeWebpackConfig() {
  /**
   * Config
   * Reference: https://webpack.js.org/configuration/
   * This is the object where all configuration gets set
   */
  var config = {};
  config.mode = 'development';
  /**
    * Devtool
    * Reference: https://webpack.js.org/configuration/devtool/
    * Type of sourcemap to use per build type
    */
  config.devtool = 'eval-source-map';
  /**
    * Entry
    * Reference: https://webpack.js.org/concepts/entry-points/
    */
  config.entry = {
    polyfills: './demo/src/polyfills.ts',
    vendorStyles: [
      './node_modules/prismjs/themes/prism.css'
    ],
    main: './demo/src/main.ts'
  };

  /**
 * Output
 * Reference: https://webpack.js.org/concepts/output/
 */
  config.output = {
    path: root('demo', 'dist'),
    publicPath: '/',
    // filename: 'js/[name].js',
    // chunkFilename: '[id].chunk.js'
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  };

  config.optimization = {
         splitChunks: {
           chunks: 'all'
         }
      };
  /**
   * Resolve
   * Reference: https://webpack.js.org/configuration/resolve/
   */
  config.resolve = {
    modules: [root('demo'), 'node_modules'],
    // only discover files that have those extensions
    extensions: ['.ts', '.js', '.css', '.scss', 'less', '.html'],

    alias: {
      '@ag-bootstrap/ag-bootstrap': root('src/index.ts')
    }
  };

  /**
     * Loaders
     * Reference: https://webpack.js.org/concepts/loaders/
     * List: https://webpack.js.org/loaders/
     * This handles most of the magic responsible for converting modules
     */
  config.module = {
    rules: [
      {
        test: /\.ts$/,
        use: 'angular2-template-loader'
      },
      {
        test: /\.ts$/,
        use: 'source-map-loader'
      },
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.(ts|js)$/,
        loaders: [
          'angular-router-loader'
        ]
      },
      // copy those assets to output
      { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, use: 'file-loader?name=fonts/[name].[hash].[ext]?' },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      // all css required in src/app files will be merged in js files
      { test: /\.css$/, include: root('demo', 'src', 'app'), use: 'raw-loader!postcss-loader' },

      // support for .scss files
      // use 'null' loader in test mode (https://webpack.js.org/loaders/null-loader/)
      // all css in src/style will be bundled in an external css file
      {
        test: /\.scss$/,
        exclude: root('src', 'app'),
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader?sourceMap-loader!postcss-loader!sass-loader"
        ]
      },
      // all css required in src/app files will be merged in js files
      { test: /\.scss$/, exclude: root('demo', 'src', 'style'), use: 'raw-loader!postcss-loader!sass-loader' },

      // support for .html as raw text
      // todo: change the loader to something that adds a hash to images
      { test: /\.html$/, use: 'raw-loader' },

      { test: /\.md$/, use: 'html-loader!markdown-loader' }
    ],
    noParse: [/.+zone\.js\/dist\/.+/]
  };
  config.optimization = {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2, maxInitialRequests: 5,
          minSize: 0
        },
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true
        }
      }
    },
    runtimeChunk: true
  };
  /**
   * Plugins
   * Reference: https://webpack.js.org/configuration/plugins/
   * List: https://webpack.js.org/plugins/
   */
  config.plugins = [
    // Define env variables to help with builds
    // Reference: https://webpack.js.org/plugins/define-plugin/
    new webpack.DefinePlugin({
      // Environment helpers
      'process.env': {
        ENV: JSON.stringify(ENV),
        version: JSON.stringify(require('./package.json').version)
      }
    }),
    // Inject script and link tags into html files
    // Reference: https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: './demo/src/public/index.html',
      chunksSortMode: 'dependency'
    }),

    // Extract css files
    // Reference: https://webpack.js.org/plugins/extract-text-webpack-plugin/
    // Disabled when in test mode or not in build mode
    //new ExtractTextPlugin({ filename: 'css/[name].[hash].css', disable: true }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.LoaderOptionsPlugin({
      // add debug messages
      debug: !isProd,
      minimize: isProd,
      /**
       * PostCSS
       * Reference: https://github.com/postcss/autoprefixer-core
       * Add vendor prefixes to your css
       */
      postcss: [
        autoprefixer({
          browsers: ['last 2 version']
        })
      ]
    }),

    // Workaround to remove Webpack warning in system_js_ng_module_factory_loader.js
    // See https://github.com/angular/angular/issues/11580
    new webpack.ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)\|esm5/,
      root('demo', 'src', 'app')
    ),
    new webpack.ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/, // fixes WARNING Critical dependency: the request of a dependency is an expression
      path.join(__dirname, 'src'), // location of your src
      {} // a map of your routes
  ),
  new webpack.ContextReplacementPlugin(
      /(.+)?express(\\|\/)(.+)?/, // fixes WARNING Critical dependency: the request of a dependency is an expression
      path.join(__dirname, 'src'),
      {}
  )
  ];


  /**
 * Dev server configuration
 * Reference: https://webpack.js.org/configuration/dev-server/
 */
  config.devServer = {
    contentBase: 'demo/src/public',
    historyApiFallback: true,
    stats: 'minimal' // none (or false), errors-only, minimal, normal (or true) and verbose
  };

  return config;
}();

// Helper functions
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  //return path.join.apply(path, [__dirname].concat(args));
  let retVal = path.join.apply(path, [__dirname].concat(args));
  return retVal;
}
