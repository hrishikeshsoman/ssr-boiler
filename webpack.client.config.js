const baseConfig = require('./webpack.base.config.js');

module.exports = {
  ...baseConfig,
  entry: {
    client: "./client/index.js",
  }
};
