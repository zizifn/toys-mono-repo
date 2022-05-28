import { assert } from '@open-wc/testing';

import { UILitDemo } from './wc-lit-demo';

describe('wcLitDemo', () => {
  it('should work', () => {
    const el = document.createElement('ui-lit-demo');
    assert.instanceOf(el, UILitDemo);
    console.log();
  });
});
