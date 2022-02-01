import { ImageField } from "@prismicio/types";
import test from "ava";

import { asImageWidthSrcSet } from "../src";

test("returns an image field src and width-based srcset with [640, 750, 828, 1080, 1200, 1920, 2048, 3840] widths by default", (t) => {
	const field: ImageField = {
		url: "https://images.prismic.io/qwerty/image.png?auto=compress%2Cformat",
		alt: null,
		copyright: null,
		dimensions: { width: 400, height: 300 },
	};

	t.deepEqual(asImageWidthSrcSet(field), {
		src: field.url,
		srcset:
			`${field.url}&width=640 640w, ` +
			`${field.url}&width=828 828w, ` +
			`${field.url}&width=1200 1200w, ` +
			`${field.url}&width=2048 2048w, ` +
			`${field.url}&width=3840 3840w`,
	});
});

test("supports custom widths", (t) => {
	const field: ImageField = {
		url: "https://images.prismic.io/qwerty/image.png?auto=compress%2Cformat",
		alt: null,
		copyright: null,
		dimensions: { width: 400, height: 300 },
	};

	t.deepEqual(
		asImageWidthSrcSet(field, {
			widths: [400, 800, 1600],
		}),
		{
			src: field.url,
			srcset:
				`${field.url}&width=400 400w, ` +
				`${field.url}&width=800 800w, ` +
				`${field.url}&width=1600 1600w`,
		},
	);
});

test("applies given Imgix URL parameters", (t) => {
	const field: ImageField = {
		url: "https://images.prismic.io/qwerty/image.png?auto=compress%2Cformat",
		alt: null,
		copyright: null,
		dimensions: { width: 400, height: 300 },
	};

	t.deepEqual(
		asImageWidthSrcSet(field, {
			sat: 100,
		}),
		{
			src: `${field.url}&sat=100`,
			srcset:
				`${field.url}&sat=100&width=640 640w, ` +
				`${field.url}&sat=100&width=828 828w, ` +
				`${field.url}&sat=100&width=1200 1200w, ` +
				`${field.url}&sat=100&width=2048 2048w, ` +
				`${field.url}&sat=100&width=3840 3840w`,
		},
	);
});

test("returns a srcset of responsive views if the field contains responsive views", (t) => {
	const field = {
		url: "https://images.prismic.io/qwerty/image.png?auto=compress%2Cformat",
		alt: null,
		copyright: null,
		dimensions: { width: 1000, height: 800 },
		foo: {
			url: "https://images.prismic.io/qwerty/image.png?auto=compress%2Cformat",
			alt: null,
			copyright: null,
			dimensions: { width: 500, height: 400 },
		},
		bar: {
			url: "https://images.prismic.io/qwerty/image.png?auto=compress%2Cformat",
			alt: null,
			copyright: null,
			dimensions: { width: 250, height: 200 },
		},
	};

	t.deepEqual(asImageWidthSrcSet(field), {
		src: field.url,
		srcset:
			`${field.url}&width=1000 1000w, ` +
			`${field.foo.url}&width=500 500w, ` +
			`${field.bar.url}&width=250 250w`,
	});
});

test("returns null when image field is empty", (t) => {
	const field: ImageField<null, "empty"> = {};

	t.is(asImageWidthSrcSet(field), null);
});
