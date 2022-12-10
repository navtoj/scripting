export const getDirMax = async (path: string) => {
	const dirItems = [];
	for await (const dirEntry of Deno.readDir(path)) {
		dirItems.push(dirEntry);
	}
	const folders = dirItems.flatMap((item) =>
		item.isDirectory ? item.name : []
	);
	return folders.sort().at(-1);
};
