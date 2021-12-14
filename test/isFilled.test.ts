import test from "ava";
import * as prismicM from "@prismicio/mock";

import * as prismicH from "../src";

test("color", (t) => {
	t.false(prismicH.isColorFilled(null));
	t.true(prismicH.isColorFilled(prismicM.value.color({ seed: t.title })));
});

test("content relationship", (t) => {
	t.false(
		prismicH.isContentRelationshipFilled(
			prismicM.value.contentRelationship({
				seed: t.title,
				isFilled: false,
			}),
		),
	);
	t.true(
		prismicH.isContentRelationshipFilled(
			prismicM.value.contentRelationship({
				seed: t.title,
				isFilled: true,
			}),
		),
	);
});

test("date", (t) => {
	t.false(prismicH.isDateFilled(null));
	t.true(prismicH.isDateFilled(prismicM.value.date({ seed: t.title })));
});

test("embed", (t) => {
	t.false(prismicH.isEmbedFilled({}));
	t.true(prismicH.isEmbedFilled(prismicM.value.embed({ seed: t.title })));
});

test("geopoint", (t) => {
	t.false(prismicH.isGeoPointFilled({}));
	t.true(prismicH.isGeoPointFilled(prismicM.value.geoPoint({ seed: t.title })));
});

test("group", (t) => {
	t.false(prismicH.isGroupFilled([]));
	t.true(prismicH.isGroupFilled(prismicM.value.group({ seed: t.title })));
});

test("image", (t) => {
	t.false(prismicH.isImageFilled({}));
	t.true(prismicH.isImageFilled(prismicM.value.image({ seed: t.title })));
});

test("image thumbnail", (t) => {
	t.false(prismicH.isImageThumbnailFilled({}));
	t.true(
		prismicH.isImageThumbnailFilled({
			url: "url",
			alt: null,
			copyright: null,
			dimensions: { width: 1, height: 1 },
		}),
	);
});

test("integration fields", (t) => {
	t.false(prismicH.isIntegrationFieldsFilled(null));
	t.true(
		prismicH.isIntegrationFieldsFilled(
			prismicM.value.integrationFields({ seed: t.title }),
		),
	);
});

test("key text", (t) => {
	t.false(prismicH.isKeyTextFilled(null));
	t.true(prismicH.isKeyTextFilled(prismicM.value.keyText({ seed: t.title })));
});

test("link", (t) => {
	t.false(
		prismicH.isLinkFilled(
			prismicM.value.link({ seed: t.title, isFilled: false }),
		),
	);
	t.true(
		prismicH.isLinkFilled(
			prismicM.value.link({ seed: t.title, isFilled: true }),
		),
	);
});

test("link to media", (t) => {
	t.false(
		prismicH.isLinkToMediaFilled(
			prismicM.value.linkToMedia({ seed: t.title, isFilled: false }),
		),
	);
	t.true(
		prismicH.isLinkToMediaFilled(
			prismicM.value.linkToMedia({ seed: t.title, isFilled: true }),
		),
	);
});

test("number", (t) => {
	t.false(prismicH.isNumberFilled(null));
	t.true(prismicH.isNumberFilled(prismicM.value.number({ seed: t.title })));
});

test("rich text", (t) => {
	t.false(prismicH.isRichTextFilled([]));
	t.false(
		prismicH.isRichTextFilled([{ type: "paragraph", text: "", spans: [] }]),
	);
	t.true(prismicH.isRichTextFilled(prismicM.value.richText({ seed: t.title })));
});

test("select", (t) => {
	t.false(prismicH.isSelectFilled(null));
	t.true(prismicH.isSelectFilled(prismicM.value.select({ seed: t.title })));
});

test("slice zone", (t) => {
	t.false(prismicH.isSliceZoneFilled([]));
	t.true(
		prismicH.isSliceZoneFilled(prismicM.value.sliceZone({ seed: t.title })),
	);
});

test("timestamp", (t) => {
	t.false(prismicH.isTimestampFilled(null));
	t.true(
		prismicH.isTimestampFilled(prismicM.value.timestamp({ seed: t.title })),
	);
});

test("title", (t) => {
	t.false(prismicH.isTitleFilled([]));
	t.false(prismicH.isTitleFilled([{ type: "heading1", text: "", spans: [] }]));
	t.true(prismicH.isTitleFilled(prismicM.value.title({ seed: t.title })));
});
