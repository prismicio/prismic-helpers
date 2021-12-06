import { LinkType } from "@prismicio/types";
import test from "ava";

import { documentFixture } from "./__fixtures__/document";

import { documentToLinkField } from "../src";

test("returns equivalent link field from given document", (t) => {
	const document = { ...documentFixture.empty, url: null };

	t.deepEqual(documentToLinkField(document), {
		link_type: LinkType.Document,
		id: "XvoFFREAAM0WGBng",
		uid: "test",
		type: "page",
		tags: [],
		lang: "en-us",
		url: undefined,
		slug: "slug",
	});
});

test("returns equivalent link field from given document with `apiOptions.routes`", (t) => {
	const document = { ...documentFixture.empty };

	t.deepEqual(documentToLinkField(document), {
		link_type: LinkType.Document,
		id: "XvoFFREAAM0WGBng",
		uid: "test",
		type: "page",
		tags: [],
		lang: "en-us",
		url: "/test",
		slug: "slug",
	});
});

test("returns equivalent link field from given document without uid", (t) => {
	const document = { ...documentFixture.empty, uid: null };

	t.deepEqual(documentToLinkField(document), {
		link_type: LinkType.Document,
		id: "XvoFFREAAM0WGBng",
		uid: undefined,
		type: "page",
		tags: [],
		lang: "en-us",
		url: "/test",
		slug: "slug",
	});
});

test("returns equivalent link field from given document with non-empty data", (t) => {
	const document = { ...documentFixture.empty, data: { foo: "bar" } };

	t.deepEqual(documentToLinkField(document), {
		link_type: LinkType.Document,
		id: "XvoFFREAAM0WGBng",
		uid: "test",
		type: "page",
		tags: [],
		lang: "en-us",
		url: "/test",
		slug: "slug",
		data: { foo: "bar" },
	});
});

// This test checks support for Gatsby users. The `slugs` field is not
// queriable in Gatsby since it is deprecated.
// Deprecation info: https://community.prismic.io/t/what-are-slugs/6493
test("supports documents without slugs field", (t) => {
	const document = {
		...documentFixture.empty,
		url: null,
		slugs: undefined,
	};

	t.deepEqual(documentToLinkField(document), {
		link_type: LinkType.Document,
		id: "XvoFFREAAM0WGBng",
		uid: "test",
		type: "page",
		tags: [],
		lang: "en-us",
		url: undefined,
		slug: undefined,
	});
});
