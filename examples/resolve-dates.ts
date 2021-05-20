import { asDate } from "@prismicio/helpers";

import doc from "./.document.mock.json";

const date = asDate(doc.data.date);
console.log(date.toUTCString());

const timestamp = asDate(doc.data.timestamp);
console.log(timestamp.toUTCString());
