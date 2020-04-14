export default {
  url(link, linkResolver) {
    if (
      link &&
      [link.link_type, link._linkType, link.linkType].some(
        e => e && ["Document", "Link.Document", "Link.document"].includes(e)
      )
    ) {
      return linkResolver ? linkResolver(link) : link.url;
    }
    if (link && link.url) {
      return link.url;
    }
    if (process.env.NODE_ENV !== "production") {
      console.warn('PrismicHelpers/Link.url expects a Prismic "link" object as first argument but none was passed');
    }
    return "";
  }
};
