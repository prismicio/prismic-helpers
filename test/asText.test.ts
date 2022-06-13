import { it, expect } from "vitest";
import * as prismicR from "@prismicio/richtext";

import { richTextFixture } from "./__fixtures__/richText";

import * as prismicH from "../src";

it("is an alias for @prismicio/richtext's `asText` function for non-nullish inputs", () => {
	expect(prismicH.asText(richTextFixture.en)).toBe(
		prismicR.asText(richTextFixture.en),
	);
});

it("returns null for nullish inputs", () => {
	expect(prismicH.asText(null)).toBeNull();
	expect(prismicH.asText(undefined)).toBeNull();
});
