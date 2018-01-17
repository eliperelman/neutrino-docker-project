module.exports = {
  use: [
    ['neutrino-preset-conduit', {
      node: true,
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
