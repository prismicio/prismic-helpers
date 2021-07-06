import test from "ava";

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

test("resolves a link to document field", (t) => {
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

	t.is(asLink(field, linkResolver), "/test");
});

test("resolves a link to document field with `apiOptions.routes`", (t) => {
	const field = {
		id: "XvoFFREAAM0WGBng",
		type: "page",
		tags: [],
		slug: "slug",
		lang: "en-us",
		uid: "test",
		url: "/test",
		link_type: LinkType.Document,
		isBroken: false,
	};

	t.is(asLink(field, linkResolver), "/test");
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
