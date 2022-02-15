import { asText as baseAsText } from "@prismicio/richtext";
import { RichTextField } from "@prismicio/types";

/**
 * The return type of `asText()`.
 */
type AsTextReturnType<MaybeField extends RichTextField | null | undefined> =
	MaybeField extends RichTextField ? string : null;

/**
 * Serializes a rich text or title field to a plain text string
 *
 * @param richTextField - A rich text or title field from Prismic
 * @param separator - Separator used to join each element, defaults to a space
 *
 * @returns Plain text equivalent of the provided rich text or title field
 * @see Templating rich text and title fields from Prismic {@link https://prismic.io/docs/technologies/templating-rich-text-and-title-fields-javascript}
 */
export const asText = <MaybeField extends RichTextField | null | undefined>(
	richTextField: MaybeField,
	separator?: string,
): AsTextReturnType<MaybeField> => {
	if (richTextField) {
		return baseAsText(richTextField, separator) as AsTextReturnType<MaybeField>;
	} else {
		return null as AsTextReturnType<MaybeField>;
	}
};
