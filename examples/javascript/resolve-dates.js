const { asDate } = require("@prismicio/helpers");

// An hypothetic document from Prismic...
const doc = require("../document.mock.json");

const date = asDate(doc.data.date);
console.log(date.toUTCString());

const timestamp = asDate(doc.data.timestamp);
console.log(timestamp.toUTCString());
