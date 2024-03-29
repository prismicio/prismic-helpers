import { it, expect } from "vitest";
import { RichTextField } from "@prismicio/types";

import { richTextFixture } from "./__fixtures__/richText";
import { linkResolver } from "./__testutils__/linkResolver";
import { htmlFunctionSerializer } from "./__testutils__/htmlFunctionSerializer";
import { htmlMapSerializer } from "./__testutils__/htmlMapSerializer";

import { asHTML } from "../src";

it("serializes with default serializer", () => {
	expect(asHTML(richTextFixture.en, linkResolver)).toMatchSnapshot();
});

it("serializes with a custom function serializer", () => {
	expect(
		asHTML(richTextFixture.en, linkResolver, htmlFunctionSerializer),
	).toMatchSnapshot();
});

it("serializes with a custom map serializer", () => {
	expect(
		asHTML(richTextFixture.en, linkResolver, htmlMapSerializer),
	).toMatchSnapshot();
});

it("escapes external links to prevent XSS", () => {
	expect(asHTML(richTextFixture.xss, linkResolver)).toMatchSnapshot();
});

it("omits target attribute on links without a target value", () => {
	const field: RichTextField = [
		{
			type: "paragraph",
			text: "link",
			spans: [
				{
					type: "hyperlink",
					start: 0,
					end: 4,
					data: {
						link_type: "Web",
						url: "https://example.org",
					},
				},
			],
		},
	];

	expect(asHTML(field, linkResolver)).toMatchInlineSnapshot(
		'"<p><a href=\\"https://example.org\\" rel=\\"noopener noreferrer\\">link</a></p>"',
	);
});

it("includes target attribute on links with a target value", () => {
	const field: RichTextField = [
		{
			type: "paragraph",
			text: "link",
			spans: [
				{
					type: "hyperlink",
					start: 0,
					end: 4,
					data: {
						link_type: "Web",
						url: "https://example.org",
						target: "_blank",
					},
				},
			],
		},
	];

	expect(asHTML(field, linkResolver)).toMatchInlineSnapshot(
		'"<p><a href=\\"https://example.org\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">link</a></p>"',
	);
});

it("returns null for nullish inputs", () => {
	expect(asHTML(null)).toBeNull();
	expect(asHTML(undefined)).toBeNull();
});
