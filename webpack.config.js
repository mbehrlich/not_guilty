
module.exports = {
  entry: "./app_client/app.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js"]
  }
};
