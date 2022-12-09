// deno run --allow-read ./path.ts
import { getPathInfo } from '../mod.ts';

const fakePath = await getPathInfo('./fake.ts'); // non-existent path
console.log(fakePath);
// returns null if path is not found

const path = await getPathInfo('./path.ts'); // this file
console.log(path);
// returns a Deno.FileInfo object

// {
//   isFile: true,
//   isDirectory: false,
//   isSymlink: false,
//   size: 646,
//   mtime: 2022-12-09T15:53:47.975Z,
//   atime: 2022-12-09T15:53:48.305Z,
//   birthtime: 2022-12-09T15:42:18.124Z,
//   dev: 16777220,
//   ino: 3770171,
//   mode: 33188,
//   nlink: 1,
//   uid: 501,
//   gid: 20,
//   rdev: 0,
//   blksize: 4096,
//   blocks: 8
// }
