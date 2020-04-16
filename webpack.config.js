var path = require('path'),
    yargs = require('yargs');

var libraryName = 'PrismicHelpers',
    fileName = 'prismic-helpers';

var config = {
  target: 'node',
  mode: yargs.argv.p ? 'production' : 'development',
  optimization: {
    minimize: yargs.argv.p
  },
  entry: [
    __dirname + '/src/index.js'
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: yargs.argv.p ? (fileName + '.min.js') : (fileName + '.js'),
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  },
  resolve: {
    alias:{
      "@root": path.resolve( __dirname, './src' )
    },
    extensions: ['.js']
  }
};

module.exports = config;
