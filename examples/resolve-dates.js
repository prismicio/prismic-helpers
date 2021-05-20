const { asDate } = require("@prismicio/helpers");

const doc = require("./.document.mock.json");

const date = asDate(doc.data.date);
console.log(date.toUTCString());

const timestamp = asDate(doc.data.timestamp);
console.log(timestamp.toUTCString());
