import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';


module('Integration | Component | star-button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{star-button}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#star-button}}
        template block text
      {{/star-button}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('the star is filled when starred is true', async function(assert){
    this.set('starred', true);
    await render(hbs `<StarButton @starred={{starred}}/>`);

    assert.dom('[data-test="starred"]').exists();
  });

  test('the star is empty when starred is false', async function(assert){
    this.set('starred', false);
    await render(hbs `<StarButton @starred={{starred}}/>`);

    assert.dom('[data-test="unstarred"]').exists();
  });

});
