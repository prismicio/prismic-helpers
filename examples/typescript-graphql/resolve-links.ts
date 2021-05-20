import { asLink, LinkResolverFunction } from "@prismicio/helpers/dist/graphql";
import { FilledMinimalLinkToDocumentField } from "@prismicio/types/dist/graphql";

// An hypothetic document from Prismic...
import { graphql as doc } from "../document.mock.json";

interface MyLinkToDocumentField extends FilledMinimalLinkToDocumentField {
	_meta: {
		uid: string | null;
	};
}

const linkResolver: LinkResolverFunction<MyLinkToDocumentField> = doc =>
	`/${doc._meta.uid}`;

const relation = asLink(doc.relation, linkResolver);
console.info({ relation });

const link = asLink(doc.link, linkResolver);
console.info({ link });

const image = asLink(doc.image, linkResolver);
console.info({ image });

const file = asLink(doc.file, linkResolver);
console.info({ file });
