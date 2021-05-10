import { FilledRelationField } from "@prismicio/types";

export type LinkResolverFunction = (
	doc: Omit<FilledRelationField, "url">
) => string;
