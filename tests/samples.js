const linkV1Internal = {
  "id": "XvSV4hEAACIARkK6",
  "type": "page",
  "tags": [],
  "slug": "my-call-to-action",
  "lang": "en-us",
  "uid": "my-page",
  "link_type": "Document",
  "isBroken": false
}

const linkV1External = {
  "link_type": "Web",
  "url": "https://prismic.io"
}

const linkV2Internal = {
  "type": "Link.document",
  "value": {
    "document": {
      "id": "XvZQ_RBADCEAZzSG",
      "type": "pages",
      "tags": [
        "test"
      ],
      "lang": "en-us",
      "slug": "test-child-page",
      "uid": "test-child-page"
    },
    "isBroken": false
  }
}

const linkV2External = {
  "type": "Link.document",
  "value": {
    "document": {
      "link_type": "Web",
      "url": "https://prismic.io"
    },
    "isBroken": false
  }
}

module.exports = {
  linkV1External,
  linkV1Internal,

  linkV2External,
  linkV2Internal
}