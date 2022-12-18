// deno run --allow-read --allow-write ./path.ts
import { getDirContents, getPathInfo } from '../mod.ts';

// create folders 0, 1, 3, 5 in a temp directory
await Deno.mkdir('temp/0', { recursive: true });
await Deno.mkdir('temp/1', { recursive: true });
await Deno.mkdir('temp/3', { recursive: true });
await Deno.mkdir('temp/5', { recursive: true });

// create files 2 and 4 in the temp directory
await Deno.writeTextFile('temp/2.txt', 'two');
await Deno.writeTextFile('temp/4.json', JSON.stringify({ four: 4 }));

// get directory contents
const contents = await getDirContents('temp');
console.log(contents);
// { folders: [ "0", "1", "3", "5" ], files: [ "2.txt", "4.json" ], symlinks: [] }

// get info about a fake path
const fakePath = await getPathInfo('./fake');
console.log(fakePath);
// null

// get info about this file
const path = await getPathInfo('./path.ts');
console.log(path);
// {
// 	isFile: true,
// 	isDirectory: false,
// 	isSymlink: false,
// 	size: 1318,
// 	mtime: 2022-12-18T08:36:56.125Z,
// 	atime: 2022-12-18T08:36:56.885Z,
// 	birthtime: 2022-12-10T18:04:33.855Z,
// 	dev: 16777220,
// 	ino: 3932884,
// 	mode: 33188,
// 	nlink: 1,
// 	uid: 501,
// 	gid: 20,
// 	rdev: 0,
// 	blksize: 4096,
// 	blocks: 8
// }

// cleanup temp directory
await Deno.remove('temp', { recursive: true });
