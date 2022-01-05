import { Element } from "@prismicio/richtext";
import { HTMLFunctionSerializer } from "../../src";

export const htmlFunctionSerializer: HTMLFunctionSerializer = (
	_type,
	node,
	_text,
	children,
) => {
	switch (node.type) {
		case Element.heading1: {
			return `<h2>${children}</h2>`;
		}
	}

	return null;
};
