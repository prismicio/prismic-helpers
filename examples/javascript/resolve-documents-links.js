const { asLink, documentToLinkField } = require("@prismicio/helpers");

// An hypothetic document from Prismic...
const doc = require("../document.mock.json");

const linkResolver = doc => `/${doc.uid}`;

const docLink = asLink(documentToLinkField(doc), linkResolver);
console.log(docLink);
