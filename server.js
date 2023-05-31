const http = require("http");
const PORT = 8000;
const html = require("fs").readFileSync("./index.html");

const server = http.createServer((reqest, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(html);
  response.end();
});

server.listen(PORT, () => {
  console.log("Server is running!");
});
