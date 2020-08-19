export const Link = {
  url(link, linkResolver) {
    const doc = link && link.value ? link.value.document : link
    if (
      link &&
      [link.type, link.link_type, link._linkType, link.linkType].some(
        e => e && ["Document", "Link.Document", "Link.document"].includes(e)
      ) && linkResolver && typeof linkResolver === 'function'
    ) {
      const url = linkResolver(doc)
      if (url) {
        return url
      }
    }
    if (doc && doc.url) {
      return doc.url;
    }
    if (process.env.NODE_ENV !== "production") {
      console.warn('PrismicHelpers/Link.url expects a Prismic "link" object as first argument but none was passed');
    }
    return "";
  }
};
