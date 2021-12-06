import test from "ava";
import * as prismicR from "@prismicio/richtext";

import { richTextFixture } from "./__fixtures__/richText";

import * as prismicH from "../src";

test("is an alias for @prismicio/richtext's `asText` function for non-nullish inputs", (t) => {
	t.is(
		prismicH.asText(richTextFixture.en),
		prismicR.asText(richTextFixture.en),
	);
});

test("returns null for nullish inputs", (t) => {
	t.is(prismicH.asText(null), null);
	t.is(prismicH.asText(undefined), null);
});
