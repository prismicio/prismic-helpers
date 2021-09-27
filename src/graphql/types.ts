// TODO: Migrate once fixed https://github.com/microsoft/TypeScript/issues/33079
import type { FilledMinimalLinkToDocumentField } from "@prismicio/types/dist/graphql";

/**
 * Resolves a link to a Prismic document to a URL
 *
 * @typeParam LinkToDocumentField - An extended version of the minimal link to
 *   document field
 * @typeParam ReturnType - Return type of your link resolver function, useful if
 *   you prefer to return a complex object
 * @param linkToDocumentField - A document link to resolve
 *
 * @returns Resolved URL
 * @experimental
 * @see Prismic link resolver documentation: {@link https://prismic.io/docs/technologies/link-resolver-javascript}
 */
export type LinkResolverFunction<
	LinkToDocumentField extends FilledMinimalLinkToDocumentField = FilledMinimalLinkToDocumentField,
	ReturnType = string,
> = (linkToDocumentField: LinkToDocumentField) => ReturnType;
