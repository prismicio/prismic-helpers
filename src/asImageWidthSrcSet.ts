import { ImageFieldImage } from "@prismicio/types";
import { buildWidthSrcSet, BuildWidthSrcSetParams } from "imgix-url-builder";

import { imageThumbnail as isImageThumbnailFilled } from "./isFilled";

type AsImageWidthSrcSetReturnType<Field extends ImageFieldImage> =
	Field extends ImageFieldImage<"empty"> ? null : string;

export const asImageWidthSrcSet = <Field extends ImageFieldImage>(
	field: Field,
	params: BuildWidthSrcSetParams,
): AsImageWidthSrcSetReturnType<Field> => {
	if (isImageThumbnailFilled(field)) {
		return buildWidthSrcSet(
			field.url,
			params,
		) as AsImageWidthSrcSetReturnType<Field>;
	} else {
		return null as AsImageWidthSrcSetReturnType<Field>;
	}
};
