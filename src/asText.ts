import { asText as baseAsText } from "@prismicio/richtext";
import { RichTextField } from "@prismicio/types";

/**
 * Serializes a rich text or title field to a plain text string
 *
 * @param richTextField - A rich text or title field from Prismic
 * @param separator - Separator used to join each element, defaults to a space
 *
 * @returns Plain text equivalent of the provided rich text or title field
 * @see Templating rich text and title fields from Prismic {@link https://prismic.io/docs/technologies/templating-rich-text-and-title-fields-javascript}
 */
export const asText = (
	richTextField: RichTextField | null | undefined,
	separator?: string,
): string | null => {
	if (richTextField) {
		return baseAsText(richTextField, separator);
	} else {
		return null;
	}
};
