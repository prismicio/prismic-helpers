import type {
	FilledLinkToDocumentField,
	RichTextBlock,
	RichTextSpan
} from "@prismicio/types";

/**
 * Resolves a link to a Prismic document to a URL
 *
 * @param linkToDocumentField - A document link field to resolve
 *
 * @returns Resolved URL
 *
 * @typeParam ReturnType - Return type of your link resolver function, useful if you prefer to return a complex object
 *
 * @see Prismic link resolver documentation: {@link https://prismic.io/docs/technologies/link-resolver-javascript}
 */
export type LinkResolverFunction<ReturnType = string> = (
	linkToDocumentField: Omit<FilledLinkToDocumentField, "url">
) => ReturnType;

export type HtmlSerializerFunction = (
	type: string,
	element: RichTextBlock | RichTextSpan,
	content: string,
	children: string[],
	index: number
) => string;
