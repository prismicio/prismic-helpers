import { HTMLMapSerializer } from "../../src";

export const htmlMapSerializer: HTMLMapSerializer = {
	heading1: ({ children }) => `<h2>${children.join("")}</h2>`,
};
