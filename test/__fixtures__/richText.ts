import { RichTextField } from "@prismicio/types";

import enRichTextJSON from "./enRichText.json";
import xssRichTextJSON from "./xssRichText.json";
import noLinkTargetRichTextJSON from "./noLinkTargetRichText.json";

export const richTextFixture = {
	en: enRichTextJSON as RichTextField,
	xss: xssRichTextJSON as RichTextField,
	noLinkTarget: noLinkTargetRichTextJSON as RichTextField,
};
