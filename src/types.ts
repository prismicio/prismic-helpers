import type { FilledLinkToDocumentField } from "@prismicio/types";
import {
	RichTextFunctionSerializer,
	RichTextMapSerializer,
	RichTextMapSerializerFunction,
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
export type HTMLFunctionSerializer = (
	type: Parameters<RichTextFunctionSerializer<string>>[0],
	node: Parameters<RichTextFunctionSerializer<string>>[1],
	text: Parameters<RichTextFunctionSerializer<string>>[2],
	children: Parameters<RichTextFunctionSerializer<string>>[3][number],
	key: Parameters<RichTextFunctionSerializer<string>>[4],
) => string | null | undefined;

/**
 * Serializes a node from a rich text or title field with a map to HTML
 *
 * @see Templating rich text and title fields from Prismic {@link https://prismic.io/docs/technologies/templating-rich-text-and-title-fields-javascript}
 */
export type HTMLMapSerializer = {
	[P in keyof RichTextMapSerializer<string>]: (payload: {
		type: Parameters<HTMLMapSerializerFunction<P>>[0]["type"];
		node: Parameters<HTMLMapSerializerFunction<P>>[0]["node"];
		text: Parameters<HTMLMapSerializerFunction<P>>[0]["text"];
		children: Parameters<HTMLMapSerializerFunction<P>>[0]["children"][number];
		key: Parameters<HTMLMapSerializerFunction<P>>[0]["key"];
	}) => string | null | undefined;
};

type HTMLMapSerializerFunction<P extends keyof RichTextMapSerializer<string>> =
	RichTextMapSerializerFunction<
		string,
		ExtractRTNodeType<RichTextMapSerializer<string>[P]>,
		ExtractRTTextType<RichTextMapSerializer<string>[P]>
	>;

type ExtractRTNodeType<T> = T extends RichTextMapSerializerFunction<
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	any,
	infer U,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	any
>
	? U
	: never;

type ExtractRTTextType<T> = T extends RichTextMapSerializerFunction<
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	any,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	any,
	infer U
>
	? U
	: never;
