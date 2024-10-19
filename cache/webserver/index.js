const http = require("http");

// const ports = [8001, 8002, 8003];
const port = 8001;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ports.forEach((port) => {
//   const server = http.createServer(async (req, res) => {
//     console.log("Request received on port", port);
//     await sleep(4000);
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "application/json");
//     res.end(`{ "message": "Hello World, port: ${port}" }`);
//   });

//   server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
//   });
// });

const server = http.createServer(async (req, res) => {
  console.log("Request received on port", port);
  await sleep(4000);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(`{ "message": "Hello World, port: ${port}" }`);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
