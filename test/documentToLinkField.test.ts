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
