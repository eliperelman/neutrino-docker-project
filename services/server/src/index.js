import { createServer } from 'http';
import app from './app';

const port = 4000;

createServer((request, response) => app(request, response)).listen(port, () =>
  process.stdout.write(`Running on :${port}\n`)
);

if (module.hot) {
  module.hot.accept('./app');
}
