import { ImageFieldImage } from "@prismicio/types";
import {
	buildPixelDensitySrcSet,
	BuildPixelDensitySrcSetParams,
	buildURL,
} from "imgix-url-builder";

import { imageThumbnail as isImageThumbnailFilled } from "./isFilled";

/**
 * The return type of `asImagePixelDensitySrcSet()`.
 */
type AsImagePixelDensitySrcSetReturnType<Field extends ImageFieldImage> =
	Field extends ImageFieldImage<"empty">
		? null
		: {
				/**
				 * The Image field's image URL with Imgix URL parameters (if given).
				 */
				src: string;

				/**
				 * A pixel-densitye-based `srcset` attribute value for the Image field's
				 * image with Imgix URL parameters (if given).
				 */
				srcset: string;
		  };

/**
 * Creates a pixel-density-based `srcset` from an Image field with optional
 * image transformations (via Imgix URL parameters).
 *
 * If a `pixelDensities` parameter is not given, the following pixel densities
 * will be used by default: 1, 2, 3.
 *
 * @example
 *
 * ```ts
 * const srcset = asImagePixelDensitySrcSet(document.data.imageField, {
 * 	pixelDensities: [1, 2, 3],
 * 	sat: -100,
 * });
 * // => {
 * //   src:    'https://images.prismic.io/repo/image.png?sat=-100',
 * //   srcset: 'https://images.prismic.io/repo/image.png?sat=-100&dpr=1 1x, ' +
 * //           'https://images.prismic.io/repo/image.png?sat=-100&dpr=2 2x,' +
 * //           'https://images.prismic.io/repo/image.png?sat=-100&dpr=3 3x'
 * // }
 * ```
 *
 * @param field - Image field (or one of its responsive views) from which to get
 *   an image URL.
 * @param params - An object of Imgix URL API parameters. The `pixelDensities`
 *   parameter defines the resulting `srcset` widths.
 *
 * @returns A `srcset` attribute value for the Image field with Imgix URL
 *   parameters (if given). If the Image field is empty, `null` is returned.
 * @see Imgix URL parameters reference: https://docs.imgix.com/apis/rendering
 */
export const asImagePixelDensitySrcSet = <Field extends ImageFieldImage>(
	field: Field,
	params: Omit<BuildPixelDensitySrcSetParams, "pixelDensities"> &
		Partial<Pick<BuildPixelDensitySrcSetParams, "pixelDensities">> = {},
): AsImagePixelDensitySrcSetReturnType<Field> => {
	if (isImageThumbnailFilled(field)) {
		const { pixelDensities = [1, 2, 3], ...imgixParams } = params;

		return {
			src: buildURL(field.url, imgixParams),
			srcset: buildPixelDensitySrcSet(field.url, {
				...imgixParams,
				pixelDensities,
			}),
		} as AsImagePixelDensitySrcSetReturnType<Field>;
	} else {
		return null as AsImagePixelDensitySrcSetReturnType<Field>;
	}
};
