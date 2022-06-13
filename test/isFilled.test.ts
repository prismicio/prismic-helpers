import { it, expect } from "vitest";
import * as prismicM from "@prismicio/mock";

import * as prismicT from "@prismicio/types";

import * as prismicH from "../src";

it("color", (ctx) => {
	expect(prismicH.isFilled.color(null)).toBe(false);
	expect(prismicH.isFilled.color(undefined)).toBe(false);
	expect(
		prismicH.isFilled.color(prismicM.value.color({ seed: ctx.meta.name })),
	).toBe(true);
});

it("content relationship", (ctx) => {
	expect(prismicH.isFilled.contentRelationship(null)).toBe(false);
	expect(prismicH.isFilled.contentRelationship(undefined)).toBe(false);
	expect(
		prismicH.isFilled.contentRelationship(
			prismicM.value.contentRelationship({
				seed: ctx.meta.name,
				state: "empty",
			}),
		),
	).toBe(false);
	expect(
		prismicH.isFilled.contentRelationship(
			prismicM.value.contentRelationship({
				seed: ctx.meta.name,
				state: "filled",
			}),
		),
	).toBe(true);
});

it("date", (ctx) => {
	expect(prismicH.isFilled.date(null)).toBe(false);
	expect(prismicH.isFilled.date(undefined)).toBe(false);
	expect(
		prismicH.isFilled.date(prismicM.value.date({ seed: ctx.meta.name })),
	).toBe(true);
});

it("embed", (ctx) => {
	expect(prismicH.isFilled.embed(null)).toBe(false);
	expect(prismicH.isFilled.embed(undefined)).toBe(false);
	expect(prismicH.isFilled.embed({})).toBe(false);
	expect(
		prismicH.isFilled.embed(prismicM.value.embed({ seed: ctx.meta.name })),
	).toBe(true);
});

it("geopoint", (ctx) => {
	expect(prismicH.isFilled.geoPoint(null)).toBe(false);
	expect(prismicH.isFilled.geoPoint(undefined)).toBe(false);
	expect(prismicH.isFilled.geoPoint({})).toBe(false);
	expect(
		prismicH.isFilled.geoPoint(
			prismicM.value.geoPoint({ seed: ctx.meta.name }),
		),
	).toBe(true);
});

it("group", (ctx) => {
	expect(prismicH.isFilled.group(null)).toBe(false);
	expect(prismicH.isFilled.group(undefined)).toBe(false);
	expect(prismicH.isFilled.group([])).toBe(false);
	expect(
		prismicH.isFilled.group(
			prismicM.value.group({ seed: ctx.meta.name }) as prismicT.GroupField,
		),
	).toBe(true);
});

it("image", (ctx) => {
	expect(prismicH.isFilled.image(null)).toBe(false);
	expect(prismicH.isFilled.image(undefined)).toBe(false);
	expect(prismicH.isFilled.image({})).toBe(false);
	expect(
		prismicH.isFilled.image(prismicM.value.image({ seed: ctx.meta.name })),
	).toBe(true);
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
		prismicH.isFilled.integrationFields(
			prismicM.value.integrationFields({ seed: ctx.meta.name }),
		),
	).toBe(true);
});

it("key text", (ctx) => {
	expect(prismicH.isFilled.keyText(null)).toBe(false);
	expect(prismicH.isFilled.keyText(undefined)).toBe(false);
	expect(prismicH.isFilled.keyText("")).toBe(false);
	expect(
		prismicH.isFilled.keyText(prismicM.value.keyText({ seed: ctx.meta.name })),
	).toBe(true);
});

it("link", (ctx) => {
	expect(prismicH.isFilled.link(null)).toBe(false);
	expect(prismicH.isFilled.link(undefined)).toBe(false);
	expect(
		prismicH.isFilled.link(
			prismicM.value.link({ seed: ctx.meta.name, state: "empty" }),
		),
	).toBe(false);
	expect(
		prismicH.isFilled.link(
			prismicM.value.link({ seed: ctx.meta.name, state: "filled" }),
		),
	).toBe(true);
});

it("link to media", (ctx) => {
	expect(prismicH.isFilled.linkToMedia(null)).toBe(false);
	expect(prismicH.isFilled.linkToMedia(undefined)).toBe(false);
	expect(
		prismicH.isFilled.linkToMedia(
			prismicM.value.linkToMedia({ seed: ctx.meta.name, state: "empty" }),
		),
	).toBe(false);
	expect(
		prismicH.isFilled.linkToMedia(
			prismicM.value.linkToMedia({ seed: ctx.meta.name, state: "filled" }),
		),
	).toBe(true);
});

it("number", (ctx) => {
	expect(prismicH.isFilled.number(null)).toBe(false);
	expect(prismicH.isFilled.number(undefined)).toBe(false);
	expect(
		prismicH.isFilled.number(prismicM.value.number({ seed: ctx.meta.name })),
	).toBe(true);
});

it("rich text", (ctx) => {
	expect(prismicH.isFilled.richText(null)).toBe(false);
	expect(prismicH.isFilled.richText(undefined)).toBe(false);
	expect(prismicH.isFilled.richText([])).toBe(false);
	expect(
		prismicH.isFilled.richText([{ type: "paragraph", text: "", spans: [] }]),
	).toBe(false);
	expect(
		prismicH.isFilled.richText(
			prismicM.value.richText({ seed: ctx.meta.name }),
		),
	).toBe(true);
});

it("select", (ctx) => {
	expect(prismicH.isFilled.select(null)).toBe(false);
	expect(prismicH.isFilled.select(undefined)).toBe(false);
	expect(
		prismicH.isFilled.select(
			prismicM.value.select({
				seed: ctx.meta.name,
				model: prismicM.model.select({
					seed: ctx.meta.name,
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
			prismicM.value.sliceZone({
				seed: ctx.meta.name,
				model: prismicM.model.sliceZone({
					seed: ctx.meta.name,
					choices: {
						Foo: prismicM.model.slice({ seed: ctx.meta.name }),
						Bar: prismicM.model.slice({ seed: ctx.meta.name }),
					},
				}),
			}) as prismicT.SliceZone,
		),
	).toBe(true);
});

it("timestamp", (ctx) => {
	expect(prismicH.isFilled.timestamp(null)).toBe(false);
	expect(prismicH.isFilled.timestamp(undefined)).toBe(false);
	expect(
		prismicH.isFilled.timestamp(
			prismicM.value.timestamp({ seed: ctx.meta.name }),
		),
	).toBe(true);
});

it("title", (ctx) => {
	expect(prismicH.isFilled.title(null)).toBe(false);
	expect(prismicH.isFilled.title(undefined)).toBe(false);
	expect(prismicH.isFilled.title([])).toBe(false);
	expect(
		prismicH.isFilled.title([{ type: "heading1", text: "", spans: [] }]),
	).toBe(false);
	expect(
		prismicH.isFilled.title(prismicM.value.title({ seed: ctx.meta.name })),
	).toBe(true);
});
