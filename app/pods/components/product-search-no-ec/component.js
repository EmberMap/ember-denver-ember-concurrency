import Ember from 'ember';
let { $ } = Ember;

export default Ember.Component.extend({

search() {
  this.set('isSlowQuery', false);
  this.set('isSearching', true);

  Ember.run.later(() => {
    if (this.get('isSearching')) {
      this.set('isSlowQuery', true);
    }
  }, 1000);

  let text = this.get('searchText');

  $.getJSON('/products', { text }).then((result) => {
    if (!this.get('isDestroyed')) {
      if (text === this.get('searchText')) {
        this.set('result', result);
      }
      this.set('isSearching', false);
      this.set('isSlowQuery', false);
    }
  });
},

  actions: {
    search() {
      Ember.run.debounce(this, 'search', 100);
    }
  }
});

