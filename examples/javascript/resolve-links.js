const { asLink } = require("@prismicio/helpers");

// An hypothetic document from Prismic...
const { rest: doc } = require("../document.mock.json");

const linkResolver = doc => `/${doc.uid}`;

const relation = asLink(doc.data.relation, linkResolver);
console.info({ relation });

const link = asLink(doc.data.link, linkResolver);
console.info({ link });

const media = asLink(doc.data.media, linkResolver);
console.info({ media });
