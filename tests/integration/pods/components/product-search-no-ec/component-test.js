import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('product-search-no-ec', 'Integration | Component | product search no ec', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{product-search-no-ec}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#product-search-no-ec}}
      template block text
    {{/product-search-no-ec}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
