import { ImageFieldImage } from "@prismicio/types";
import {
	buildPixelDensitySrcSet,
	BuildPixelDensitySrcSetParams,
} from "imgix-url-builder";

import { imageThumbnail as isImageThumbnailFilled } from "./isFilled";

/**
 * The return type of `asImagePixelDensitySrcSet()`.
 */
type AsImagePixelDensitySrcSetReturnType<Field extends ImageFieldImage> =
	Field extends ImageFieldImage<"empty"> ? null : string;

/**
 * Creates a pixel-density-based `srcset` from an Image field with optional
 * image transformations (via Imgix URL parameters).
 *
 * @example
 *
 * ```ts
 * const srcset = asImagePixelDensitySrcSet(document.data.imageField, {
 * 	pixelDensities: [1, 2, 3],
 * 	sat: -100,
 * });
 * // => A pixel-density-based srcset (e.g. `1x`, `2x`) where all images are grayscale.
 * ```
 *
 * @param field - Image field (or one of its responsive views) from which to get
 *   an image URL.
 * @param params - An object of Imgix URL API parameters. The `pixelDensities`
 *   parameter defines the resulting `srcset` widths.
 *
 * @returns A `srcset` attribute value for the Image field with the given Imgix
 *   URL parameters (if given). If the Image field is empty, `null` is returned.
 * @see Imgix URL parameters reference: https://docs.imgix.com/apis/rendering
 */
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
