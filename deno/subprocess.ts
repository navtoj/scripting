// run a shell command
export const subprocess = async (
	{ cmd, cwd }: Pick<Deno.RunOptions, 'cmd' | 'cwd'>,
	output?: (value: string) => void,
	error?: (value: string) => void
) => {
	const process = Deno.run({
		cmd,
		cwd,
		stdout: 'piped',
		stderr: 'piped',
	});
	const [status, stdout, stderr] = await Promise.all([
		process.status(),
		process.output(),
		process.stderrOutput(),
	]);
	process.close();
	const process_output = new TextDecoder().decode(stdout).trim();
	const process_error = new TextDecoder().decode(stderr).trim();
	if (output) output(process_output);
	if (error) error(process_error);
	return {
		status,
		output: process_output,
		error: process_error,
	};
};
