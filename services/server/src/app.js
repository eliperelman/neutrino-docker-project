export default (request, response) => {
  // eslint-disable-next-line no-console
  console.log('Request handled');
  response.writeHead(200);
  response.end('help?');
};
