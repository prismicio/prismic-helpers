import test from "ava";

import { documentToLinkField } from "../src";

const referenceDocument = {
	id: "XvoFFREAAM0WGBng",
	uid: "test",
	url: "/test",
	type: "page",
	href: "https://example.cdn.prismic.io/api/v2/documents/search",
	tags: [],
	first_publication_date: "2020-06-29T15:13:27+0000",
	last_publication_date: "2021-05-18T15:44:01+0000",
	slugs: ["slug"],
	linked_documents: [],
	lang: "en-us",
	alternate_languages: [],
	data: {}
};

test("returns equivalent link field from given document", t => {
	const document = { ...referenceDocument, url: null };

	t.deepEqual(documentToLinkField(document), {
		link_type: "Document",
		id: "XvoFFREAAM0WGBng",
		uid: "test",
		type: "page",
		tags: [],
		lang: "en-us",
		url: undefined,
		slug: "slug"
	});
});

test("returns equivalent link field from given document with `apiOptions.routes`", t => {
	const document = { ...referenceDocument };

	t.deepEqual(documentToLinkField(document), {
		link_type: "Document",
		id: "XvoFFREAAM0WGBng",
		uid: "test",
		type: "page",
		tags: [],
		lang: "en-us",
		url: "/test",
		slug: "slug"
	});
});

test("returns equivalent link field from given document without uid", t => {
	const document = { ...referenceDocument, uid: null };

	t.deepEqual(documentToLinkField(document), {
		link_type: "Document",
		id: "XvoFFREAAM0WGBng",
		uid: undefined,
		type: "page",
		tags: [],
		lang: "en-us",
		url: "/test",
		slug: "slug"
	});
});
