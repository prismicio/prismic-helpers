# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
