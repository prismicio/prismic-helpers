import { RichTextField } from "@prismicio/types";

import enRichTextJSON from "./enRichText.json";
import xssRichTextJSON from "./xssRichText.json";

export const richTextFixture = {
	en: enRichTextJSON as RichTextField,
	xss: xssRichTextJSON as RichTextField,
};
