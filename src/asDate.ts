import type { DateField, TimestampField } from "@prismicio/types";

/**
 * The return type of `asDate()`.
 */
type AsDateReturnType<Field extends DateField | TimestampField> =
	Field extends DateField<"empty">
		? null
		: Field extends TimestampField<"empty">
		? null
		: Date;

/**
 * Transforms a date or timestamp field into a JavaScript Date object
 *
 * @param dateOrTimestampField - A date or timestamp field from Prismic
 *
 * @returns A Date object, null if provided date is falsy
 * @see Templating date field from Prismic {@link https://prismic.io/docs/technologies/templating-date-field-javascript}
 */
export const asDate = <Field extends DateField | TimestampField>(
	dateOrTimestampField: Field,
): AsDateReturnType<Field> => {
	if (!dateOrTimestampField) {
		return null as AsDateReturnType<Field>;
	}

	// If field is a timestamp field...
	if (dateOrTimestampField.length === 24) {
		/**
		 * Converts basic ISO 8601 to ECMAScript simplified ISO 8601 format for
		 * browser compatibility issues
		 *
		 * From: YYYY-MM-DDTHH:mm:ssZ To: YYYY-MM-DDTHH:mm:ss.sssZ
		 *
		 * @see MDN documentation: {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#timestamp_string}
		 * @see ECMAScript 2020 language specification: {@link https://262.ecma-international.org/11.0/#sec-date-time-string-format}
		 * @see Related forum issue: {@link https://community.prismic.io/t/prismics-date-api/2520}
		 * @see Regex101 expression: {@link https://regex101.com/r/jxyETT/1}
		 */
		return new Date(
			dateOrTimestampField.replace(/(\+|-)(\d{2})(\d{2})$/, ".000$1$2:$3"),
		) as AsDateReturnType<Field>;
	} else {
		// ...else field is a date field
		return new Date(dateOrTimestampField) as AsDateReturnType<Field>;
	}
};
