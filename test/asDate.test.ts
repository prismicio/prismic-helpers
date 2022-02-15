import test from "ava";

import { asDate } from "../src";

test("returns null for nullish inputs", (t) => {
	t.is(asDate(null), null);
	t.is(asDate(undefined), null);
});

test("returns null when date field is empty", (t) => {
	const field = null;

	t.is(asDate(field), null);
});

test("returns a date object from a date field", (t) => {
	const field = "2021-05-12";

	t.true(asDate(field) instanceof Date);
});

test("returns null when timestamp field is empty", (t) => {
	const field = null;

	t.is(asDate(field), null);
});

test("returns a date object from a timestamp field", (t) => {
	const field = "2021-05-11T22:00:00+0000";

	t.true(asDate(field) instanceof Date);
});
