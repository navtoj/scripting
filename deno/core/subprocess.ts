// https://learn.microsoft.com/en-us/javascript/api/@azure/keyvault-certificates/requireatleastone
type RequireAtLeastOne<T> = {
	[K in keyof T]-?: Required<Pick<T, K>> &
		Partial<Pick<T, Exclude<keyof T, K>>>;
}[keyof T];

export const runShell = async (
	cmd: Deno.RunOptions['cmd'],
	options?: RequireAtLeastOne<Omit<Deno.RunOptions, 'cmd'>>
) => {
	const process = Deno.run({
		cmd,
		stdout: 'piped',
		stderr: 'piped',
		...options,
	});
	const [status, output, stderrOutput] = await Promise.all([
		process.status(),
		process.output(),
		process.stderrOutput(),
	]);
	process.close();
	return {
		status,
		output: new TextDecoder().decode(output).trim(),
		error: new TextDecoder().decode(stderrOutput).trim(),
	};
};
