/**
 * @internal
 */
export class ArgumentError extends Error {
	constructor(
		argumentName: string,
		expectedType: string,
		receivedType: string,
	) {
		super(
			`Expected argument \`${argumentName}\` to be of type \`${expectedType}\` but received type \`${receivedType}\``,
		);
	}
}
