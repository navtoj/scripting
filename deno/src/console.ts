// optimized github actions logger with a nice header
export const log = (name = '', ...values: unknown[]) => {
	const inputNameExists = name !== '';
	const inputValuesExist = values.filter((i) => i !== undefined).length;
	const inputExists = inputNameExists || inputValuesExist;
	if (inputExists)
		console.log(
			'-'.repeat(
				(69 - name.length - ((69 - name.length) % 2)) / 2 +
					((69 - name.length) % 2)
			) +
				name.toUpperCase() +
				'-'.repeat((69 - name.length - ((69 - name.length) % 2)) / 2)
		);
	if (inputValuesExist) console.log(...values, '\n');
};
