import { it, expect } from "vitest";

import type { FilledMinimalLinkToDocumentField } from "@prismicio/types/dist/graphql";

import { asLink, LinkResolverFunction } from "../src/graphql";

interface MyLinkToDocumentField extends FilledMinimalLinkToDocumentField {
	_meta: {
		uid: string | null;
	};
}

const linkResolver: LinkResolverFunction<MyLinkToDocumentField> = (doc) =>
	`/${doc._meta.uid}`;

it("returns null when link field is falsy", () => {
	const field = undefined;

	// @ts-expect-error testing JavaScript failsafe on purpose
	expect(asLink(field, linkResolver)).toBeNull();
});

it("returns null when link field is empty", () => {
	const field = {
		_linkType: "Link.any",
	} as const;

	// @ts-expect-error testing JavaScript failsafe on purpose
	expect(asLink(field, linkResolver)).toBeNull();
});

it("resolves a link to file field", () => {
	const field = {
		_linkType: "Link.file",
		url: "https://prismic.io",
	} as const;

	expect(asLink(field, linkResolver)).toBe("https://prismic.io");
});

it("resolves a link to image field", () => {
	const field = {
		_linkType: "Link.image",
		url: "https://prismic.io",
	} as const;

	expect(asLink(field, linkResolver)).toBe("https://prismic.io");
});

it("resolves a link to web field", () => {
	const field = {
		_linkType: "Link.web",
		url: "https://prismic.io",
	} as const;

	expect(asLink(field, linkResolver)).toBe("https://prismic.io");
});

it("resolves a link to document field", () => {
	const field = {
		_linkType: "Link.document",
		_meta: {
			uid: "test",
		},
	} as const;

	expect(asLink(field, linkResolver), "/test");
});

it("returns null when given a document field and linkResolver is not provided ", () => {
	const field = {
		_linkType: "Link.document",
		_meta: {
			uid: "test",
		},
	} as const;

	expect(asLink(field)).toBeNull();
});
