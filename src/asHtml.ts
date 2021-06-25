import {
	serialize,
	Element,
	composeSerializers,
	wrapMapSerializer
} from "@prismicio/richtext";

import {
	LinkType,
	RichTextField,
	RTBlockNode,
	RTEmbedNode,
	RTImageNode,
	RTInlineNode,
	RTLinkNode,
	RTPreformattedNode
} from "@prismicio/types";
import {
	HTMLSerializerFunction,
	HTMLSerializerMap,
	LinkResolverFunction
} from "./types";

import escapeHtml from "escape-html";
import { asLink } from "./asLink";

function label(node: RTBlockNode | RTInlineNode) {
	return "data" in node && "label" in node.data
		? ` class="${node.data.label}"`
		: "";
}

function serializeStandardTag(
	tag: string,
	node: RTBlockNode | RTInlineNode,
	children: string[]
) {
	return `<${tag}${label(node)}>${children.join("")}</${tag}>`;
}

function serializePreFormatted(node: RTPreformattedNode) {
	return `<pre${label(node)}>${escapeHtml(node.text)}</pre>`;
}

// TODO: Check link behavior with image + maybe rewrap with paragraph
function serializeImage(
	_linkResolver: LinkResolverFunction<string>,
	node: RTImageNode
) {
	return `<img src="${node.url}" alt="${node.alt}"${
		node.copyright ? ` copyright="${node.copyright}"` : ""
	} />`;
}

function serializeEmbed(node: RTEmbedNode) {
	return `<div data-oembed="${node.oembed.embed_url}" data-oembed-type="${
		node.oembed.type
	}" data-oembed-provider="${node.oembed.provider_name}"${label(node)}>${
		node.oembed.html
	}</div>`;
}

function serializeHyperlink(
	linkResolver: LinkResolverFunction,
	node: RTLinkNode,
	children: string[]
) {
	switch (node.data.link_type) {
		case LinkType.Web: {
			return `<a href="${node.data.url}" target="${
				node.data.target
			}" rel="noopener noreferrer"${label(node)}>${children.join("")}</a>`;
		}

		case LinkType.Document: {
			return `<a href="${asLink(node.data, linkResolver)}"${label(
				node
			)}>${children.join("")}</a>`;
		}

		case LinkType.Media: {
			return `<a href="${node.data.url}"${label(node)}>${children.join(
				""
			)}</a>`;
		}
	}
}

function serializeSpan(content?: string) {
	return content ? escapeHtml(content).replace(/\n/g, "<br />") : "";
}

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
