import {
	serialize,
	Element,
	composeSerializers,
	wrapMapSerializer,
	RichTextFunctionSerializer,
	RichTextMapSerializerFunction,
} from "@prismicio/richtext";
import { RichTextField, RTAnyNode } from "@prismicio/types";

import {
	serializeStandardTag,
	serializePreFormatted,
	serializeImage,
	serializeEmbed,
	serializeHyperlink,
	serializeSpan,
} from "./lib/serializerHelpers";
import {
	HTMLFunctionSerializer,
	HTMLMapSerializer,
	LinkResolverFunction,
} from "./types";

/**
 * Creates a default HTML serializer with a given Link Resolver providing
 * sensible and safe defaults for every node type
 *
 * @internal
 */
const createDefaultHTMLSerializer = (
	linkResolver: LinkResolverFunction<string> | undefined | null,
): RichTextFunctionSerializer<string> => {
	return (_type, node, text, children, _key) => {
		switch (node.type) {
			case Element.heading1:
				return serializeStandardTag("h1", node, children);
			case Element.heading2:
				return serializeStandardTag("h2", node, children);
			case Element.heading3:
				return serializeStandardTag("h3", node, children);
			case Element.heading4:
				return serializeStandardTag("h4", node, children);
			case Element.heading5:
				return serializeStandardTag("h5", node, children);
			case Element.heading6:
				return serializeStandardTag("h6", node, children);
			case Element.paragraph:
				return serializeStandardTag("p", node, children);
			case Element.preformatted:
				return serializePreFormatted(node);
			case Element.strong:
				return serializeStandardTag("strong", node, children);
			case Element.em:
				return serializeStandardTag("em", node, children);
			case Element.listItem:
				return serializeStandardTag("li", node, children);
			case Element.oListItem:
				return serializeStandardTag("li", node, children);
			case Element.list:
				return serializeStandardTag("ul", node, children);
			case Element.oList:
				return serializeStandardTag("ol", node, children);
			case Element.image:
				return serializeImage(linkResolver, node);
			case Element.embed:
				return serializeEmbed(node);
			case Element.hyperlink:
				return serializeHyperlink(linkResolver, node, children);
			case Element.label:
				return serializeStandardTag("span", node, children);
			case Element.span:
			default:
				return serializeSpan(text);
		}
	};
};

const withStringifiedChildren = <
	Node extends RTAnyNode,
	TextType extends string | undefined,
>(
	fn?: (payload: {
		type: Node["type"];
		node: Node;
		text: TextType;
		children: string;
		key: string;
	}) => string | null | undefined,
): RichTextMapSerializerFunction<string, Node, TextType> | undefined => {
	return fn
		? (payload) =>
				fn({
					...payload,
					children: payload.children.join(""),
				})
		: undefined;
};

const prepareHTMLMapSerializer = (
	serializer: HTMLMapSerializer,
): RichTextFunctionSerializer<string> => {
	return wrapMapSerializer({
		heading1: withStringifiedChildren(serializer.heading1),
		heading2: withStringifiedChildren(serializer.heading2),
		heading3: withStringifiedChildren(serializer.heading3),
		heading4: withStringifiedChildren(serializer.heading4),
		heading5: withStringifiedChildren(serializer.heading5),
		heading6: withStringifiedChildren(serializer.heading6),
		paragraph: withStringifiedChildren(serializer.paragraph),
		preformatted: withStringifiedChildren(serializer.preformatted),
		strong: withStringifiedChildren(serializer.strong),
		em: withStringifiedChildren(serializer.em),
		listItem: withStringifiedChildren(serializer.listItem),
		oListItem: withStringifiedChildren(serializer.oListItem),
		list: withStringifiedChildren(serializer.list),
		oList: withStringifiedChildren(serializer.oList),
		image: withStringifiedChildren(serializer.image),
		embed: withStringifiedChildren(serializer.embed),
		hyperlink: withStringifiedChildren(serializer.hyperlink),
		label: withStringifiedChildren(serializer.label),
		span: withStringifiedChildren(serializer.span),
	});
};

/**
 * Serializes a rich text or title field to an HTML string
 *
 * @param richTextField - A rich text or title field from Prismic
 * @param linkResolver - An optional link resolver function to resolve links,
 *   without it you're expected to use the `routes` options from the API
 * @param htmlSerializer - An optional serializer, unhandled cases will fallback
 *   to the default serializer
 *
 * @returns HTML equivalent of the provided rich text or title field
 * @see Templating rich text and title fields from Prismic {@link https://prismic.io/docs/technologies/templating-rich-text-and-title-fields-javascript}
 */
export const asHTML = (
	richTextField: RichTextField,
	linkResolver?: LinkResolverFunction<string> | null,
	htmlSerializer?: HTMLFunctionSerializer | HTMLMapSerializer | null,
): string => {
	let serializer: RichTextFunctionSerializer<string>;
	if (htmlSerializer) {
		serializer = composeSerializers(
			typeof htmlSerializer === "object"
				? prepareHTMLMapSerializer(htmlSerializer)
				: (type, node, text, children, key) =>
						htmlSerializer(type, node, text, children.join(""), key),
			createDefaultHTMLSerializer(linkResolver),
		);
	} else {
		serializer = createDefaultHTMLSerializer(linkResolver);
	}

	return serialize(richTextField, serializer).join("");
};
