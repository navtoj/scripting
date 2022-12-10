// deno run --allow-read --allow-write ./shell.ts
import { getDirMax } from '../mod.ts';

// create folders 1-5 in a temp directory
await Deno.mkdir('temp/1', { recursive: true });
await Deno.mkdir('temp/2', { recursive: true });
await Deno.mkdir('temp/3', { recursive: true });
await Deno.mkdir('temp/4', { recursive: true });
await Deno.mkdir('temp/5', { recursive: true });

// get the highest named folder
const max = await getDirMax('temp');
console.log(max); // 5

// cleanup temp directory
await Deno.remove('temp', { recursive: true });
