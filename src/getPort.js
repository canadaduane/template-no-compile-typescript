import { z } from "zod";

const GetPortOptionsSchema = z.object({
  port: z.string().optional(),
});

/**
 * Within the typedef curly-braces below, we can use regular typescript.
 *
 * This declares a local type `GetPortOptions` using zod's `z.infer` type function.
 *
 * @typedef {z.infer<GetPortOptionsSchema>} GetPortOptions
 */

/**
 * Get the port for the server to listen to; defaults to 3000
 *
 * Note: This is just to demo our inferred type above
 *
 * @param {object} options
 * @returns {number}
 */
export function getPort(options) {
  /** @type {GetPortOptions} */
  const opts = GetPortOptionsSchema.parse(options);

  /** @type {number} */
  const port = opts.port ? parseInt(opts.port) : 3000;

  return port;
}
