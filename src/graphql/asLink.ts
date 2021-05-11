// TODO: Migrate once fixed https://github.com/microsoft/TypeScript/issues/33079
import {
	FilledMinimalLinkToDocumentField,
	LinkField,
	LinkType
} from "@prismicio/types/dist/graphql";
import { ArgumentError } from "../ArgumentError";
import { LinkResolverFunction } from "./types";

/**
 * Resolves any type of link field to a URL
 *
 * @param linkField - Any kind of link field to resolve
 * @param linkResolver - A link resolver function, without it you're expected to use the `routes` from the API
 *
 * @returns Resolved URL, null if provided link is empty
 *
 * @typeParam LinkResolverLinkToDocumentField - Link resolver link to document field type
 * @typeParam LinkResolverFunctionReturnType - Link resolver function return type
 *
 * @see Prismic link resolver documentation: {@link https://prismic.io/docs/technologies/link-resolver-javascript}
 * @see Prismic API `routes` options documentation: {@link https://prismic.io/docs/technologies/route-resolver-nuxtjs}
 */
export function asLink<
	LinkResolverLinkToDocumentField extends FilledMinimalLinkToDocumentField = FilledMinimalLinkToDocumentField,
	LinkResolverFunctionReturnType = string
>(
	linkField: LinkField<LinkResolverLinkToDocumentField>,
	linkResolver: LinkResolverFunction<
		LinkResolverLinkToDocumentField,
		LinkResolverFunctionReturnType
	>
):
	| ReturnType<
			LinkResolverFunction<
				LinkResolverLinkToDocumentField,
				LinkResolverFunctionReturnType
			>
	  >
	| string
	| null {
	if (typeof linkResolver !== "function") {
		throw new ArgumentError("linkResolver", "function", typeof linkResolver);
	}

	if (!linkField) {
		return null;
	}

	switch (linkField._linkType) {
		case LinkType.File:
		case LinkType.Image:
		case LinkType.Web:
			return linkField.url;

		case LinkType.Document:
			return linkResolver(linkField);

		default:
			return null;
	}
}
