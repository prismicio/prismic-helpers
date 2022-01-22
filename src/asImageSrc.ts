import { ImageFieldImage } from "@prismicio/types";
import { buildURL, ImgixURLParams } from "imgix-url-builder";

import { imageThumbnail as isImageThumbnailFilled } from "./isFilled";

type AsImageSrcReturnType<Field extends ImageFieldImage> =
	Field extends ImageFieldImage<"empty"> ? null : string;

export const asImageSrc = <Field extends ImageFieldImage>(
	field: Field,
	params: ImgixURLParams = {},
): AsImageSrcReturnType<Field> => {
	if (isImageThumbnailFilled(field)) {
		return buildURL(field.url, params) as AsImageSrcReturnType<Field>;
	} else {
		return null as AsImageSrcReturnType<Field>;
	}
};
