# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.3.7](https://github.com/prismicio/prismic-helpers/compare/v2.3.6...v2.3.7) (2022-12-19)


### Chore

* **deps:** maintain dependencies ([f0fe858](https://github.com/prismicio/prismic-helpers/commit/f0fe858fdc02c6dbc7170b379c06e1f1a641b556))

### [2.3.6](https://github.com/prismicio/prismic-helpers/compare/v2.3.5...v2.3.6) (2022-11-16)


### Bug Fixes

* allow Content Relationship field's `data` property overrides when using `isFilled` helpers ([#62](https://github.com/prismicio/prismic-helpers/issues/62)) ([cc75ce5](https://github.com/prismicio/prismic-helpers/commit/cc75ce5c43f4cd302beec60308d66033c544b9c4))


### Chore

* **deps:** update all dependencies ([#61](https://github.com/prismicio/prismic-helpers/issues/61)) ([471d2f5](https://github.com/prismicio/prismic-helpers/commit/471d2f5275c3193a4567b560113f8f85d28f59ae))

### [2.3.5](https://github.com/prismicio/prismic-helpers/compare/v2.3.4...v2.3.5) (2022-09-20)


### Bug Fixes

* simplify `isFilled.embed()` for better TypeScript compatibility ([#57](https://github.com/prismicio/prismic-helpers/issues/57)) ([55b093c](https://github.com/prismicio/prismic-helpers/commit/55b093c935cfd74fe5ae206004bebb1d81e4adfa))

### [2.3.4](https://github.com/prismicio/prismic-helpers/compare/v2.3.3...v2.3.4) (2022-09-15)


### Bug Fixes

* omit `target` attribute on links without a target ([#59](https://github.com/prismicio/prismic-helpers/issues/59)) ([9b2dddd](https://github.com/prismicio/prismic-helpers/commit/9b2dddd4107c4f9b9a0bc7178437ca3232cc8827))


### Chore

* **deps:** upgrade dependencies ([#60](https://github.com/prismicio/prismic-helpers/issues/60)) ([32f849c](https://github.com/prismicio/prismic-helpers/commit/32f849ccc8e87377dc9e17096899d9d1211aea36))

### [2.3.3](https://github.com/prismicio/prismic-helpers/compare/v2.3.2...v2.3.3) (2022-08-05)


### Bug Fixes

* resolve invalid compiled TypeScript types ([#56](https://github.com/prismicio/prismic-helpers/issues/56)) ([6122cb7](https://github.com/prismicio/prismic-helpers/commit/6122cb769e6f8c3f3b52d827f527257638ed55df))

### [2.3.2](https://github.com/prismicio/prismic-helpers/compare/v2.3.1...v2.3.2) (2022-07-13)


### Chore

* **deps:** upgrade dependencies ([#53](https://github.com/prismicio/prismic-helpers/issues/53)) ([ecaa893](https://github.com/prismicio/prismic-helpers/commit/ecaa89315f2dd4f231f887a4d594c7ec511d00d2))

### [2.3.1](https://github.com/prismicio/prismic-helpers/compare/v2.3.0...v2.3.1) (2022-06-09)


### Bug Fixes

* support partial document in `asLink()` and `documentToLinkField()` ([#51](https://github.com/prismicio/prismic-helpers/issues/51)) ([e3a3493](https://github.com/prismicio/prismic-helpers/commit/e3a3493adcd77356e75e09c06a445f0a295b38e8))

## [2.3.0](https://github.com/prismicio/prismic-helpers/compare/v2.2.1...v2.3.0) (2022-04-15)


### Features

* opt-in automatic responsive view support for `asImageWidthSrcSet()` ([#47](https://github.com/prismicio/prismic-helpers/issues/47)) ([2a1ad82](https://github.com/prismicio/prismic-helpers/commit/2a1ad829851bc294e3ffc5ffe868bf091a9ee99d))


### Bug Fixes

* include `url` property when using `asLink()` with a document ([#48](https://github.com/prismicio/prismic-helpers/issues/48)) ([f437962](https://github.com/prismicio/prismic-helpers/commit/f4379627c080b88bfec8b08e93924496baeac453))


### Chore

* **deps:** upgrade dependencies ([2c2360e](https://github.com/prismicio/prismic-helpers/commit/2c2360e998d278569074dcec454e1dc802326c3a))

### [2.2.1](https://github.com/prismicio/prismic-helpers/compare/v2.2.0...v2.2.1) (2022-03-18)


### Bug Fixes

* `isFilled.image()` parameter type ([#46](https://github.com/prismicio/prismic-helpers/issues/46)) ([8d99482](https://github.com/prismicio/prismic-helpers/commit/8d994825ecdddd0a412d0bb6556181617274fce8))


### Chore

* **deps:** maintain dependencies ([f3c18c5](https://github.com/prismicio/prismic-helpers/commit/f3c18c5679e897a7a1362206aaac82d0a3f4b218))
* **deps:** maintain dependencies ([1305d40](https://github.com/prismicio/prismic-helpers/commit/1305d4009bb18add6c6c88bf0dd95e81c140c51d))
* update template ([48c9b7a](https://github.com/prismicio/prismic-helpers/commit/48c9b7ab3522127998e2976bc381d866b1991983))

## [2.2.0](https://github.com/prismicio/prismic-helpers/compare/v2.1.1...v2.2.0) (2022-02-25)


### Features

* narrow return types when field is known ([#43](https://github.com/prismicio/prismic-helpers/issues/43)) ([40f41f9](https://github.com/prismicio/prismic-helpers/commit/40f41f98bcb17ce4bc3c582e52171834dcc75b2b))
* support nullish inputs for `isFilled` helpers ([#44](https://github.com/prismicio/prismic-helpers/issues/44)) ([6c5597b](https://github.com/prismicio/prismic-helpers/commit/6c5597b88db032a383fc52c6ea73304969311e42))


### Chore

* **deps:** update dependencies ([ebe24c3](https://github.com/prismicio/prismic-helpers/commit/ebe24c344adbbc71404eb6efd49d94556126bb4b))
* update license ([6026a86](https://github.com/prismicio/prismic-helpers/commit/6026a86316e1e80fd62a1b8ede9805a407c2bc22))

### [2.1.1](https://github.com/prismicio/prismic-helpers/compare/v2.1.0...v2.1.1) (2022-02-04)


### Bug Fixes

* `isFilled.image` thumbnail names should extend `string | null`, fixes [#41](https://github.com/prismicio/prismic-helpers/issues/41) ([659c212](https://github.com/prismicio/prismic-helpers/commit/659c212feb07a7abdf672da0976adec6dfaf9e8b))


### Chore

* **deps:** maintain dependencies ([ea814ca](https://github.com/prismicio/prismic-helpers/commit/ea814ca0c23917a0ab8a454c6bd3577708325f54))

## [2.1.0](https://github.com/prismicio/prismic-helpers/compare/v2.0.1...v2.1.0) (2022-02-01)


### Features

* add `asImageSrc()`, `asImageWidthSrcSet()`, `asImagePixelDensitySrcSet()` ([#38](https://github.com/prismicio/prismic-helpers/issues/38)) ([2b4984a](https://github.com/prismicio/prismic-helpers/commit/2b4984aaccdaba564cd57f875067626482c7660b))


### Chore

* revert to AVA 3 ([cccd34f](https://github.com/prismicio/prismic-helpers/commit/cccd34fced3811c77bcce7db20f4aa9a048f2148))

### [2.0.1](https://github.com/prismicio/prismic-helpers/compare/v2.0.0...v2.0.1) (2022-01-28)


### Chore

* add Size Limit repo support ([da22d5b](https://github.com/prismicio/prismic-helpers/commit/da22d5b4444fcc0cfc3d5a90777c88b6006837ad))
* **deps:** update `@prismicio/richtext` ([4c97a27](https://github.com/prismicio/prismic-helpers/commit/4c97a27b34b34ea73cd7989d526c9273d7f76370))
* **deps:** update dependencies ([ffbf66e](https://github.com/prismicio/prismic-helpers/commit/ffbf66e8711cd7d016a9982a715829b390bd152f))
* fix Size Limit integration ([660bd1e](https://github.com/prismicio/prismic-helpers/commit/660bd1ec1528146e55fd8f0bb2a19b577267a14d))
* support React Native's Metro bundler ([51151f9](https://github.com/prismicio/prismic-helpers/commit/51151f9929739b7fbfb09bf5e14704734d94a416))

## [2.0.0](https://github.com/prismicio/prismic-helpers/compare/v1.0.3...v2.0.0) (2022-01-05)

## [2.0.0-beta.8](https://github.com/prismicio/prismic-helpers/compare/v2.0.0-beta.7...v2.0.0-beta.8) (2021-12-16)


### Features

* add `isFilled` helpers ([#34](https://github.com/prismicio/prismic-helpers/issues/34)) ([fe086d2](https://github.com/prismicio/prismic-helpers/commit/fe086d25d82b88794b1f963974145a279623c902))


### Documentation

* update docs link [skip ci] ([662a077](https://github.com/prismicio/prismic-helpers/commit/662a0773e2f2268a8e676f496ba9ea7eacd1fad1))

## [2.0.0-beta.7](https://github.com/prismicio/prismic-helpers/compare/v2.0.0-beta.6...v2.0.0-beta.7) (2021-12-06)


### Features

* allow nullish field in `asHTML` and `asText` ([4c7c8bc](https://github.com/prismicio/prismic-helpers/commit/4c7c8bc95898dd6195b64f9774c6ee34f6917a41))


### Bug Fixes

* support documents without `slugs` in `documentToLinkField` ([a60f4be](https://github.com/prismicio/prismic-helpers/commit/a60f4be34acc20c9ec3a0111f02f8d9d1f874cbb))

## [2.0.0-beta.6](https://github.com/prismicio/prismic-helpers/compare/v2.0.0-beta.5...v2.0.0-beta.6) (2021-12-03)


### Chore

* **deps:** maintain dependencies ([dc71bc6](https://github.com/prismicio/prismic-helpers/commit/dc71bc693dfbf2fc093b07801909b1df9c7b6d27))

## [2.0.0-beta.5](https://github.com/prismicio/prismic-helpers/compare/v2.0.0-beta.4...v2.0.0-beta.5) (2021-11-29)


### Bug Fixes

* support nullish `slugs` property when passing a document to `asLink` ([85eedea](https://github.com/prismicio/prismic-helpers/commit/85eedead6ed988fa29c2feea39148009a4562cf6))

## [2.0.0-beta.4](https://github.com/prismicio/prismic-helpers/compare/v2.0.0-beta.3...v2.0.0-beta.4) (2021-11-29)


### Features

* export Elements as a deprecated alias for Element ([b6fbe0c](https://github.com/prismicio/prismic-helpers/commit/b6fbe0c9ebc245c37d6e271f72dacd39b2ca3f85))

## [2.0.0-beta.3](https://github.com/prismicio/prismic-helpers/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2021-11-10)


### Bug Fixes

* prioritize Link Resolver over Route Resolver ([#30](https://github.com/prismicio/prismic-helpers/issues/30)) ([acc4a17](https://github.com/prismicio/prismic-helpers/commit/acc4a17fd4e45b1e188b4464548e33e5c61932d3))

## [2.0.0-beta.2](https://github.com/prismicio/prismic-helpers/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2021-11-05)


### Features

* pass HTML serializer children as string ([c3634f9](https://github.com/prismicio/prismic-helpers/commit/c3634f9c444079d8f9892e7ec1d02e18bfe73c9d))


### Refactor

* use runtime-generated map serializer ([ff15253](https://github.com/prismicio/prismic-helpers/commit/ff15253cce791306ae03a6001f5bd03d1448a09e))


### Documentation

* update TSDoc for new HTML serializer types ([05bd482](https://github.com/prismicio/prismic-helpers/commit/05bd482865ae8ef21d6384a2fb9e40629d0e0d57))


### Chore

* **deps:** maintain dependencies ([2a8037f](https://github.com/prismicio/prismic-helpers/commit/2a8037f78aa5db74bfc9712516b2cb77f5062f32))

## [2.0.0-beta.1](https://github.com/prismicio/prismic-helpers/compare/v2.0.0-beta.0...v2.0.0-beta.1) (2021-10-12)


### Bug Fixes

* type issue with empty links in asLink ([542b4d9](https://github.com/prismicio/prismic-helpers/commit/542b4d9e7ad4f6654c7249598fee37a7a3392140))


### Chore

* **deps:** update dependencies ([6165b41](https://github.com/prismicio/prismic-helpers/commit/6165b41f80827212f92397e41b290a0d40343921))
* mark package as side effect free ([9636f9d](https://github.com/prismicio/prismic-helpers/commit/9636f9dab96ac32b2cb8c888c36c317bbf800de1))


### Refactor

* use currying to build HTML serializer ([b7ba08a](https://github.com/prismicio/prismic-helpers/commit/b7ba08af7de99e0c1296dfaf23d8c23f008fceb3))

## [2.0.0-beta.0](https://github.com/prismicio/prismic-helpers/compare/v2.0.0-alpha.9...v2.0.0-beta.0) (2021-09-29)


### Chore

* **deps:** maintain dependencies ([eda08bb](https://github.com/prismicio/prismic-helpers/commit/eda08bbe0fae275bef5cef02ad2616e8aa3fe13e))

## [2.0.0-alpha.9](https://github.com/prismicio/prismic-helpers/compare/v2.0.0-alpha.8...v2.0.0-alpha.9) (2021-09-27)


### Features

* remove documentAsLink ([5cdee16](https://github.com/prismicio/prismic-helpers/commit/5cdee1631863144c7ad67553cf171921c5569d3f))
* update asLink to handle documents ([ae14694](https://github.com/prismicio/prismic-helpers/commit/ae14694229a73a0cc46620bc98e37eac26e6f44b))


### Chore

* tag graphql functions as experimental to help with potential breaking changes ([b0432a4](https://github.com/prismicio/prismic-helpers/commit/b0432a49393e5a43d54bc3b013b7b5301cdae33d))
* update template config ([e05d381](https://github.com/prismicio/prismic-helpers/commit/e05d3819fb9efc4d50912c3fff595f80e56f6c57))

## [2.0.0-alpha.8](https://github.com/prismicio/prismic-helpers/compare/v2.0.0-alpha.7...v2.0.0-alpha.8) (2021-09-14)


### Chore

* update dependencies ([1f7f24a](https://github.com/prismicio/prismic-helpers/commit/1f7f24a2321d12303ab2dfb795574b03ac7f249d))

## [2.0.0-alpha.7](https://github.com/prismicio/prismic-helpers/compare/v2.0.0-alpha.6...v2.0.0-alpha.7) (2021-08-12)


### Features

* allow explicit null for linkResolver & HTML serializer ([275bfca](https://github.com/prismicio/prismic-helpers/commit/275bfca7d527c4d8266394952d2cc0ebdfadd853))

## [2.0.0-alpha.6](https://github.com/prismicio/prismic-helpers/compare/v2.0.0-alpha.5...v2.0.0-alpha.6) (2021-08-11)


### Features

* export serializer elements types for convenience ([715f11d](https://github.com/prismicio/prismic-helpers/commit/715f11db3776a189fcc9f59e835f08900e3059be))


### Bug Fixes

* prevent XSS on image tag serialization ([c0e6d6d](https://github.com/prismicio/prismic-helpers/commit/c0e6d6d6d8d36747de381cc6acd3c7fec6d839d2))


### Chore

* update pull request template ([8330ddd](https://github.com/prismicio/prismic-helpers/commit/8330ddd31db54760bf9d92e2c597c63a8a3e32ba))

## [2.0.0-alpha.5](https://github.com/prismicio/prismic-helpers/compare/v2.0.0-alpha.4...v2.0.0-alpha.5) (2021-07-07)


### Features

* add documentAsLink function, closes [#20](https://github.com/prismicio/prismic-helpers/issues/20) ([befcd75](https://github.com/prismicio/prismic-helpers/commit/befcd75404a743e37eb1a54ab32a3ef2c7dbc538))
* handle link on image ([1a2fb56](https://github.com/prismicio/prismic-helpers/commit/1a2fb56d48749010bcab1fd968476fd142165f22))


### Bug Fixes

* also export types for graphql export ([124f837](https://github.com/prismicio/prismic-helpers/commit/124f8376f3be3b1d85ecbf8a555ce034e133c369))
* escape external links to prevent xss ([0cb7c43](https://github.com/prismicio/prismic-helpers/commit/0cb7c43b42d1f3ab42251441f6831a0d35c62dcb))


### Documentation

* document asHTML new helper ([d40d3c6](https://github.com/prismicio/prismic-helpers/commit/d40d3c6f888091a7d1ed594417ff6e66f7073207))


### Chore

* **deps:** examples dependencies ([76e6b41](https://github.com/prismicio/prismic-helpers/commit/76e6b41e0c5e36baf7a12a4ed1a08477a3dbb103))
* ignore examples lock files ([699febc](https://github.com/prismicio/prismic-helpers/commit/699febc08fd5699e3d62d723ad517aa962e79294))

## [2.0.0-alpha.4](https://github.com/prismicio/prismic-helpers/compare/v2.0.0-alpha.3...v2.0.0-alpha.4) (2021-07-03)


### Chore

* update dependencies ([49349ac](https://github.com/prismicio/prismic-helpers/commit/49349ac583c04130d43cfc7026a2a6588f2cff0f))

## [2.0.0-alpha.3](https://github.com/prismicio/prismic-helpers/compare/v2.0.0-alpha.2...v2.0.0-alpha.3) (2021-07-03)


### Bug Fixes

* optional Link Resolver for asLink and asHTML ([#22](https://github.com/prismicio/prismic-helpers/issues/22)) ([b007ff1](https://github.com/prismicio/prismic-helpers/commit/b007ff1dbadc469aa0854794bcc58297946b8bda)), closes [#21](https://github.com/prismicio/prismic-helpers/issues/21)
* retain data field in documentToLinkField ([#23](https://github.com/prismicio/prismic-helpers/issues/23)) ([81b0706](https://github.com/prismicio/prismic-helpers/commit/81b07069e3f260f03f84abd6d33aa52ff97e7b29)), closes [#19](https://github.com/prismicio/prismic-helpers/issues/19)

## [2.0.0-alpha.2](https://github.com/prismicio/prismic-helpers/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2021-07-01)


### Chore

* update dependencies ([8ed3e88](https://github.com/prismicio/prismic-helpers/commit/8ed3e88deacc48db2cec1a7038e4de598de4e259))

## [2.0.0-alpha.1](https://github.com/prismicio/prismic-helpers/compare/v2.0.0-alpha.0...v2.0.0-alpha.1) (2021-06-29)


### Bug Fixes

* update dependencies and @prismicio/richtext types ([f30aa18](https://github.com/prismicio/prismic-helpers/commit/f30aa181635401b16b88d96e7e50c398e5fc0ba0))


### Refactor

* extract serializer helpers into a dedicated file ([5d1d2a8](https://github.com/prismicio/prismic-helpers/commit/5d1d2a849236aba7d928a1e27a45f132abca3582))
* migrate asHTML to @prismicio/richtext@2 ([a565d02](https://github.com/prismicio/prismic-helpers/commit/a565d02ef51b8609719a1f96ad408b8994b664e3))
* migrate asHtml to typescript ([f589b05](https://github.com/prismicio/prismic-helpers/commit/f589b05047e9979900899221e73b4242d1cdc445))
* provide asText from @prismicio/richtext directly ([987105f](https://github.com/prismicio/prismic-helpers/commit/987105f07f57e722f1d392fac09f149bc289ad37))


### Chore

* migrate to npm ([8a41c1a](https://github.com/prismicio/prismic-helpers/commit/8a41c1a6e1916972f9d3f9979b01cc0cac694a37))
* replace yarn scripts with npm ([9756c13](https://github.com/prismicio/prismic-helpers/commit/9756c139cb2027117da9799de6c59ff4a9283016))
* **deps:** maintain dependencies ([a3aacb3](https://github.com/prismicio/prismic-helpers/commit/a3aacb3e825f9747e1dd0e008ceb3971d184c42b))
* typo on config ([010cb0b](https://github.com/prismicio/prismic-helpers/commit/010cb0bab6fb3ac42e5fec564ddb792476605bbf))

## [2.0.0-alpha.0](https://github.com/prismicio/prismic-helpers/compare/v1.0.3...v2.0.0-alpha.0) (2021-05-27)


### ⚠ BREAKING CHANGES

* migrate existing functions to typescript

### Features

* **examples:** add examples directory ([6f2e6ca](https://github.com/prismicio/prismic-helpers/commit/6f2e6ca64eba4bf97bd846b20a8a646b6f60568e))
* add graphql support ([45858a9](https://github.com/prismicio/prismic-helpers/commit/45858a94527724f70cd6024a78d69e819fa08b75))
* allow asLink to also resolve prismic documents (experimental) ([ed5ad52](https://github.com/prismicio/prismic-helpers/commit/ed5ad529beae96903eded5f6fcc4af1cb72e964c))
* allow return type to be specified for link resolver ([be75fb5](https://github.com/prismicio/prismic-helpers/commit/be75fb5d21514dc3dc1da89fe09bbc60332eafdc))


### Bug Fixes

* handle link field edge cases on asLink ([83f1a61](https://github.com/prismicio/prismic-helpers/commit/83f1a61627b8b97518997c145fbd83161057724e))


### Refactor

* **examples:** refactor example directory ([01051cb](https://github.com/prismicio/prismic-helpers/commit/01051cb1651c4bd0b42529b0df5824c5b889111b))
* **graphql:** refactor graphql asLink resolving ([b0ada1d](https://github.com/prismicio/prismic-helpers/commit/b0ada1dd7f02a90c0308fe07f377a59e0dbc682c))
* extract document cast to link field into its own function ([ef16ef5](https://github.com/prismicio/prismic-helpers/commit/ef16ef58ed730df6690c08fc37a4b65f4e5027e1))
* migrate existing functions to typescript ([a52cc56](https://github.com/prismicio/prismic-helpers/commit/a52cc564419df8ef4e2720e809d7d2368590e8b7))
* move ArgumentError to lib folder ([8726268](https://github.com/prismicio/prismic-helpers/commit/8726268d927de25e8ee63a0db824cb520a4ab428))


### Documentation

* **examples:** add graphql examples ([123eeb7](https://github.com/prismicio/prismic-helpers/commit/123eeb7840ae3c326c821e16f574e52342c98ba9))
* add todo ([b757e27](https://github.com/prismicio/prismic-helpers/commit/b757e27ca40ec960687b3eca692be3a3e104840c))
* document linkResolverFunction ([3172393](https://github.com/prismicio/prismic-helpers/commit/3172393703f5ac230b12b412571725b75bc24b39))
* update readme and issue template ([aeacfd3](https://github.com/prismicio/prismic-helpers/commit/aeacfd38cacef66419100fbf3c29f1fbc4fafe91))


### Chore

* **deps:** bump @prismicio/types ([7b5f470](https://github.com/prismicio/prismic-helpers/commit/7b5f470cfd670b6bb9c30efad3b32329463407b3))
* maintain dependencies ([12ca991](https://github.com/prismicio/prismic-helpers/commit/12ca991e3f51dace0eb8bdfa354328c1949294cd))
* revamp repo structure ([b9c05ca](https://github.com/prismicio/prismic-helpers/commit/b9c05ca8024c953bb27140c1e6fe2e170b35d4fc))
* update eslint config ([2397998](https://github.com/prismicio/prismic-helpers/commit/239799851757a6d69ade87ea0a56f65b56765e79))
* **deps:** maintain dependencies ([b76687b](https://github.com/prismicio/prismic-helpers/commit/b76687b8d28019db556699bff346f6b44486f9bb))
* update template ([3342a50](https://github.com/prismicio/prismic-helpers/commit/3342a50efa3e2bcd97aa4e4e9529fd8cf3ef56fb))
* **config:** update .eslintignore ([c5a9f3e](https://github.com/prismicio/prismic-helpers/commit/c5a9f3e4ee479ac0c54f3a26a5b4b9b4163f7734))
* **deps:** maintain dependencies ([87e7f77](https://github.com/prismicio/prismic-helpers/commit/87e7f775c3d1169f6ebe2dd61a053fbc0a493bfe))
* **deps:** upgrade @prismicio/types ([d4dea1c](https://github.com/prismicio/prismic-helpers/commit/d4dea1cd892f7f5ccd416b77d22fa3b2e5468f72))
