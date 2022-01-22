import { ImageField } from "@prismicio/types";
import test from "ava";

import { asImagePixelDensitySrcSet } from "../src";

test("returns an image field pixel-density-based srcset", (t) => {
	const field: ImageField = {
		url: "https://images.prismic.io/qwerty/image.png?auto=compress%2Cformat",
		alt: null,
		copyright: null,
		dimensions: { width: 400, height: 300 },
	};

	t.is(
		asImagePixelDensitySrcSet(field, {
			pixelDensities: [1, 2, 3],
		}),
		`${field.url}&dpr=1 1x, ` +
			`${field.url}&dpr=2 2x, ` +
			`${field.url}&dpr=3 3x`,
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
		asImagePixelDensitySrcSet(field, {
			pixelDensities: [1, 2, 3],
			sat: 100,
		}),
		`${field.url}&sat=100&dpr=1 1x, ` +
			`${field.url}&sat=100&dpr=2 2x, ` +
			`${field.url}&sat=100&dpr=3 3x`,
	);
});

test("returns null when image field is empty", (t) => {
	const field: ImageField<null, "empty"> = {};

	t.is(
		asImagePixelDensitySrcSet(field, {
			pixelDensities: [1, 2, 3],
		}),
		null,
	);
});
