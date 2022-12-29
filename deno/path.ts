/**
 * get info about a single file, folder, or symlink
 * @param path to get info about
 * @returns file info or null if not found
 */
export const getPathInfo = async (path: string) => {
	try {
		return await Deno.lstat(path);
	} catch (error) {
		if (error instanceof Deno.errors.NotFound) {
			return null;
		} else {
			throw error;
		}
	}
};

/**
 * Get sorted list of files, folders, and symlinks in a directory
 * @param path of folder to get contents of
 * @returns sort format: [ 0, 00, 1, 02, 3, 04, 5, 10, 11, 12, a, B, c ]
 */
export const getDirContents = async (path: string) => {
	const dirItems = [];
	try {
		for await (const dirEntry of Deno.readDir(path)) {
			dirItems.push(dirEntry);
		}
	} catch (error) {
		if (error instanceof Deno.errors.NotFound) {
			return null;
		} else {
			throw error;
		}
	}
	const { compare } = new Intl.Collator(undefined, {
		numeric: true,
		usage: 'sort',
	});
	return {
		folders: dirItems.flatMap(item => (item.isDirectory ? item.name : [])).sort(compare),
		files: dirItems.flatMap(item => (item.isFile ? item.name : [])).sort(compare),
		symlinks: dirItems.flatMap(item => (item.isSymlink ? item.name : [])).sort(compare),
	};
};