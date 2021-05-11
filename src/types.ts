import { FilledLinkToDocumentField } from "@prismicio/types";

export type LinkResolverFunction<ReturnType = string> = (
	doc: Omit<FilledLinkToDocumentField, "url">
) => ReturnType;
