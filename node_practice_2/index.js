const http = require("http");
const server = http.createServer((req, res) => {
  console.log("The server is up and running");
  res.write("Hello world");
  res.end();
});
server.listen(3001);
