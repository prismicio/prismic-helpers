import { ImageField } from "@prismicio/types";
import test from "ava";

import { asImagePixelDensitySrcSet } from "../src";

test("returns null for nullish inputs", (t) => {
	t.is(asImagePixelDensitySrcSet(null), null);
	t.is(asImagePixelDensitySrcSet(undefined), null);
});

test("returns an image field pixel-density-based srcset with [1, 2, 3] pxiel densities by default", (t) => {
	const field: ImageField = {
		url: "https://images.prismic.io/qwerty/image.png?auto=compress%2Cformat",
		alt: null,
		copyright: null,
		dimensions: { width: 400, height: 300 },
	};

	t.deepEqual(asImagePixelDensitySrcSet(field), {
		src: field.url,
		srcset:
			`${field.url}&dpr=1 1x, ` +
			`${field.url}&dpr=2 2x, ` +
			`${field.url}&dpr=3 3x`,
	});
});

test("supports custom pixel densities", (t) => {
	const field: ImageField = {
		url: "https://images.prismic.io/qwerty/image.png?auto=compress%2Cformat",
		alt: null,
		copyright: null,
		dimensions: { width: 400, height: 300 },
	};

	t.deepEqual(
		asImagePixelDensitySrcSet(field, {
			pixelDensities: [2, 4, 6],
		}),
		{
			src: field.url,
			srcset:
				`${field.url}&dpr=2 2x, ` +
				`${field.url}&dpr=4 4x, ` +
				`${field.url}&dpr=6 6x`,
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
		asImagePixelDensitySrcSet(field, {
			sat: 100,
		}),
		{
			src: `${field.url}&sat=100`,
			srcset:
				`${field.url}&sat=100&dpr=1 1x, ` +
				`${field.url}&sat=100&dpr=2 2x, ` +
				`${field.url}&sat=100&dpr=3 3x`,
		},
	);
});

test("returns null when image field is empty", (t) => {
	const field: ImageField<null, "empty"> = {};

	t.is(asImagePixelDensitySrcSet(field), null);
});
