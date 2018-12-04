import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | truncate-text', function(hooks){
  setupRenderingTest(hooks);

  test('on initial render', async function(assert){
    this.set('message', 'texting');
    this.set('limit', '5');
    await render(hbs `{{truncate-text message limit}}`);

    assert.equal(this.element.textContent.trim(), 'texti...');
  });
});
