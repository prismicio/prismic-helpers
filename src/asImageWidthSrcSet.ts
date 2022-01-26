import { ImageFieldImage } from "@prismicio/types";
import { buildWidthSrcSet, BuildWidthSrcSetParams } from "imgix-url-builder";

import { imageThumbnail as isImageThumbnailFilled } from "./isFilled";

/**
 * The return type of `asImageWidthSrcSet()`.
 */
type AsImageWidthSrcSetReturnType<Field extends ImageFieldImage> =
	Field extends ImageFieldImage<"empty"> ? null : string;

/**
 * Creates a width-based `srcset` from an Image field with optional image
 * transformations (via Imgix URL parameters).
 *
 * If the Image field contains responsive views, each responsive view is used as
 * a width in the resulting `srcset`.
 *
 * If a `widths` parameter is not given, `[400, 800, 1600]` will be used by default.
 *
 * @example
 *
 * ```ts
 * const srcset = asImageWidthSrcSet(document.data.imageField, {
 * 	widths: [400, 800, 1600],
 * 	sat: -100,
 * });
 * // => A width-based srcset (e.g. `400w`, `800w`) where all images are grayscale.
 * ```
 *
 * @param field - Image field (or one of its responsive views) from which to get
 *   an image URL.
 * @param params - An object of Imgix URL API parameters. The `widths` parameter
 *   defines the resulting `srcset` widths.
 *
 * @returns A `srcset` attribute value for the Image field with the given Imgix
 *   URL parameters (if given). If the Image field is empty, `null` is returned.
 * @see Imgix URL parameters reference: https://docs.imgix.com/apis/rendering
 */
export const asImageWidthSrcSet = <Field extends ImageFieldImage>(
	field: Field,
	params?: Omit<BuildWidthSrcSetParams, "widths"> &
		Partial<Pick<BuildWidthSrcSetParams, "widths">>,
): AsImageWidthSrcSetReturnType<Field> => {
	if (isImageThumbnailFilled(field)) {
		const {
			url,
			alt: _alt,
			copyright: _copyright,
			dimensions: _dimensions,
			...thumbnails
		} = field;

		if (Object.keys(thumbnails).length) {
			return [
				url,
				...Object.values(thumbnails)
					.filter((thumbnail): thumbnail is ImageFieldImage<"filled"> =>
						isImageThumbnailFilled(thumbnail as ImageFieldImage),
					)
					.map((thumbnail) =>
						buildWidthSrcSet(thumbnail.url, {
							...params,
							widths: [thumbnail.dimensions.width],
						}),
					),
			].join(", ") as AsImageWidthSrcSetReturnType<Field>;
		} else {
			return buildWidthSrcSet(field.url, {
				widths: [400, 800, 1600],
				...params,
			}) as AsImageWidthSrcSetReturnType<Field>;
		}
	} else {
		return null as AsImageWidthSrcSetReturnType<Field>;
	}
};
