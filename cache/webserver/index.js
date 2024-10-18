const http = require("http");

const port = 8001;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const server = http.createServer(async (req, res) => {
  await sleep(4000);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end('{ "message": "Hello World" }');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
