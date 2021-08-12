import { PrismicDocument } from "@prismicio/types";

import { LinkResolverFunction } from "./types";
import { documentToLinkField } from "./documentToLinkField";
import { asLink } from "./asLink";

/**
 * Pipes {@link documentToLinkField} and {@link asLink} to resolve a document to a link in a single function call
 *
 * @param prismicDocument - A document coming from Prismic
 * @param [linkResolver] - An optional link resolver function, without it you're expected to use the `routes` options from the API
 *
 * @returns Resolved document URL, null if provided link is empty
 *
 * @typeParam Document - Specific interface of the provided document
 * @typeParam LinkResolverFunctionReturnType - Link resolver function return type
 *
 * @see Prismic link resolver documentation: {@link https://prismic.io/docs/technologies/link-resolver-javascript}
 * @see Prismic API `routes` options documentation: {@link https://prismic.io/docs/technologies/route-resolver-nuxtjs}
 */
export const documentAsLink = <
	Document extends PrismicDocument,
	LinkResolverFunctionReturnType = string,
>(
	prismicDocument: Document,
	linkResolver?: LinkResolverFunction<LinkResolverFunctionReturnType> | null,
): LinkResolverFunctionReturnType | string | null => {
	return asLink(documentToLinkField(prismicDocument), linkResolver);
};
