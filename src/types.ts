import type { FilledLinkToDocumentField } from "@prismicio/types";
import {
	RichTextFunctionSerializer,
	RichTextMapSerializer,
} from "@prismicio/richtext";

/**
 * Resolves a link to a Prismic document to a URL
 *
 * @typeParam ReturnType - Return type of your link resolver function, useful if
 *   you prefer to return a complex object
 * @param linkToDocumentField - A document link field to resolve
 *
 * @returns Resolved URL
 * @see Prismic link resolver documentation: {@link https://prismic.io/docs/technologies/link-resolver-javascript}
 */
export type LinkResolverFunction<ReturnType = string> = (
	linkToDocumentField: Omit<FilledLinkToDocumentField, "url">,
) => ReturnType;

/**
 * Serializes a node from a rich text or title field with a function to HTML
 *
 * @see Templating rich text and title fields from Prismic {@link https://prismic.io/docs/technologies/templating-rich-text-and-title-fields-javascript}
 */
export type HTMLFunctionSerializer = RichTextFunctionSerializer<string>;

/**
 * Serializes a node from a rich text or title field with a map to HTML
 *
 * @see Templating rich text and title fields from Prismic {@link https://prismic.io/docs/technologies/templating-rich-text-and-title-fields-javascript}
 */
export type HTMLMapSerializer = RichTextMapSerializer<string>;
