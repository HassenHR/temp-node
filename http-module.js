const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my webpage");
  }
  if (req.url === "/about") {
    res.end("About page");
  }
  res.end(`<h1>This page deos not exist</h1>
  <p>Return <a href='/'>Home</a><p/>`);
});
server.listen(5000);
