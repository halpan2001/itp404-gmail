import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import window, {reset} from 'ember-window-mock';


module('Acceptance | emails', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  // hooks.afterEach(function(){
  //   console.log(window);
  // })

  test('visiting /', async function(assert){
    await visit('/');

    assert.equal(currentURL(), '/');
  });

  test('the inbox displays starred and unstarred emails', async function(assert) {
    server.create('email', {
      //Own fake data
      from: "ME",
      to: "YOU",
      subject:"This is the end.",
      message: "God help us.",
      starred: true
    });
    server.create('email', {
      //Own fake data
      from: "ME",
      to: "YOU",
      subject:"This is the end.",
      message: "God help us.",
      starred: true
    });
    server.create('email', {
      //Own fake data
      from: "ME",
      to: "YOU",
      subject:"This is the end.",
      message: "God help us.",
      starred: true
    });
    server.create('email', {
      //Own fake data
      from: "ME",
      to: "YOU",
      subject:"This is the end.",
      message: "God help us.",
      starred: false
    });
    server.create('email', {
      //Own fake data
      from: "ME",
      to: "YOU",
      subject:"This is the end.",
      message: "God help us.",
      starred: false
    });

    await visit('/');
    assert.dom('[data-test="email"]').exists({count: 5});
  });

  test('viewing a single email', async function(assert) {
    //details page
    server.create('email', {
      id: 1,
      from: "ME",
      to: "YOU",
      subject:"This is the end.",
      message: "God help us.",
      starred: false
    });

    await visit('/emails/detail/1');

    assert.dom('[data-test="delete-img"]').exists();
    assert.dom('[data-test="from"]').hasText('FROM: ME');
    assert.dom('[data-test="to"]').hasText('TO: YOU');
    assert.dom('[data-test="subject"]').hasText('This is the end.');
    assert.dom('[data-test="message"]').hasText('God help us.');

  });

  test('deleting a single email', async function(assert){
    window.confirm = () => true;
    server.create('email', {
      //Own fake data
      id:1,
      from: "ME",
      to: "YOU",
      subject:"This is the end.",
      message: "God help us.",
      starred: false
    });
    server.create('email', {
      //Own fake data
      id: 2,
      from: "ME",
      to: "YOU",
      subject:"This is the end.",
      message: "God help us.",
      starred: false
    });

    await visit('/emails/detail/1');
    await click ('[data-test="delete-img"]');

    assert.dom('[data-test="email"]').exists({count: 1});
  });

  test('creating an email', async function(assert){
    await visit('/emails/compose');
    await fillIn('#from', 'Your worst nightmare');
    await fillIn('#to', 'You');
    await fillIn('#subject', 'This is the end.');
    await fillIn('#message', 'I quit.');

    await click ('[data-test="send"]');

    assert.equal(currentURL(), '/');
  });


});
