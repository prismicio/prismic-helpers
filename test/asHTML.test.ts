import test from "ava";

import { richTextFixture } from "./__fixtures__/richText";
import { linkResolver } from "./__testutils__/linkResolver";
import { htmlFunctionSerializer } from "./__testutils__/htmlFunctionSerializer";
import { htmlMapSerializer } from "./__testutils__/htmlMapSerializer";

import { asHTML } from "../src";

test("serializes with default serializer", (t) => {
	t.snapshot(asHTML(richTextFixture.en, linkResolver));
});

test("serializes with a custom function serializer", (t) => {
	t.snapshot(asHTML(richTextFixture.en, linkResolver, htmlFunctionSerializer));
});

test("serializes with a custom map serializer", (t) => {
	t.snapshot(asHTML(richTextFixture.en, linkResolver, htmlMapSerializer));
});

test("escapes external links to prevent XSS", (t) => {
	t.snapshot(asHTML(richTextFixture.xss, linkResolver));
});

test("returns null for nullish inputs", (t) => {
	t.is(asHTML(null), null);
	t.is(asHTML(undefined), null);
});
