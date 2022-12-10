export const log = (name: string, ...values: unknown[]) => {
	console.log(
		'-'.repeat(
			(69 - name.length - ((69 - name.length) % 2)) / 2 +
				((69 - name.length) % 2)
		) +
			name.toUpperCase() +
			'-'.repeat((69 - name.length - ((69 - name.length) % 2)) / 2)
	);
	if (values.filter((i) => i !== undefined).length)
		console.log(...values, '\n');
};
