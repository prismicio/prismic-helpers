import { ImageFieldImage } from "@prismicio/types";
import {
	buildURL,
	buildWidthSrcSet,
	BuildWidthSrcSetParams,
} from "imgix-url-builder";

import { imageThumbnail as isImageThumbnailFilled } from "./isFilled";

/**
 * The return type of `asImageWidthSrcSet()`.
 */
type AsImageWidthSrcSetReturnType<Field extends ImageFieldImage> =
	Field extends ImageFieldImage<"empty">
		? null
		: {
				/**
				 * The Image field's image URL with Imgix URL parameters (if given).
				 */
				src: string;

				/**
				 * A width-based `srcset` attribute value for the Image field's image
				 * with Imgix URL parameters (if given).
				 */
				srcset: string;
		  };

/**
 * Creates a width-based `srcset` from an Image field with optional image
 * transformations (via Imgix URL parameters).
 *
 * If the Image field contains responsive views, each responsive view is used as
 * a width in the resulting `srcset`.
 *
 * If a `widths` parameter is not given, the following widths will be used by
 * default: 640, 750, 828, 1080, 1200, 1920, 2048, 3840.
 *
 * @example
 *
 * ```ts
 * const srcset = asImageWidthSrcSet(document.data.imageField, {
 * 	widths: [400, 800, 1600],
 * 	sat: -100,
 * });
 * // => {
 * //   src:    'https://images.prismic.io/repo/image.png?sat=-100',
 * //   srcset: 'https://images.prismic.io/repo/image.png?sat=-100&width=400 400w, ' +
 * //           'https://images.prismic.io/repo/image.png?sat=-100&width=800 800w,' +
 * //           'https://images.prismic.io/repo/image.png?sat=-100&width=1600 1600w'
 * // }
 * ```
 *
 * @param field - Image field (or one of its responsive views) from which to get
 *   an image URL.
 * @param params - An object of Imgix URL API parameters. The `widths` parameter
 *   defines the resulting `srcset` widths.
 *
 * @returns A `srcset` attribute value for the Image field with Imgix URL
 *   parameters (if given). If the Image field is empty, `null` is returned.
 * @see Imgix URL parameters reference: https://docs.imgix.com/apis/rendering
 */
export const asImageWidthSrcSet = <Field extends ImageFieldImage>(
	field: Field,
	params: Omit<BuildWidthSrcSetParams, "widths"> &
		Partial<Pick<BuildWidthSrcSetParams, "widths">> = {},
): AsImageWidthSrcSetReturnType<Field> => {
	if (isImageThumbnailFilled(field)) {
		const {
			widths = [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
			...urlParams
		} = params;
		const {
			url,
			dimensions,
			alt: _alt,
			copyright: _copyright,
			...responsiveViews
		} = field;

		// The Prismic Rest API will always return thumbnail values if
		// the base size is filled.
		const responsiveViewObjects: ImageFieldImage<"filled">[] =
			Object.values(responsiveViews);

		return {
			src: buildURL(url, urlParams),
			srcset: responsiveViewObjects.length
				? [
						buildWidthSrcSet(url, {
							...urlParams,
							widths: [dimensions.width],
						}),
						...responsiveViewObjects.map((thumbnail) => {
							return buildWidthSrcSet(thumbnail.url, {
								...urlParams,
								widths: [thumbnail.dimensions.width],
							});
						}),
				  ].join(", ")
				: buildWidthSrcSet(field.url, {
						...urlParams,
						widths,
				  }),
		} as AsImageWidthSrcSetReturnType<Field>;
	} else {
		return null as AsImageWidthSrcSetReturnType<Field>;
	}
};
