import { LinkField, LinkType } from "@prismicio/types";
import { ArgumentError } from "./ArgumentError";
import { LinkResolverFunction } from "./types";

// TODO: provide a way to handle v1 fields

/**
 * Resolves any type of link field to a URL
 *
 * @param linkField - Any kind of link field to resolve
 * @param linkResolver - A link resolver function, without it you're expected to use the `routes` from the API
 *
 * @returns Resolved URL, an empty string if provided link is empty
 *
 * @typeParam LinkResolverFunctionReturnType - Link resolver function return type
 *
 * @see Prismic link resolver documentation: {@link https://prismic.io/docs/technologies/link-resolver-javascript}
 * @see Prismic API `routes` options documentation: {@link https://prismic.io/docs/technologies/route-resolver-nuxtjs}
 */
export function asLink<LinkResolverFunctionReturnType = string>(
	linkField: LinkField,
	linkResolver: LinkResolverFunction<LinkResolverFunctionReturnType>
):
	| ReturnType<LinkResolverFunction<LinkResolverFunctionReturnType>>
	| string
	| null {
	if (typeof linkResolver !== "function") {
		throw new ArgumentError("linkResolver", "function", typeof linkResolver);
	}

	switch (linkField.link_type) {
		case LinkType.Web:
		case LinkType.Media:
			return linkField.url;

		case LinkType.Document:
			if (linkField.url) {
				// When using `apiOptions.routes`...
				return linkField.url;
			} else {
				// ...when not
				return linkResolver(linkField);
			}

		case LinkType.Any:
		default:
			return null;
	}
}
