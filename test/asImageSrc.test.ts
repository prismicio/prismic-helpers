import { ImageField } from "@prismicio/types";
import test from "ava";

import { asImageSrc } from "../src";

test("returns null for nullish inputs", (t) => {
	t.is(asImageSrc(null), null);
	t.is(asImageSrc(undefined), null);
});

test("returns an image field URL", (t) => {
	const field: ImageField = {
		url: "https://images.prismic.io/qwerty/image.png?auto=compress%2Cformat",
		alt: null,
		copyright: null,
		dimensions: { width: 400, height: 300 },
	};

	t.is(asImageSrc(field), field.url);
});

test("applies given Imgix URL parameters", (t) => {
	const field: ImageField = {
		url: "https://images.prismic.io/qwerty/image.png?auto=compress%2Cformat",
		alt: null,
		copyright: null,
		dimensions: { width: 400, height: 300 },
	};

	t.is(asImageSrc(field, { sat: 100 }), `${field.url}&sat=100`);
});

test("returns null when image field is empty", (t) => {
	const field: ImageField<null, "empty"> = {};

	t.is(asImageSrc(field), null);
});
