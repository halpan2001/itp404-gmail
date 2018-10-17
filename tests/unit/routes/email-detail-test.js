import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | email_detail', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:email-detail');
    assert.ok(route);
  });
});
