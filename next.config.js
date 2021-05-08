const path = require('path')
module.exports = {
  images: {
    domains: [
      "drive.google.com",
      "localhost:1337",
      "localhost",
      "moldecor.herokuapp.com",
      "res.cloudinary.com",
    ],
  },
  trailingSlash: true,
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};