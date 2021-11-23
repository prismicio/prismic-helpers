export { asDate } from "./asDate";
export { asLink } from "./asLink";
export { asText } from "@prismicio/richtext";
export { asHTML } from "./asHTML";

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
