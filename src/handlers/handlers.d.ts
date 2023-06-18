import type http from "node:http";

// Just an example type declaration
export type ServerFn = http.RequestListener;

//
// You can use any namespace here; in this example, we're using a  namespace
// that matches the name of this directory. Note that a namespace MUST be
// used, unless you want to:
//
// (a) Use the global namespace; if so, see global.d.ts and use a `declare global`
//     in this file instead of `export as namespace`.
//
// (b) Use the JSDoc import style of type annotation, e.g.
//     `import('./handlers.d.ts').ServerFn`. In this case, you do not need
//     `export as namespace`, nor `declare global`.
//
// (c) Use the JSDoc `@typedef` directive in the importing javascript file. In
//     this case, you kind of have to repeat yourself, but it's reasonably tidy
//     after that. e.g.
//     `/** @typedef {import('./handlers.d.ts').ServerFn} ServerFn */
//
export as namespace handlers;
