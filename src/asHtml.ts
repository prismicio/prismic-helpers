// @ts-expect-error No type defs :(
import RichText, { Elements } from "@prismicio/richtext";
import { RichTextBlock, RichTextField, RichTextSpan } from "@prismicio/types";
import { HtmlSerializerFunction, LinkResolverFunction } from "./types";
import escapeHtml from "escape-html";
import { asLink } from "./asLink";

function label(element: RichTextBlock | RichTextSpan) {
	// @ts-expect-error TODO: Fix prismic types
	return "label" in element ? ` class="${element.label}"` : "";
}

function serializeStandardTag(
	tag: string,
	element: RichTextBlock | RichTextSpan,
	children: string[]
) {
	return `<${tag}${label(element)}>${children.join("")}</${tag}>`;
}

function serializePreFormatted(element: RichTextBlock | RichTextSpan) {
	return `<pre${label(element)}>${escapeHtml(element.text)}</pre>`;
}

function serializeImage(linkResolver: LinkResolverFunction, element: any) {
	const linkUrl = element.linkTo ? asLink(element.linkTo, linkResolver) : null;
	const linkTarget =
		element.linkTo && element.linkTo.target
			? `target="${element.linkTo.target}" rel="noopener"`
			: "";
	const wrapperClassList = [element.label || "", "block-img"];
	const img = `<img src="${element.url}" alt="${
		element.alt || ""
	}" copyright="${element.copyright || ""}">`;

	return `
    <p class="${wrapperClassList.join(" ")}">
      ${linkUrl ? `<a ${linkTarget} href="${linkUrl}">${img}</a>` : img}
    </p>
  `;
}

function serializeEmbed(element: any) {
	return `
    <div data-oembed="${element.oembed.embed_url}"
      data-oembed-type="${element.oembed.type}"
      data-oembed-provider="${element.oembed.provider_name}"
      ${label(element)}>
          
      ${element.oembed.html}
    </div>
  `;
}

function serializeHyperlink(
	linkResolver: LinkResolverFunction,
	element: any,
	children: string[]
) {
	const target = element.data.target
		? `target="${element.data.target}" rel="noopener"`
		: "";

	return `<a ${target} href="${asLink(
		element.data,
		linkResolver
	)}">${children.join("")}</a>`;
}

function serializeLabel(element: any, children: string[]) {
	return `<span ${label(element.data)}>${children.join("")}</span>`;
}

function serializeSpan(content: string) {
	return content ? escapeHtml(content).replace(/\n/g, "<br />") : "";
}

function defaultHtmlSerializer(
	linkResolver: LinkResolverFunction,
	type: string,
	element: RichTextBlock | RichTextSpan,
	content: string,
	children: string[],
	_: number
) {
	switch (type) {
		case Elements.heading1:
			return serializeStandardTag("h1", element, children);
		case Elements.heading2:
			return serializeStandardTag("h2", element, children);
		case Elements.heading3:
			return serializeStandardTag("h3", element, children);
		case Elements.heading4:
			return serializeStandardTag("h4", element, children);
		case Elements.heading5:
			return serializeStandardTag("h5", element, children);
		case Elements.heading6:
			return serializeStandardTag("h6", element, children);
		case Elements.paragraph:
			return serializeStandardTag("p", element, children);
		case Elements.preformatted:
			return serializePreFormatted(element);
		case Elements.strong:
			return serializeStandardTag("strong", element, children);
		case Elements.em:
			return serializeStandardTag("em", element, children);
		case Elements.listItem:
			return serializeStandardTag("li", element, children);
		case Elements.oListItem:
			return serializeStandardTag("li", element, children);
		case Elements.list:
			return serializeStandardTag("ul", element, children);
		case Elements.oList:
			return serializeStandardTag("ol", element, children);
		case Elements.image:
			return serializeImage(linkResolver, element);
		case Elements.embed:
			return serializeEmbed(element);
		case Elements.hyperlink:
			return serializeHyperlink(linkResolver, element, children);
		case Elements.label:
			return serializeLabel(element, children);
		case Elements.span:
			return serializeSpan(content);
		default:
			return "";
	}
}

export function asHtml(
	richTextField: RichTextField,
	linkResolver: LinkResolverFunction,
	htmlSerializer: HtmlSerializerFunction
): string {
	return RichText.serialize(
		richTextField,
		defaultHtmlSerializer.bind(null, linkResolver),
		htmlSerializer
	).join("");
}
