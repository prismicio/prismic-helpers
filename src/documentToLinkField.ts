import {
	FilledLinkToDocumentField,
	LinkType,
	PrismicDocument,
} from "@prismicio/types";

/**
 * Converts a document into a link field
 * This is useful when crawling the API for document links
 *
 * @param prismicDocument - A document coming from Prismic
 *
 * @returns The equivalent link field to use with `asLink()`
 */
export const documentToLinkField = (
	prismicDocument: PrismicDocument,
): FilledLinkToDocumentField => {
	return {
		link_type: LinkType.Document,
		id: prismicDocument.id,
		uid: prismicDocument.uid ?? undefined,
		type: prismicDocument.type,
		tags: prismicDocument.tags,
		lang: prismicDocument.lang,
		url: prismicDocument.url ?? undefined,
		slug: prismicDocument.slugs[0], // Slug field not available with GraphQl
	};
};
