module.exports = {
  use: [
    ['@neutrinojs/react', {
      devServer: {
        host:'0.0.0.0',
        port: 5000,
        public: 'localhost:5000',
        disableHostCheck: true,
      },
    }],
    (neutrino) => {
      neutrino.config
        .watchOptions({
          poll: true,
          aggregateTimeout: 1000,
        });
    },
  ],
};
