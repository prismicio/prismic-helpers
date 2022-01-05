import { asDate } from "@prismicio/helpers/dist/graphql";

// An hypothetic document from Prismic...
import { graphql as doc } from "../document.mock.json";

const date = asDate(doc.date);
console.info({ date: date.toUTCString() });

const timestamp = asDate(doc.timestamp);
console.info({ timestamp: timestamp.toUTCString() });
