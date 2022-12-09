type RunOptions = Pick<Deno.RunOptions, 'cmd' | 'cwd'>;

export const subprocess = async ({ cmd, cwd }: RunOptions) => {
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
	const output = new TextDecoder().decode(stdout).trim();
	const error = new TextDecoder().decode(stderr).trim();
	return {
		status,
		output,
		error,
	};
};
