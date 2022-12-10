// deno run ./console.ts
import { log } from '../standard/console.ts';

log('data', {
	hello: 'world',
});
log('foobar', undefined);

// ---------------------------------DATA--------------------------------
// { hello: "world" }
//
// --------------------------------FOOBAR-------------------------------
