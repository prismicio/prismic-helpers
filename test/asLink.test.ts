import test from "ava";

import { linkResolver } from "./__testutils__/linkResolver";

import { asLink } from "../src";
import { ArgumentError } from "../src/lib/ArgumentError";

test("throws when no linkResolver is provided", (t) => {
	const error = t.throws(
		() => {
			// @ts-expect-error testing JavaScript failsafe on purpose
			asLink();
		},
		{ instanceOf: ArgumentError },
	);

	t.is(
		error.message,
		"Expected argument `linkResolver` to be of type `function` but received type `undefined`",
	);
});

test("returns null when link field is falsy", (t) => {
	const field = undefined;

	// @ts-expect-error testing JavaScript failsafe on purpose
	t.is(asLink(field, linkResolver), null);
});

test("returns null when link to document field is empty", (t) => {
	const field = {
		link_type: "Document",
	};

	t.is(asLink(field, linkResolver), null);
});

test("returns null when link to media field is empty", (t) => {
	const field = {
		link_type: "Media",
	};

	t.is(asLink(field, linkResolver), null);
});

test("returns null when link field is empty", (t) => {
	const field = {
		link_type: "Any",
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
		link_type: "Document",
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
		link_type: "Document",
		isBroken: false,
	};

	t.is(asLink(field, linkResolver), "/test");
});

test("resolves a link to web field", (t) => {
	const field = {
		link_type: "Web",
		url: "https://prismic.io",
	};

	t.is(asLink(field, linkResolver), "https://prismic.io");
});

test("resolves a link to media field", (t) => {
	const field = {
		link_type: "Media",
		name: "test.jpg",
		kind: "image",
		url: "https://prismic.io",
		size: "420",
		height: "42",
		width: "42",
	};

	t.is(asLink(field, linkResolver), "https://prismic.io");
});
