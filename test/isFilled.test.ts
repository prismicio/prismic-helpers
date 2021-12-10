import test from "ava";

import * as prismicM from "@prismicio/mock";
import * as prismicT from "@prismicio/types";

import { isFilled } from "../src";

test("returns false for not filled fields", (t) => {
	// Simple fields
	const dateField: prismicT.DateField<"empty"> = null;
	t.false(isFilled(dateField), "DateField");

	const timestampField: prismicT.TimestampField<"empty"> = null;
	t.false(isFilled(timestampField), "TimestampField");

	const colorField: prismicT.ColorField<"empty"> = null;
	t.false(isFilled(colorField), "ColorField");

	const numberField: prismicT.NumberField<"empty"> = null;
	t.false(isFilled(numberField), "NumberField");

	const keyTextField: prismicT.KeyTextField<"empty"> = null;
	t.false(isFilled(keyTextField), "KeyTextField");

	const selectField: prismicT.SelectField<"empty"> = null;
	t.false(isFilled(selectField), "SelectField");

	// TitleField, RichTextField
	const titleField: prismicT.TitleField<"empty"> = [];
	t.false(isFilled(titleField), "TitleField");

	const richTextField: prismicT.RichTextField<"empty"> = [];
	t.false(isFilled(richTextField), "RichTextField");

	// RelationField, LinkField, LinkToMediaField
	const relationField: prismicT.RelationField<string, string, never, "empty"> =
		prismicM.value.contentRelationship({ isFilled: false });
	t.false(isFilled(relationField), "RelationField");

	const linkField: prismicT.LinkField<string, string, never, "empty"> =
		prismicM.value.link({ type: prismicT.LinkType.Any, isFilled: false });
	t.false(isFilled(linkField), "LinkField");

	const linkToWebField: prismicT.EmptyLinkField<typeof prismicT.LinkType.Web> =
		prismicM.value.link({ type: prismicT.LinkType.Web, isFilled: false });
	t.false(isFilled(linkToWebField), "LinkToWebField");

	const linkToMediaField: prismicT.LinkToMediaField<"empty"> =
		prismicM.value.linkToMedia({ isFilled: false });
	t.false(isFilled(linkToMediaField), "LinkToMediaField");

	// ImageField, EmbedField, GeoPointField, IntegrationField
	const imageField: prismicT.ImageField<null, "empty"> = {};
	t.false(isFilled(imageField), "ImageField");

	const embedField: prismicT.EmbedField<prismicT.CommonEmbedData, "empty"> = {};
	t.false(isFilled(embedField), "EmbedField");

	const geoPointField: prismicT.GeoPointField<"empty"> = {};
	t.false(isFilled(geoPointField), "GeoPointField");

	const integrationFields: prismicT.IntegrationFields<unknown, "empty"> = null;
	t.false(isFilled(integrationFields), "IntegrationFields");
});

test("returns false for not filled primitives", (t) => {
	t.false(isFilled(null));
	t.false(isFilled(undefined as unknown as null));
	t.false(isFilled(""));
	t.false(isFilled([]));
	t.false(isFilled({}));
});

test("returns true for filled fields", (t) => {
	// Simple fields
	const dateField: prismicT.DateField = prismicM.value.date();
	t.true(isFilled(dateField), "DateField");

	const timestampField: prismicT.TimestampField = prismicM.value.timestamp();
	t.true(isFilled(timestampField), "TimestampField");

	const colorField: prismicT.ColorField = prismicM.value.color();
	t.true(isFilled(colorField), "ColorField");

	const numberField: prismicT.NumberField = prismicM.value.number();
	t.true(isFilled(numberField), "NumberField");

	const keyTextField1: prismicT.KeyTextField = prismicM.value.keyText();
	t.true(isFilled(keyTextField1), "KeyTextField");

	const selectField: prismicT.SelectField = prismicM.value.select();
	t.true(isFilled(selectField), "SelectField");

	// TitleField, RichTextField
	const titleField: prismicT.TitleField = prismicM.value.title();
	t.true(isFilled(titleField), "TitleField");

	const richTextField: prismicT.RichTextField = prismicM.value.richText();
	t.true(isFilled(richTextField), "RichTextField");

	// RelationField, LinkField, LinkToMediaField
	const relationField: prismicT.RelationField<string, string, never, "filled"> =
		prismicM.value.contentRelationship({ isFilled: true });
	t.true(isFilled(relationField), "RelationField");

	const linkField: prismicT.LinkField<string, string, never, "filled"> =
		prismicM.value.link({ isFilled: true });
	t.true(isFilled(linkField), "LinkField");

	const linkToWebField: prismicT.FilledLinkToWebField = prismicM.value.link({
		type: prismicT.LinkType.Web,
		isFilled: true,
	});
	t.true(isFilled(linkToWebField), "LinkToWebField");

	const linkToMediaField: prismicT.LinkToMediaField<"filled"> =
		prismicM.value.linkToMedia({ isFilled: true });
	t.true(isFilled(linkToMediaField), "LinkToMediaField");

	// ImageField, EmbedField, GeoPointField, IntegrationField
	const imageField: prismicT.ImageField = prismicM.value.image();
	t.true(isFilled(imageField), "ImageField");

	const embedField: prismicT.EmbedField = prismicM.value.embed();
	t.true(isFilled(embedField), "EmbedField");

	const geoPointField: prismicT.GeoPointField = prismicM.value.geoPoint();
	t.true(isFilled(geoPointField), "GeoPointField");

	const integrationFields: prismicT.IntegrationFields =
		prismicM.value.integrationFields();
	t.true(isFilled(integrationFields), "IntegrationFields");
});

test("returns true for filled primitives", (t) => {
	t.true(isFilled(false));
	t.true(isFilled(0));
});
