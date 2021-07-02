import { LinkField, LinkType } from "@prismicio/types";
import { LinkResolverFunction } from "./types";

/**
 * Resolves any type of link field to a URL
 *
 * @param linkField - Any kind of link field to resolve
 * @param linkResolver - A link resolver function, without it you're expected to use the `routes` from the API
 *
 * @returns Resolved URL, null if provided link is empty
 *
 * @typeParam LinkResolverFunctionReturnType - Link resolver function return type
 *
 * @see Prismic link resolver documentation: {@link https://prismic.io/docs/technologies/link-resolver-javascript}
 * @see Prismic API `routes` options documentation: {@link https://prismic.io/docs/technologies/route-resolver-nuxtjs}
 */
export const asLink = <LinkResolverFunctionReturnType = string>(
	linkField: LinkField,
	linkResolver?: LinkResolverFunction<LinkResolverFunctionReturnType>,
): LinkResolverFunctionReturnType | string | null => {
	if (!linkField) {
		return null;
	}

	switch (linkField.link_type) {
		case LinkType.Media:
		case LinkType.Web:
			return "url" in linkField ? linkField.url : null;

		case LinkType.Document:
			if ("url" in linkField && linkField.url) {
				// When using `apiOptions.routes`...
				return linkField.url;
			} else if ("id" in linkField) {
				// ...when not...
				return linkResolver ? linkResolver(linkField) : null;
			} else {
				// ...when empty
				return null;
			}

		case LinkType.Any:
		default:
			return null;
	}
};
