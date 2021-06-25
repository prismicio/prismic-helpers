import {
	serialize,
	Element,
	composeSerializers,
	wrapMapSerializer
} from "@prismicio/richtext";
import { RichTextField } from "@prismicio/types";

import {
	serializeStandardTag,
	serializePreFormatted,
	serializeImage,
	serializeEmbed,
	serializeHyperlink,
	serializeSpan
} from "./lib/serializerHelpers";
import {
	HTMLSerializerFunction,
	HTMLSerializerMap,
	LinkResolverFunction
} from "./types";

function defaultHTMLSerializer(
	linkResolver: LinkResolverFunction<string>,
	_type: Parameters<HTMLSerializerFunction>[0],
	node: Parameters<HTMLSerializerFunction>[1],
	content: Parameters<HTMLSerializerFunction>[2],
	children: Parameters<HTMLSerializerFunction>[3],
	_key: Parameters<HTMLSerializerFunction>[4]
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
			return serializeSpan(content);
		default:
			return "";
	}
}

export function asHTML(
	richTextField: RichTextField,
	linkResolver: LinkResolverFunction<string>,
	htmlSerializer: HTMLSerializerFunction | HTMLSerializerMap
): string {
	const serializer = composeSerializers<string>(
		typeof htmlSerializer === "object"
			? wrapMapSerializer(htmlSerializer)
			: htmlSerializer,
		defaultHTMLSerializer.bind(null, linkResolver)
	);

	return serialize(richTextField, serializer).join("");
}
