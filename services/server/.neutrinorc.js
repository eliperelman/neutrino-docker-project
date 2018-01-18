module.exports = {
  use: [
    '@neutrinojs/node',
    (neutrino) => {
      neutrino.config
        .watchOptions({
          poll: true,
          aggregateTimeout: 1000,
        });
    },
  ],
};
