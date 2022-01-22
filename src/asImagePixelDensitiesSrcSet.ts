import { ImageFieldImage } from "@prismicio/types";
import {
	buildPixelDensitySrcSet,
	BuildPixelDensitySrcSetParams,
} from "imgix-url-builder";

import { imageThumbnail as isImageThumbnailFilled } from "./isFilled";

type AsImagePixelDensitySrcSetReturnType<Field extends ImageFieldImage> =
	Field extends ImageFieldImage<"empty"> ? null : string;

export const asImagePixelDensitySrcSet = <Field extends ImageFieldImage>(
	field: Field,
	params: BuildPixelDensitySrcSetParams,
): AsImagePixelDensitySrcSetReturnType<Field> => {
	if (isImageThumbnailFilled(field)) {
		return buildPixelDensitySrcSet(
			field.url,
			params,
		) as AsImagePixelDensitySrcSetReturnType<Field>;
	} else {
		return null as AsImagePixelDensitySrcSetReturnType<Field>;
	}
};
