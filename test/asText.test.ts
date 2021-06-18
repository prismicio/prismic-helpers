import { RichTextField } from "@prismicio/types";
import test from "ava";

import { asText } from "../src";

test("returns an empty string when richText field is empty", t => {
	const field = [] as RichTextField;

	t.is(asText(field), "");
});

test("converts a richText field to plain text", t => {
	const field = [
		{
			type: "paragraph",
			text: "More about nesting?",
			spans: []
		},
		{
			type: "paragraph",
			text: "Usually first breeds at about 5 years. Breeds in colonies. Birds often have same mates each year. In courtship, male repeatedly flicks head up and back so that bill points up; may continue for minutes. Members of pair swing bills sideways, clashing them together repeatedly. Nest site is in burrow 3-7' long, or in natural crevice or under rocks. Sometimes one entrance leads to side branches and multiple nests. Both sexes help excavate. Nest in chamber in burrow usually has sparse lining of grass, feathers.",
			spans: [
				{
					start: 30,
					end: 37,
					type: "strong"
				},
				{
					start: 76,
					end: 86,
					type: "em"
				},
				{
					start: 202,
					end: 209,
					type: "hyperlink",
					data: {
						link_type: "Web",
						url: "https://sms-hoy-storybook.netlify.app",
						target: "_blank"
					}
				}
			]
		},
		{
			type: "paragraph",
			text: "Both parents feed nestlings, carrying fish in bill; may feed fish directly to young at first, later drop them on floor of nest. Young leave nest usually 38-44 days after hatching; usually leave at night, flying directly out to sea.",
			spans: []
		},
		{
			type: "paragraph",
			text: "You find them cute? We do too don't worry, even if this website's content if just for presentation purpose.",
			spans: []
		},
		{
			type: "image",
			url: "https://images.prismic.io/200629-sms-hoy/a028b41b-9aaa-44d1-9699-f81291c3f42b_signature5f3cfe4379b08.png?auto=compress,format",
			alt: null,
			copyright: null,
			dimensions: {
				width: 139,
				height: 89
			}
		}
	] as RichTextField;

	t.is(
		asText(field),
		"More about nesting? Usually first breeds at about 5 years. Breeds in colonies. Birds often have same mates each year. In courtship, male repeatedly flicks head up and back so that bill points up; may continue for minutes. Members of pair swing bills sideways, clashing them together repeatedly. Nest site is in burrow 3-7' long, or in natural crevice or under rocks. Sometimes one entrance leads to side branches and multiple nests. Both sexes help excavate. Nest in chamber in burrow usually has sparse lining of grass, feathers. Both parents feed nestlings, carrying fish in bill; may feed fish directly to young at first, later drop them on floor of nest. Young leave nest usually 38-44 days after hatching; usually leave at night, flying directly out to sea. You find them cute? We do too don't worry, even if this website's content if just for presentation purpose."
	);
});
