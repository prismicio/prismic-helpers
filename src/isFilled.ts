import { AnyRegularField, LinkType } from "@prismicio/types";
import { asText } from "./asText";

/**
 * Checks whether or not a field is filled.
 *
 * @typeParam T - Type of the field checked
 * @typeParam TFilled - Type of the field checked when filled
 * @param field - A field from Prismic to check filled state
 *
 * @returns Field filled state
 * @experimental This function is experimental and may still be prone to breaking changes
 */
export const isFilled = <
	T extends AnyRegularField = AnyRegularField,
	TFilled extends T = T,
>(
	field: T,
): field is TFilled => {
	if (field == null) {
		// ImageField, DateField, TimestampField, ColorField, NumberField, KeyTextField, SelectField, IntegrationField
		return false;
	} else if (typeof field === "string") {
		// KeyTextField
		return !!field;
	} else if (Array.isArray(field)) {
		// TitleField, RichTextField
		return !!asText(field);
	} else if (typeof field === "object") {
		if ("link_type" in field) {
			// RelationField, LinkField, LinkToMediaField
			switch (field.link_type) {
				// LinkToDocumentField
				case LinkType.Document:
					return "id" in field && !!field.id;
				// LinkToWebField, LinkToMediaField
				case LinkType.Web:
				case LinkType.Media:
					return "url" in field && !!field.url;

				default:
					// AnyLinkField
					return false;
			}
		} else {
			// ImageField, EmbedField, GeoPointField
			return !(
				Object.keys(field).length === 0 ||
				// ImageField edge case(?) note: wasn't able to reproduce
				("url" in field && !field.url) ||
				// EmbedField edge case(?) note: wasn't able to reproduce
				("embed_url" in field && !field.embed_url)
			);
		}
	}

	// Field is filled
	return true;
};
