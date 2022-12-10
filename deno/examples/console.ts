// deno run ./console.ts
import { log } from '../mod.ts';

log('data', {
	hello: 'world',
});
log('foobar', undefined);

// ---------------------------------DATA--------------------------------
// { hello: "world" }
//
// --------------------------------FOOBAR-------------------------------
