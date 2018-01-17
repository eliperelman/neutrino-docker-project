module.exports = {
  use: [
    ['neutrino-preset-conduit', {
      devServer: {
        host:'0.0.0.0',
        port: 5000,
        public: 'localhost:5000',
        disableHostCheck: true,
      },
    }],
  ],
};
