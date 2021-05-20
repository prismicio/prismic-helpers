import {
	asLink,
	documentToLinkField,
	LinkResolverFunction
} from "@prismicio/helpers";

// An hypothetic document from Prismic...
import { rest as doc } from "../document.mock.json";

const linkResolver: LinkResolverFunction = doc => `/${doc.uid}`;

const docLink = asLink(documentToLinkField(doc), linkResolver);
console.info({ docLink });
