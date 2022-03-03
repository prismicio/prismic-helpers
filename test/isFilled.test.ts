import test from "ava";
import * as prismicM from "@prismicio/mock";

import * as prismicH from "../src";

test("color", (t) => {
	t.false(prismicH.isFilled.color(null));
	t.false(prismicH.isFilled.color(undefined));
	t.true(prismicH.isFilled.color(prismicM.value.color({ seed: t.title })));
});

test("content relationship", (t) => {
	t.false(prismicH.isFilled.contentRelationship(null));
	t.false(prismicH.isFilled.contentRelationship(undefined));
	t.false(
		prismicH.isFilled.contentRelationship(
			prismicM.value.contentRelationship({
				seed: t.title,
				state: "empty",
			}),
		),
	);
	t.true(
		prismicH.isFilled.contentRelationship(
			prismicM.value.contentRelationship({
				seed: t.title,
				state: "filled",
			}),
		),
	);
});

test("date", (t) => {
	t.false(prismicH.isFilled.date(null));
	t.false(prismicH.isFilled.date(undefined));
	t.true(prismicH.isFilled.date(prismicM.value.date({ seed: t.title })));
});

test("embed", (t) => {
	t.false(prismicH.isFilled.embed(null));
	t.false(prismicH.isFilled.embed(undefined));
	t.false(prismicH.isFilled.embed({}));
	t.true(prismicH.isFilled.embed(prismicM.value.embed({ seed: t.title })));
});

test("geopoint", (t) => {
	t.false(prismicH.isFilled.geoPoint(null));
	t.false(prismicH.isFilled.geoPoint(undefined));
	t.false(prismicH.isFilled.geoPoint({}));
	t.true(
		prismicH.isFilled.geoPoint(prismicM.value.geoPoint({ seed: t.title })),
	);
});

test("group", (t) => {
	t.false(prismicH.isFilled.group(null));
	t.false(prismicH.isFilled.group(undefined));
	t.false(prismicH.isFilled.group([]));
	t.true(prismicH.isFilled.group(prismicM.value.group({ seed: t.title })));
});

test("image", (t) => {
	t.false(prismicH.isFilled.image(null));
	t.false(prismicH.isFilled.image(undefined));
	t.false(prismicH.isFilled.image({}));
	t.true(prismicH.isFilled.image(prismicM.value.image({ seed: t.title })));
});

test("image thumbnail", (t) => {
	t.false(prismicH.isFilled.imageThumbnail(null));
	t.false(prismicH.isFilled.imageThumbnail(undefined));
	t.false(prismicH.isFilled.imageThumbnail({}));
	t.true(
		prismicH.isFilled.imageThumbnail({
			url: "url",
			alt: null,
			copyright: null,
			dimensions: { width: 1, height: 1 },
		}),
	);
});

test("integration fields", (t) => {
	t.false(prismicH.isFilled.integrationFields(null));
	t.false(prismicH.isFilled.integrationFields(undefined));
	t.true(
		prismicH.isFilled.integrationFields(
			prismicM.value.integrationFields({ seed: t.title }),
		),
	);
});

test("key text", (t) => {
	t.false(prismicH.isFilled.keyText(null));
	t.false(prismicH.isFilled.keyText(undefined));
	t.false(prismicH.isFilled.keyText(""));
	t.true(prismicH.isFilled.keyText(prismicM.value.keyText({ seed: t.title })));
});

test("link", (t) => {
	t.false(prismicH.isFilled.link(null));
	t.false(prismicH.isFilled.link(undefined));
	t.false(
		prismicH.isFilled.link(
			prismicM.value.link({ seed: t.title, state: "empty" }),
		),
	);
	t.true(
		prismicH.isFilled.link(
			prismicM.value.link({ seed: t.title, state: "filled" }),
		),
	);
});

test("link to media", (t) => {
	t.false(prismicH.isFilled.linkToMedia(null));
	t.false(prismicH.isFilled.linkToMedia(undefined));
	t.false(
		prismicH.isFilled.linkToMedia(
			prismicM.value.linkToMedia({ seed: t.title, state: "empty" }),
		),
	);
	t.true(
		prismicH.isFilled.linkToMedia(
			prismicM.value.linkToMedia({ seed: t.title, state: "filled" }),
		),
	);
});

test("number", (t) => {
	t.false(prismicH.isFilled.number(null));
	t.false(prismicH.isFilled.number(undefined));
	t.true(prismicH.isFilled.number(prismicM.value.number({ seed: t.title })));
});

test("rich text", (t) => {
	t.false(prismicH.isFilled.richText(null));
	t.false(prismicH.isFilled.richText(undefined));
	t.false(prismicH.isFilled.richText([]));
	t.false(
		prismicH.isFilled.richText([{ type: "paragraph", text: "", spans: [] }]),
	);
	t.true(
		prismicH.isFilled.richText(prismicM.value.richText({ seed: t.title })),
	);
});

test("select", (t) => {
	t.false(prismicH.isFilled.select(null));
	t.false(prismicH.isFilled.select(undefined));
	t.true(
		prismicH.isFilled.select(
			prismicM.value.select({
				seed: t.title,
				model: prismicM.model.select({
					seed: t.title,
					options: ["foo", "bar"],
				}),
			}),
		),
	);
});

test("slice zone", (t) => {
	t.false(prismicH.isFilled.sliceZone(null));
	t.false(prismicH.isFilled.sliceZone(undefined));
	t.false(prismicH.isFilled.sliceZone([]));
	t.true(
		prismicH.isFilled.sliceZone(
			prismicM.value.sliceZone({
				seed: t.title,
				model: prismicM.model.sliceZone({
					seed: t.title,
					choices: {
						Foo: prismicM.model.slice({ seed: t.title }),
						Bar: prismicM.model.slice({ seed: t.title }),
					},
				}),
			}),
		),
	);
});

test("timestamp", (t) => {
	t.false(prismicH.isFilled.timestamp(null));
	t.false(prismicH.isFilled.timestamp(undefined));
	t.true(
		prismicH.isFilled.timestamp(prismicM.value.timestamp({ seed: t.title })),
	);
});

test("title", (t) => {
	t.false(prismicH.isFilled.title(null));
	t.false(prismicH.isFilled.title(undefined));
	t.false(prismicH.isFilled.title([]));
	t.false(prismicH.isFilled.title([{ type: "heading1", text: "", spans: [] }]));
	t.true(prismicH.isFilled.title(prismicM.value.title({ seed: t.title })));
});
