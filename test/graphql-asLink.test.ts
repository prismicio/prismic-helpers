import { FilledMinimalLinkToDocumentField } from "@prismicio/types/dist/graphql";
import test from "ava";

import { asLink, LinkResolverFunction } from "../src/graphql";

interface MyLinkToDocumentField extends FilledMinimalLinkToDocumentField {
	_meta: {
		uid: string | null;
	};
}

const linkResolver: LinkResolverFunction<MyLinkToDocumentField> = (doc) =>
	`/${doc._meta.uid}`;

test("returns null when link field is falsy", (t) => {
	const field = undefined;

	// @ts-expect-error testing JavaScript failsafe on purpose
	t.is(asLink(field, linkResolver), null);
});

test("returns null when link field is empty", (t) => {
	const field = {
		_linkType: "Link.any",
	} as const;

	// @ts-expect-error testing JavaScript failsafe on purpose
	t.is(asLink(field, linkResolver), null);
});

test("resolves a link to file field", (t) => {
	const field = {
		_linkType: "Link.file",
		url: "https://prismic.io",
	} as const;

	t.is(asLink(field, linkResolver), "https://prismic.io");
});

test("resolves a link to image field", (t) => {
	const field = {
		_linkType: "Link.image",
		url: "https://prismic.io",
	} as const;

	t.is(asLink(field, linkResolver), "https://prismic.io");
});

test("resolves a link to web field", (t) => {
	const field = {
		_linkType: "Link.web",
		url: "https://prismic.io",
	} as const;

	t.is(asLink(field, linkResolver), "https://prismic.io");
});

test("resolves a link to document field", (t) => {
	const field = {
		_linkType: "Link.document",
		_meta: {
			uid: "test",
		},
	} as const;

	t.is(asLink(field, linkResolver), "/test");
});

test("returns null when given a document field and linkResolver is not provided ", (t) => {
	const field = {
		_linkType: "Link.document",
		_meta: {
			uid: "test",
		},
	} as const;

	t.is(asLink(field), null);
});
