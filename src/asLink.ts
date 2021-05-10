import { LinkField, LinkType, PrismicDocumentHeader } from "@prismicio/types";
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
	linkField: LinkField | PrismicDocumentHeader,
	linkResolver: LinkResolverFunction = doc => "/" // TODO: Not sure providing a failsafe default is the right idea
): string {
	let link: LinkField;

	if (!("link_type" in linkField)) {
		// TODO: This parts turns a Prismic document header into a document link field, really not sure about it
		// Point is to be able to resolve a Prismic document into a link as the API already returns the `url` field if available and
		// anything needed by a link resolver to properly resolve links?
		// This check might be refactored by a typeguard or similar actually
		if (
			["id", "uid", "type", "tags", "lang", "data"].every(
				key => key in linkField
			)
		) {
			link = {
				link_type: LinkType.Document,
				id: linkField.id,
				uid: linkField.uid ?? undefined,
				type: linkField.type,
				tags: linkField.tags,
				lang: linkField.lang,
				url: linkField.url ?? undefined,
				slug: linkField.slugs[0]
			};
		} else {
			link = {
				link_type: LinkType.Any
			};
		}
	} else {
		link = linkField;
	}

	switch (link.link_type) {
		case LinkType.Web:
		case LinkType.Media:
			return link.url;

		case LinkType.Document:
			if (link.url) {
				// When using `apiOptions.routes`...
				return link.url;
			} else {
				// ...when not
				return linkResolver(link);
			}

		case LinkType.Any:
		default:
			return "";
	}
}
