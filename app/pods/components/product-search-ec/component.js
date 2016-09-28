import Ember from 'ember';
import { task } from 'ember-concurrency';
import { timeout } from 'ember-concurrency';

let { $ } = Ember;

export default Ember.Component.extend({
  runForOneSecond: task(function * () {
    yield timeout(1000);
  }).restartable(),

  search: task(function * () {
    this.get('runForOneSecond').perform();

    yield timeout(100);

    let text = this.get('searchText');
    let result = yield $.getJSON('/products', { text });
    this.set('result', result);
  }).restartable(),

  isSlowQuery: Ember.computed.and('search.isRunning',
                                  'runForOneSecond.isIdle')

});

