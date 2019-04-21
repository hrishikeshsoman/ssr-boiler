const baseConfig = require('./webpack.base.config.js');

module.exports = {
  ...baseConfig,
  target: 'node',
  entry: {
    server: "./server/index.js",
  }
};
