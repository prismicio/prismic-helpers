// @ts-expect-error No type defs :(
import RichText from "@prismicio/richtext";
import { RichTextField } from "@prismicio/types";

export function asText(
	richTextField: RichTextField,
	joinString?: string
): string {
	return RichText.asText(richTextField, joinString).trim();
}
