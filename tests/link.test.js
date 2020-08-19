import { Link as linkHelper } from '../src';

import {
  linkV1External,
  linkV1Internal,
  linkV2External,
  linkV2Internal
} from './samples'

const lr = (doc) => `/${doc.uid}`

test('V1 external links', () => {
  const url = linkHelper.url(linkV1External)
  expect(url).toBe(linkV1External.url);
});

test('V1 internal links', () => {
  const url = linkHelper.url(linkV1Internal, lr)
  expect(url).toBe(`/${linkV1Internal.uid}`);
});

test('V2 external links', () => {
  const url = linkHelper.url(linkV2External)
  expect(url).toBe(linkV2External.value.document.url);
});

test('V1 internal links', () => {
  const url = linkHelper.url(linkV2Internal, lr)
  expect(url).toBe(`/${linkV2Internal.value.document.uid}`);
});
