import { asDate } from "@prismicio/helpers";

// An hypothetic document from Prismic...
import { rest as doc } from "../document.mock.json";

const date = asDate(doc.data.date);
console.info({ date: date.toUTCString() });

const timestamp = asDate(doc.data.timestamp);
console.info({ timestamp: timestamp.toUTCString() });
