import { it, expect } from "vitest";

import * as prismicT from "@prismicio/types";

import * as prismicH from "../src";

it("color", (ctx) => {
	expect(prismicH.isFilled.color(null)).toBe(false);
	expect(prismicH.isFilled.color(undefined)).toBe(false);
	expect(prismicH.isFilled.color(ctx.mock.value.color())).toBe(true);
});

it("content relationship", (ctx) => {
	expect(prismicH.isFilled.contentRelationship(null)).toBe(false);
	expect(prismicH.isFilled.contentRelationship(undefined)).toBe(false);
	expect(
		prismicH.isFilled.contentRelationship(
			ctx.mock.value.contentRelationship({
				state: "empty",
			}),
		),
	).toBe(false);
	expect(
		prismicH.isFilled.contentRelationship(
			ctx.mock.value.contentRelationship({
				state: "filled",
			}),
		),
	).toBe(true);
});

it("date", (ctx) => {
	expect(prismicH.isFilled.date(null)).toBe(false);
	expect(prismicH.isFilled.date(undefined)).toBe(false);
	expect(prismicH.isFilled.date(ctx.mock.value.date())).toBe(true);
});

it("embed", (ctx) => {
	expect(prismicH.isFilled.embed(null)).toBe(false);
	expect(prismicH.isFilled.embed(undefined)).toBe(false);
	expect(prismicH.isFilled.embed({})).toBe(false);
	expect(prismicH.isFilled.embed(ctx.mock.value.embed())).toBe(true);
});

it("geopoint", (ctx) => {
	expect(prismicH.isFilled.geoPoint(null)).toBe(false);
	expect(prismicH.isFilled.geoPoint(undefined)).toBe(false);
	expect(prismicH.isFilled.geoPoint({})).toBe(false);
	expect(prismicH.isFilled.geoPoint(ctx.mock.value.geoPoint())).toBe(true);
});

it("group", (ctx) => {
	expect(prismicH.isFilled.group(null)).toBe(false);
	expect(prismicH.isFilled.group(undefined)).toBe(false);
	expect(prismicH.isFilled.group([])).toBe(false);
	expect(
		prismicH.isFilled.group(ctx.mock.value.group() as prismicT.GroupField),
	).toBe(true);
});

it("image", (ctx) => {
	expect(prismicH.isFilled.image(null)).toBe(false);
	expect(prismicH.isFilled.image(undefined)).toBe(false);
	expect(prismicH.isFilled.image({})).toBe(false);
	expect(prismicH.isFilled.image(ctx.mock.value.image())).toBe(true);
});

it("image thumbnail", () => {
	expect(prismicH.isFilled.imageThumbnail(null)).toBe(false);
	expect(prismicH.isFilled.imageThumbnail(undefined)).toBe(false);
	expect(prismicH.isFilled.imageThumbnail({})).toBe(false);
	expect(
		prismicH.isFilled.imageThumbnail({
			url: "url",
			alt: null,
			copyright: null,
			dimensions: { width: 1, height: 1 },
		}),
	).toBe(true);
});

it("integration fields", (ctx) => {
	expect(prismicH.isFilled.integrationFields(null)).toBe(false);
	expect(prismicH.isFilled.integrationFields(undefined)).toBe(false);
	expect(
		prismicH.isFilled.integrationFields(ctx.mock.value.integrationFields()),
	).toBe(true);
});

it("key text", (ctx) => {
	expect(prismicH.isFilled.keyText(null)).toBe(false);
	expect(prismicH.isFilled.keyText(undefined)).toBe(false);
	expect(prismicH.isFilled.keyText("")).toBe(false);
	expect(prismicH.isFilled.keyText(ctx.mock.value.keyText())).toBe(true);
});

it("link", (ctx) => {
	expect(prismicH.isFilled.link(null)).toBe(false);
	expect(prismicH.isFilled.link(undefined)).toBe(false);
	expect(prismicH.isFilled.link(ctx.mock.value.link({ state: "empty" }))).toBe(
		false,
	);
	expect(prismicH.isFilled.link(ctx.mock.value.link({ state: "filled" }))).toBe(
		true,
	);
});

it("link to media", (ctx) => {
	expect(prismicH.isFilled.linkToMedia(null)).toBe(false);
	expect(prismicH.isFilled.linkToMedia(undefined)).toBe(false);
	expect(
		prismicH.isFilled.linkToMedia(
			ctx.mock.value.linkToMedia({ state: "empty" }),
		),
	).toBe(false);
	expect(
		prismicH.isFilled.linkToMedia(
			ctx.mock.value.linkToMedia({ state: "filled" }),
		),
	).toBe(true);
});

it("number", (ctx) => {
	expect(prismicH.isFilled.number(null)).toBe(false);
	expect(prismicH.isFilled.number(undefined)).toBe(false);
	expect(prismicH.isFilled.number(ctx.mock.value.number())).toBe(true);
});

it("rich text", (ctx) => {
	expect(prismicH.isFilled.richText(null)).toBe(false);
	expect(prismicH.isFilled.richText(undefined)).toBe(false);
	expect(prismicH.isFilled.richText([])).toBe(false);
	expect(
		prismicH.isFilled.richText([{ type: "paragraph", text: "", spans: [] }]),
	).toBe(false);
	expect(prismicH.isFilled.richText(ctx.mock.value.richText())).toBe(true);
});

it("select", (ctx) => {
	expect(prismicH.isFilled.select(null)).toBe(false);
	expect(prismicH.isFilled.select(undefined)).toBe(false);
	expect(
		prismicH.isFilled.select(
			ctx.mock.value.select({
				model: ctx.mock.model.select({
					options: ["foo", "bar"],
				}),
			}),
		),
	).toBe(true);
});

it("slice zone", (ctx) => {
	expect(prismicH.isFilled.sliceZone(null)).toBe(false);
	expect(prismicH.isFilled.sliceZone(undefined)).toBe(false);
	expect(prismicH.isFilled.sliceZone([])).toBe(false);
	expect(
		prismicH.isFilled.sliceZone(
			ctx.mock.value.sliceZone({
				model: ctx.mock.model.sliceZone({
					choices: {
						Foo: ctx.mock.model.slice(),
						Bar: ctx.mock.model.slice(),
					},
				}),
			}) as prismicT.SliceZone,
		),
	).toBe(true);
});

it("timestamp", (ctx) => {
	expect(prismicH.isFilled.timestamp(null)).toBe(false);
	expect(prismicH.isFilled.timestamp(undefined)).toBe(false);
	expect(prismicH.isFilled.timestamp(ctx.mock.value.timestamp())).toBe(true);
});

it("title", (ctx) => {
	expect(prismicH.isFilled.title(null)).toBe(false);
	expect(prismicH.isFilled.title(undefined)).toBe(false);
	expect(prismicH.isFilled.title([])).toBe(false);
	expect(
		prismicH.isFilled.title([{ type: "heading1", text: "", spans: [] }]),
	).toBe(false);
	expect(prismicH.isFilled.title(ctx.mock.value.title())).toBe(true);
});
