import test from "ava";

import { documentFixture } from "./__fixtures__/document";

import { documentAsLink } from "../src";

test("resolves a document to a link", (t) => {
	const document = { ...documentFixture.empty };

	t.is(documentAsLink(document), "/test");
});
