export { asDate } from "./asDate";
export { asLink } from "./asLink";
export { asText } from "./asText";
export { asHTML } from "./asHTML";
export { asImageSrc } from "./asImageSrc";
export { asImageWidthSrcSet } from "./asImageWidthSrcSet";
export { asImagePixelDensitySrcSet } from "./asImagePixelDensitySrcSet";
export * as isFilled from "./isFilled";

export { documentToLinkField } from "./documentToLinkField";

import { Element } from "@prismicio/richtext";
export { Element };
/**
 * @deprecated Renamed to `Element` (without an "s").
 */
// TODO: Remove in v3.
export const Elements = Element;

export type {
	LinkResolverFunction,
	HTMLFunctionSerializer,
	HTMLMapSerializer,
} from "./types";
