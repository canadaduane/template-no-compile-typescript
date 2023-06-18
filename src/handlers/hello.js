/** @type {handlers.ServerFn} */
export const handler = (_req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, world!\n");
};
