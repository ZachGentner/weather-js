const webpack = require('webpack');

module.exports = {
  // ... other webpack config settings
  plugins: [
    new webpack.DefinePlugin({
      'process.env.KEY': JSON.stringify(process.env.KEY)
    })
  ]
};
