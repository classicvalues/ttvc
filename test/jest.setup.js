/* eslint-env browser, node */
/* eslint-disable no-unused-vars */
// TODO: Consider rewriting unit tests so that they do not require these global stubs

// stub the MutationObserver and IntersectionObserver interfaces
// @ts-expect-error This is a jest stub
global.MutationObserver = class {
  constructor(callback) {}
  disconnect() {}
  observe(element, initObject) {}
};

// @ts-expect-error This is a jest stub
global.IntersectionObserver = class {
  constructor(callback) {}
  disconnect() {}
  observe() {}
  takeRecords() {}
  unobserve() {}
};

// jsdom has no performance.navigation.  This is an attempt to
// give it something to use instead
// @ts-expect-error This is a jest stub
window.performance.navigation = {
  TYPE_NAVIGATE: 0,
  TYPE_RELOAD: 1,
  TYPE_BACK_FORWARD: 2,
  TYPE_RESERVED: 255,
  redirectCount: 0,
  type: 0, // TYPE_NAVIGATE
};

// some tests need this
// @ts-expect-error This is a jest stub
window.performance.timing = {
  // this is an arbitrary timestamp sometime in Feb 2018. We expect tests
  // shouldn't care what year / day it is, but we used a fixed one for
  // repeatability.
  navigationStart: 1518224417028,
};
