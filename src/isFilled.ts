import type {
	AnyOEmbed,
	AnyRegularField,
	ColorField,
	DateField,
	EmbedField,
	GeoPointField,
	GroupField,
	ImageField,
	ImageFieldImage,
	IntegrationFields,
	KeyTextField,
	LinkField,
	LinkToMediaField,
	NumberField,
	OEmbedExtra,
	RelationField,
	RichTextField,
	SelectField,
	SharedSlice,
	Slice,
	SliceZone,
	TimestampField,
	TitleField,
} from "@prismicio/types";

/**
 * Determines if a value is not nullish (i.e. not `null` or `undefined`). This
 * is used to check if nullable field values are filled.
 *
 * @param input - The value to check.
 *
 * @returns `true` if `input` is not nullish, `false` otherwise.
 */
const isNonNullish = <T>(input: T): input is NonNullable<T> => {
	return input != null;
};

/**
 * Determines if an array is not empty. This is used to check if array-based
 * fields are filled.
 *
 * @param input - The array to check.
 *
 * @returns `true` if `input` has at least one element, `false` otherwise.
 */
const isNonEmptyArray = <T>(input: T[]): input is [T, ...T[]] => {
	return !!input.length;
};

/**
 * Determines if a Rich Text field is filled.
 *
 * @param field - Rich Text field to check.
 *
 * @returns `true` if `field` is filled, `false` otherwise.
 */
export const richText = (
	field: RichTextField,
): field is RichTextField<"filled"> => {
	if (field.length === 1 && "text" in field[0]) {
		return !!field[0].text;
	} else {
		return !!field.length;
	}
};

/**
 * Determines if a Title field is filled.
 *
 * @param field - Title field to check.
 *
 * @returns `true` if `field` is filled, `false` otherwise.
 */
export const title = richText as (
	field: TitleField,
) => field is TitleField<"filled">;

/**
 * Determines if an Image thumbnail is filled.
 *
 * @param field - Image thumbnail to check.
 *
 * @returns `true` if `field` is filled, `false` otherwise.
 */
export const imageThumbnail = (
	thumbnail: ImageFieldImage,
): thumbnail is ImageFieldImage<"filled"> => {
	return !!thumbnail.url;
};

/**
 * Determines if an Image field is filled.
 *
 * @param field - Image field to check.
 *
 * @returns `true` if `field` is filled, `false` otherwise.
 */
export const image = <ThumbnailNames extends string | null>(
	field: ImageField<ThumbnailNames>,
): field is ImageField<ThumbnailNames, "filled"> => {
	return imageThumbnail(field);
};

/**
 * Determines if a Link field is filled.
 *
 * @param field - Link field to check.
 *
 * @returns `true` if `field` is filled, `false` otherwise.
 */
export const link = <
	TypeEnum = string,
	LangEnum = string,
	DataInterface extends Record<
		string,
		AnyRegularField | GroupField | SliceZone
	> = never,
>(
	field: LinkField<TypeEnum, LangEnum, DataInterface>,
): field is LinkField<TypeEnum, LangEnum, DataInterface, "filled"> => {
	return "id" in field || "url" in field;
};

/**
 * Determines if a Link to Media field is filled.
 *
 * @param field - Link to Media field to check.
 *
 * @returns `true` if `field` is filled, `false` otherwise.
 */
export const linkToMedia = link as (
	field: LinkToMediaField,
) => field is LinkToMediaField<"filled">;

/**
 * Determines if a Content Relationship field is filled.
 *
 * @param field - Content Relationship field to check.
 *
 * @returns `true` if `field` is filled, `false` otherwise.
 */
export const contentRelationship = link as <
	TypeEnum = string,
	LangEnum = string,
	DataInterface extends Record<
		string,
		AnyRegularField | GroupField | SliceZone
	> = never,
>(
	field: RelationField<TypeEnum, LangEnum, DataInterface>,
) => field is RelationField<TypeEnum, LangEnum, DataInterface, "filled">;

/**
 * Determines if a Date field is filled.
 *
 * @param field - Date field to check.
 *
 * @returns `true` if `field` is filled, `false` otherwise.
 */
export const date = isNonNullish as (
	field: DateField,
) => field is DateField<"filled">;

/**
 * Determines if a Timestamp field is filled.
 *
 * @param field - Timestamp field to check.
 *
 * @returns `true` if `field` is filled, `false` otherwise.
 */
export const timestamp = isNonNullish as (
	field: TimestampField,
) => field is TimestampField<"filled">;

/**
 * Determines if a Color field is filled.
 *
 * @param field - Color field to check.
 *
 * @returns `true` if `field` is filled, `false` otherwise.
 */
export const color = isNonNullish as (
	field: ColorField,
) => field is ColorField<"filled">;

/**
 * Determines if a Number field is filled.
 *
 * @param field - Number field to check.
 *
 * @returns `true` if `field` is filled, `false` otherwise.
 */
export const number = isNonNullish as (
	field: NumberField,
) => field is NumberField<"filled">;

/**
 * Determines if a Key Text field is filled.
 *
 * @param field - Key Text field to check.
 *
 * @returns `true` if `field` is filled, `false` otherwise.
 */
export const keyText = isNonNullish as (
	field: KeyTextField,
) => field is KeyTextField<"filled">;

/**
 * Determines if a Select field is filled.
 *
 * @param field - Select field to check.
 *
 * @returns `true` if `field` is filled, `false` otherwise.
 */
export const select = isNonNullish as <Enum extends string>(
	field: SelectField<Enum>,
) => field is SelectField<Enum, "filled">;

/**
 * Determines if an Embed field is filled.
 *
 * @param field - Embed field to check.
 *
 * @returns `true` if `field` is filled, `false` otherwise.
 */
export const embed = <Data extends AnyOEmbed = AnyOEmbed & OEmbedExtra>(
	field: EmbedField<Data>,
): field is EmbedField<Data, "filled"> => {
	return !!field.embed_url;
};

/**
 * Determines if a GeoPoint field is filled.
 *
 * @param field - GeoPoint field to check.
 *
 * @returns `true` if `field` is filled, `false` otherwise.
 */
export const geoPoint = (
	field: GeoPointField,
): field is GeoPointField<"filled"> => {
	return "longitude" in field;
};

/**
 * Determines if an Integration Fields field is filled.
 *
 * @param field - Integration Fields field to check.
 *
 * @returns `true` if `field` is filled, `false` otherwise.
 */
export const integrationFields = isNonNullish as <Blob>(
	field: IntegrationFields<Blob>,
) => field is IntegrationFields<Blob, "filled">;

/**
 * Determines if a Group has at least one item.
 *
 * @param group - Group to check.
 *
 * @returns `true` if `group` contains at least one item, `false` otherwise.
 */
export const group = isNonEmptyArray as <
	Fields extends Record<string, AnyRegularField>,
>(
	group: GroupField<Fields>,
) => group is GroupField<Fields, "filled">;

/**
 * Determines if a Slice Zone has at least one Slice.
 *
 * @param slices - Slice Zone to check.
 *
 * @returns `true` if `slices` contains at least one Slice, `false` otherwise.
 */
export const sliceZone = isNonEmptyArray as <
	Slices extends Slice | SharedSlice,
>(
	slices: SliceZone<Slices>,
) => slices is SliceZone<Slices, "filled">;
