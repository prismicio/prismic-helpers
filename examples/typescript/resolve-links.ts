import { asLink, LinkResolverFunction } from "@prismicio/helpers";

// An hypothetic document from Prismic...
import doc from "../document.mock.json";

const linkResolver: LinkResolverFunction = doc => `/${doc.uid}`;

const relation = asLink(doc.data.relation, linkResolver);
console.log(relation);

const link = asLink(doc.data.link, linkResolver);
console.log(link);

const media = asLink(doc.data.media, linkResolver);
console.log(media);
