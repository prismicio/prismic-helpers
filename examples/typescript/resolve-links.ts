import { asLink, LinkResolverFunction } from "@prismicio/helpers";

// An hypothetic document from Prismic...
import { rest as doc } from "../document.mock.json";

const linkResolver: LinkResolverFunction = doc => `/${doc.uid}`;

const relation = asLink(doc.data.relation, linkResolver);
console.info({ relation });

const link = asLink(doc.data.link, linkResolver);
console.info({ link });

const media = asLink(doc.data.media, linkResolver);
console.info({ media });
