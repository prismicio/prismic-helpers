import {
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
	RelationField,
	RichTextField,
	SelectField,
	SharedSlice,
	Slice,
	SliceZone,
	TimestampField,
	TitleField,
} from "@prismicio/types";

const boolean = <T>(input: T) => {
	return !!input;
};

const notNullish = <T>(input: T) => {
	return input != null;
};

const notEmptyArray = <T>(input: T[]) => {
	return !!input.length;
};

export const isRichTextFilled = (
	field: RichTextField,
): field is RichTextField<"filled"> => {
	if (field.length === 1 && "text" in field[0]) {
		return !!field[0].text;
	} else {
		return !!field.length;
	}
};

export const isTitleFilled = isRichTextFilled as (
	field: TitleField,
) => field is TitleField<"filled">;

export const isImageThumbnailFilled = (
	thumbnail: ImageFieldImage,
): thumbnail is ImageFieldImage<"filled"> => {
	return !!thumbnail.url;
};

export const isImageFilled = <ThumbnailNames extends string>(
	field: ImageField<ThumbnailNames>,
): field is ImageField<ThumbnailNames, "filled"> => {
	return isImageThumbnailFilled(field);
};

export const isLinkFilled = <
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

export const isLinkToMediaFilled = isLinkFilled as (
	field: LinkToMediaField,
) => field is LinkToMediaField<"filled">;

export const isContentRelationshipFilled = isLinkFilled as <
	TypeEnum = string,
	LangEnum = string,
	DataInterface extends Record<
		string,
		AnyRegularField | GroupField | SliceZone
	> = never,
>(
	field: RelationField<TypeEnum, LangEnum, DataInterface>,
) => field is RelationField<TypeEnum, LangEnum, DataInterface, "filled">;

export const isDateFilled = boolean as (
	field: DateField,
) => field is DateField<"filled">;

export const isTimestampFilled = boolean as (
	field: TimestampField,
) => field is TimestampField<"filled">;

export const isColorFilled = boolean as (
	field: ColorField,
) => field is ColorField<"filled">;

export const isNumberFilled = notNullish as (
	field: NumberField,
) => field is NumberField<"filled">;

export const isKeyTextFilled = boolean as (
	field: KeyTextField,
) => field is KeyTextField<"filled">;

export const isSelectFilled = notNullish as <Enum extends string>(
	field: SelectField<Enum>,
) => field is SelectField<Enum, "filled">;

export const isEmbedFilled = <Data extends Record<string, unknown>>(
	field: EmbedField<Data>,
): field is EmbedField<Data, "filled"> => {
	return !!field.embed_url;
};

export const isGeoPointFilled = (
	field: GeoPointField,
): field is GeoPointField<"filled"> => {
	return "longitude" in field;
};

export const isIntegrationFieldsFilled = notNullish as <Blob>(
	field: IntegrationFields<Blob>,
) => field is IntegrationFields<Blob, "filled">;

export const isGroupFilled = notEmptyArray as <
	Fields extends Record<string, AnyRegularField>,
>(
	field: GroupField<Fields>,
) => field is GroupField<Fields, "filled">;

export const isSliceZoneFilled = notEmptyArray as <
	Slices extends Slice | SharedSlice,
>(
	field: SliceZone<Slices>,
) => field is SliceZone<Slices, "filled">;
