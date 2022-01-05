import test from "ava";

import { documentFixture } from "./__fixtures__/document";
import { linkResolver } from "./__testutils__/linkResolver";

import { asLink } from "../src";
import { LinkType } from "@prismicio/types";

test("returns null when link field is falsy", (t) => {
	const field = undefined;

	// @ts-expect-error testing JavaScript failsafe on purpose
	t.is(asLink(field, linkResolver), null);
});

test("returns null when link to document field is empty", (t) => {
	const field = {
		link_type: LinkType.Document,
	};

	t.is(asLink(field, linkResolver), null);
});

test("returns null when link to media field is empty", (t) => {
	const field = {
		link_type: LinkType.Media,
	};

	t.is(asLink(field, linkResolver), null);
});

test("returns null when link field is empty", (t) => {
	const field = {
		link_type: LinkType.Any,
	};

	t.is(asLink(field, linkResolver), null);
});

test("resolves a link to document field without Route Resolver", (t) => {
	const field = {
		id: "XvoFFREAAM0WGBng",
		type: "page",
		tags: [],
		slug: "slug",
		lang: "en-us",
		uid: "test",
		link_type: LinkType.Document,
		isBroken: false,
	};

	t.is(
		asLink(field),
		null,
		"returns null if both Link Resolver and Route Resolver are not used",
	);
	t.is(
		asLink(field, linkResolver),
		"/test",
		"uses Link Resolver URL if Link Resolver returns a non-nullish value",
	);
	t.is(
		asLink(field, () => undefined),
		null,
		"returns null if Link Resolver returns undefined",
	);
	t.is(
		asLink(field, () => null),
		null,
		"returns null if Link Resolver returns null",
	);
});

test("resolves a link to document field with Route Resolver", (t) => {
	const field = {
		id: "XvoFFREAAM0WGBng",
		type: "page",
		tags: [],
		slug: "slug",
		lang: "en-us",
		uid: "uid",
		url: "url",
		link_type: LinkType.Document,
		isBroken: false,
	};

	t.is(
		asLink(field),
		field.url,
		"uses Route Resolver URL if Link Resolver is not given",
	);
	t.is(
		asLink(field, () => "link-resolver-value"),
		"link-resolver-value",
		"uses Link Resolver URL if Link Resolver returns a non-nullish value",
	);
	t.is(
		asLink(field, () => undefined),
		field.url,
		"uses Route Resolver URL if Link Resolver returns undefined",
	);
	t.is(
		asLink(field, () => null),
		field.url,
		"uses Route Resolver URL if Link Resolver returns null",
	);
});

test("returns null when given a document field and linkResolver is not provided ", (t) => {
	const field = {
		id: "XvoFFREAAM0WGBng",
		link_type: LinkType.Document,
	};

	t.is(asLink(field), null);
});

test("resolves a link to web field", (t) => {
	const field = {
		link_type: LinkType.Web,
		url: "https://prismic.io",
	};

	t.is(asLink(field, linkResolver), "https://prismic.io");
});

test("resolves a link to media field", (t) => {
	const field = {
		link_type: LinkType.Media,
		name: "test.jpg",
		kind: "image",
		url: "https://prismic.io",
		size: "420",
		height: "42",
		width: "42",
	};

	t.is(asLink(field, linkResolver), "https://prismic.io");
});

test("resolves a document", (t) => {
	const document = { ...documentFixture.empty };

	t.is(asLink(document), "/test");
});
