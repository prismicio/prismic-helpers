import { LinkField, LinkType, PrismicDocument } from "@prismicio/types";
import { documentToLinkField } from "./documentToLinkField";
import { LinkResolverFunction } from "./types";

/**
 * Resolves any type of link field or document to a URL
 *
 * @typeParam LinkResolverFunctionReturnType - Link resolver function return type
 * @param linkFieldOrDocument - Any kind of link field or a document to resolve
 * @param linkResolver - An optional link resolver function, without it you're
 *   expected to use the `routes` options from the API
 *
 * @returns Resolved URL, null if provided link is empty
 * @see Prismic link resolver documentation: {@link https://prismic.io/docs/technologies/link-resolver-javascript}
 * @see Prismic API `routes` options documentation: {@link https://prismic.io/docs/technologies/route-resolver-nuxtjs}
 */
export const asLink = <LinkResolverFunctionReturnType = string>(
	linkFieldOrDocument: LinkField | PrismicDocument,
	linkResolver?: LinkResolverFunction<LinkResolverFunctionReturnType> | null,
): LinkResolverFunctionReturnType | string | null => {
	if (!linkFieldOrDocument) {
		return null;
	}

	// Converts document to link field if needed
	const linkField = (
		"link_type" in linkFieldOrDocument
			? linkFieldOrDocument
			: documentToLinkField(linkFieldOrDocument)
	) as LinkField;

	switch (linkField.link_type) {
		case LinkType.Media:
		case LinkType.Web:
			return "url" in linkField ? linkField.url : null;

		case LinkType.Document: {
			if ("id" in linkField && linkResolver) {
				// When using Link Resolver...
				const resolvedURL = linkResolver(linkField);

				if (resolvedURL != null) {
					return resolvedURL;
				}
			}

			if ("url" in linkField && linkField.url) {
				// When using Route Resolver...
				return linkField.url;
			}

			// When empty or Link Resolver and Route Resolver are not used...
			return null;
		}

		case LinkType.Any:
		default:
			return null;
	}
};
