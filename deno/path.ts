// get path info
export const getPath = async (path: string) => {
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
