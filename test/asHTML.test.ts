import { it, expect } from "vitest";

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

it("omits the target attributes on links without a target value", () => {
	expect(asHTML(richTextFixture.noLinkTarget, linkResolver)).toMatchSnapshot();
});

it("returns null for nullish inputs", () => {
	expect(asHTML(null)).toBeNull();
	expect(asHTML(undefined)).toBeNull();
});
