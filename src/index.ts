export { asDate } from "./asDate";
export { asLink } from "./asLink";
export { asText } from "./asText";
export { asHTML } from "./asHTML";
export {
	isColorFilled,
	isContentRelationshipFilled,
	isDateFilled,
	isEmbedFilled,
	isGeoPointFilled,
	isGroupFilled,
	isImageFilled,
	isImageThumbnailFilled,
	isIntegrationFieldsFilled,
	isKeyTextFilled,
	isLinkFilled,
	isLinkToMediaFilled,
	isNumberFilled,
	isRichTextFilled,
	isSelectFilled,
	isSliceZoneFilled,
	isTimestampFilled,
	isTitleFilled,
} from "./isFilled";

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
