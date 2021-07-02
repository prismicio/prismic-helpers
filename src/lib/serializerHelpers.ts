import escapeHtml from "escape-html";
import {
	RTBlockNode,
	RTInlineNode,
	RTPreformattedNode,
	RTImageNode,
	RTEmbedNode,
	RTLinkNode,
	LinkType,
} from "@prismicio/types";

import { asLink } from "../asLink";
import { LinkResolverFunction } from "../types";

export const getLabel = (node: RTBlockNode | RTInlineNode): string => {
	return "data" in node && "label" in node.data
		? ` class="${node.data.label}"`
		: "";
};

export const serializeStandardTag = (
	tag: string,
	node: RTBlockNode | RTInlineNode,
	children: string[],
): string => {
	return `<${tag}${getLabel(node)}>${children.join("")}</${tag}>`;
};

export const serializePreFormatted = (node: RTPreformattedNode): string => {
	return `<pre${getLabel(node)}>${escapeHtml(node.text)}</pre>`;
};

// TODO: Check link behavior with image + maybe rewrap with paragraph
export const serializeImage = (
	_linkResolver: LinkResolverFunction<string> | undefined,
	node: RTImageNode,
): string => {
	return `<img src="${node.url}" alt="${node.alt}"${
		node.copyright ? ` copyright="${node.copyright}"` : ""
	} />`;
};

export const serializeEmbed = (node: RTEmbedNode): string => {
	return `<div data-oembed="${node.oembed.embed_url}" data-oembed-type="${
		node.oembed.type
	}" data-oembed-provider="${node.oembed.provider_name}"${getLabel(node)}>${
		node.oembed.html
	}</div>`;
};

export const serializeHyperlink = (
	linkResolver: LinkResolverFunction | undefined,
	node: RTLinkNode,
	children: string[],
): string => {
	switch (node.data.link_type) {
		case LinkType.Web: {
			return `<a href="${node.data.url}" target="${
				node.data.target
			}" rel="noopener noreferrer"${getLabel(node)}>${children.join("")}</a>`;
		}

		case LinkType.Document: {
			return `<a href="${asLink(node.data, linkResolver)}"${getLabel(
				node,
			)}>${children.join("")}</a>`;
		}

		case LinkType.Media: {
			return `<a href="${node.data.url}"${getLabel(node)}>${children.join(
				"",
			)}</a>`;
		}
	}
};

export const serializeSpan = (content?: string): string => {
	return content ? escapeHtml(content).replace(/\n/g, "<br />") : "";
};
