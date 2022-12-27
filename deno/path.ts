// get info about a single file, folder, or symlink
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

// get list of files, folders, and symlinks in a directory
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
	return {
		folders: dirItems
			.flatMap((item) => (item.isDirectory ? item.name : []))
			.sort(),
		files: dirItems.flatMap((item) => (item.isFile ? item.name : [])).sort(),
		symlinks: dirItems
			.flatMap((item) => (item.isSymlink ? item.name : []))
			.sort(),
	};
};