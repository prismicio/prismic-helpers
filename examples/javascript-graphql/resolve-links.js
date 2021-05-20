const { asLink } = require("@prismicio/helpers/dist/graphql");

// An hypothetic document from Prismic...
const { graphql: doc } = require("../document.mock.json");

const linkResolver = doc => `/${doc._meta.uid}`;

const relation = asLink(doc.relation, linkResolver);
console.info({ relation });

const link = asLink(doc.link, linkResolver);
console.info({ link });

const image = asLink(doc.image, linkResolver);
console.info({ image });

const file = asLink(doc.file, linkResolver);
console.info({ file });
