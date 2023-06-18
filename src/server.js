import http from "node:http";

import { handler } from "./handlers/hello.js";
import { getPort } from "getPort.js";

const server = http.createServer(handler);

const port = getPort({ port: process.env.PORT });

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
