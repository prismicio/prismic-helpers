import { LinkField, LinkType } from "@prismicio/types";
import { LinkResolverFunction } from "./types";

// TODO: provide a way to handle v1 fields

/**
 * Resolves any type of link field to a URL
 *
 * @param linkField - any kind of link field to resolve
 * @param linkResolver - a link resolver function, without it you're expected to use the `routes` from the API
 * @returns resolved URL, an empty string if provided link is empty
 *
 * @see Prismic link resolver documentation: {@link https://prismic.io/docs/technologies/link-resolver-javascript}
 * @see Prismic API `routes` options documentation: {@link https://prismic.io/docs/technologies/route-resolver-nuxtjs}
 */
export function asLink(
	linkField: LinkField,
	linkResolver: LinkResolverFunction = () => "/" // TODO: Not sure providing a failsafe default is the right idea
): string {
	switch (linkField.link_type) {
		case LinkType.Document:
			if (linkField.url) {
				// When using `apiOptions.routes`...
				return linkField.url;
			} else {
				// ...when not
				return linkResolver(linkField);
			}

		case LinkType.Web:
		case LinkType.Media:
			return linkField.url;

		case LinkType.Any:
		default:
			return "";
	}
}
