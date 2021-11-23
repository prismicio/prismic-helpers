import test from "ava";
import * as prismicR from "@prismicio/richtext";

import * as prismicH from "../src";

test("is an alias for @prismicio/richtext's `asText` function", (t) => {
	t.is(prismicH.asText, prismicR.asText);
});
