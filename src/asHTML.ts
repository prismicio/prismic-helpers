import {
	serialize,
	Element,
	composeSerializers,
	wrapMapSerializer,
	RichTextFunctionSerializer,
} from "@prismicio/richtext";
import { RichTextField } from "@prismicio/types";

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

function defaultHTMLSerializer(
	linkResolver: LinkResolverFunction<string> | undefined,
	_type: Parameters<HTMLFunctionSerializer>[0],
	node: Parameters<HTMLFunctionSerializer>[1],
	content: Parameters<HTMLFunctionSerializer>[2],
	children: Parameters<HTMLFunctionSerializer>[3],
	_key: Parameters<HTMLFunctionSerializer>[4],
): string {
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
			return serializeSpan(content);
	}
}

export function asHTML(
	richTextField: RichTextField,
	linkResolver?: LinkResolverFunction<string>,
	htmlSerializer?: HTMLFunctionSerializer | HTMLMapSerializer,
): string {
	let serializer: RichTextFunctionSerializer<string>;
	if (htmlSerializer) {
		serializer = composeSerializers(
			typeof htmlSerializer === "object"
				? wrapMapSerializer(htmlSerializer)
				: htmlSerializer,
			defaultHTMLSerializer.bind(null, linkResolver),
		);
	} else {
		serializer = defaultHTMLSerializer.bind(null, linkResolver);
	}

	return serialize(richTextField, serializer).join("");
}
