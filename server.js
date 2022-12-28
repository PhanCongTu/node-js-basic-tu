const http = require("http");

const server = http.createServer((req, res) => {
  console.log("run request ...");
  res.setHeader("Content-Type", "text/html");
  res.write("<h2>Phan Cong Tu</h2>");
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("Node.JS server is running on port: http://localhost:3000");
});
