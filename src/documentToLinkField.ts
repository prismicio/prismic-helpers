import {
	FilledLinkToDocumentField,
	LinkType,
	PrismicDocument,
} from "@prismicio/types";

/**
 * Converts a document into a link field, this is useful when crawling the API
 * for document links
 *
 * @typeParam TDocument - Specific interface of the provided document
 * @param prismicDocument - A document coming from Prismic
 *
 * @returns The equivalent link field to use with `asLink()`
 * @internal
 */
export const documentToLinkField = <TDocument extends PrismicDocument>(
	prismicDocument: TDocument,
): FilledLinkToDocumentField<
	TDocument["type"],
	TDocument["lang"],
	TDocument["data"]
> => {
	return {
		link_type: LinkType.Document,
		id: prismicDocument.id,
		uid: prismicDocument.uid ?? undefined,
		type: prismicDocument.type,
		tags: prismicDocument.tags,
		lang: prismicDocument.lang,
		url: prismicDocument.url ?? undefined,
		slug: prismicDocument.slugs?.[0], // Slug field is not available with GraphQl
		// The REST API does not include a `data` property if the data object is empty.
		...(Object.keys(prismicDocument.data).length > 0
			? { data: prismicDocument.data }
			: {}),
	};
};
