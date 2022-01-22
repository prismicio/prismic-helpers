import { ImageField } from "@prismicio/types";
import test from "ava";

import { asImageWidthSrcSet } from "../src";

test("returns an image field width-based srcset", (t) => {
	const field: ImageField = {
		url: "https://images.prismic.io/qwerty/image.png?auto=compress%2Cformat",
		alt: null,
		copyright: null,
		dimensions: { width: 400, height: 300 },
	};

	t.is(
		asImageWidthSrcSet(field, {
			widths: [400, 800, 1600],
		}),
		`${field.url}&width=400 400w, ` +
			`${field.url}&width=800 800w, ` +
			`${field.url}&width=1600 1600w`,
	);
});

test("applies given Imgix URL parameters", (t) => {
	const field: ImageField = {
		url: "https://images.prismic.io/qwerty/image.png?auto=compress%2Cformat",
		alt: null,
		copyright: null,
		dimensions: { width: 400, height: 300 },
	};

	t.is(
		asImageWidthSrcSet(field, {
			widths: [400, 800, 1600],
			sat: 100,
		}),
		`${field.url}&sat=100&width=400 400w, ` +
			`${field.url}&sat=100&width=800 800w, ` +
			`${field.url}&sat=100&width=1600 1600w`,
	);
});

test("returns null when image field is empty", (t) => {
	const field: ImageField<null, "empty"> = {};

	t.is(
		asImageWidthSrcSet(field, {
			widths: [400, 800, 1600],
		}),
		null,
	);
});
