import { asLink } from "@prismicio/helpers";

import doc from "./.document.mock.json";

const linkResolver = doc => `/${doc.uid}`;

const relation = asLink(doc.data.relation, linkResolver);
console.log(relation);

const link = asLink(doc.data.link, linkResolver);
console.log(link);

const media = asLink(doc.data.media, linkResolver);
console.log(media);
