// deno run ./console.ts
import { log } from '../mod.ts';

log('data', {
	hello: 'world',
});
log('foobar', undefined);
log();

// ---------------------------------DATA--------------------------------
// { hello: "world" }
//
// --------------------------------FOOBAR-------------------------------
// ---------------------------------------------------------------------
