// Bring in http module to create an HTTP server
const http = require('http');

const app = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Write the response body
  res.end('Hello Holberton School!');
});

// Make a server listen on port 1245
app.listen(1245);

module.exports = app;
