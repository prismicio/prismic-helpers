import { LinkResolverFunction } from "../../src";

export const linkResolver: LinkResolverFunction = (doc) => `/${doc.uid}`;
