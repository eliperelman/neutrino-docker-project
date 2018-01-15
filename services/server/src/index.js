import { createServer } from 'http';

const app = createServer((request, response) => {
  response.writeHead(200);
  response.end('OK');
});

app.listen(4000, () => console.log('Server running on port 4000'));
