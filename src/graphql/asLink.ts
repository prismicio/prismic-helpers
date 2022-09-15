// TODO: Migrate once fixed https://github.com/microsoft/TypeScript/issues/33079
import {
	FilledMinimalLinkToDocumentField,
	LinkField,
	LinkType,
} from "@prismicio/types/dist/graphql";
import { LinkResolverFunction } from "./types";

/**
 * Resolves any type of link field to a URL
 *
 * @typeParam LinkResolverLinkToDocumentField - Link resolver link to document
 *   field type
 * @typeParam LinkResolverFunctionReturnType - Link resolver function return
 *   type
 * @param linkField - Any kind of link field to resolve
 * @param linkResolver - A link resolver function, without it you're expected to
 *   use the `routes` from the API
 *
 * @returns Resolved URL, null if provided link is empty
 * @experimental
 * @see Prismic link resolver documentation: {@link https://prismic.io/docs/technologies/link-resolver-javascript}
 * @see Prismic API `routes` options documentation: {@link https://prismic.io/docs/technologies/route-resolver-nuxtjs}
 */
export const asLink = <
	LinkResolverLinkToDocumentField extends FilledMinimalLinkToDocumentField = FilledMinimalLinkToDocumentField,
	LinkResolverFunctionReturnType = string,
>(
	linkField: LinkField<LinkResolverLinkToDocumentField>,
	linkResolver?: LinkResolverFunction<
		LinkResolverLinkToDocumentField,
		LinkResolverFunctionReturnType
	> | null,
):
	| ReturnType<
			LinkResolverFunction<
				LinkResolverLinkToDocumentField,
				LinkResolverFunctionReturnType
			>
	  >
	| string
	| null => {
	if (!linkField) {
		return null;
	}

	if ("url" in linkField) {
		return linkField.url;
	} else if (linkField._linkType === LinkType.Document) {
		return linkResolver ? linkResolver(linkField) : null;
	} else {
		return null;
	}
};
