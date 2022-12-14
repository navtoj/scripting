// deno run --allow-run ./shell.ts
import { subprocess } from '../mod.ts';

// run a shell command
const run = await subprocess(['deno', '--version']);

console.log(run);
// {
//   status: { success: true, code: 0 },
//   output: "deno 1.28.3 (release, x86_64-apple-darwin)\nv8 10.9.194.5\ntypescript 4.8.3",
//   error: ""
// }
