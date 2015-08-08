import ComponentsTooltipsMixin from 'ember-tooltips/mixins/components/tooltips';
import Ember from 'ember';
import { module, test } from 'qunit';

let component;

module('Unit | Mixin | components/tooltip', {

  beforeEach() {
    const ComponentsTooltipsObject = Ember.Component.extend(ComponentsTooltipsMixin);

    component = ComponentsTooltipsObject.create();
  },

});

test('The mixin adds the public properties', function(assert) {
  const expectedProperties = {
    tooltip: null,
    tooltipSupportedProperties: [
      'auto',
      'content',
      'duration',
      'effectClass',
      'event',
      'place',
      'spacing',
      'typeClass',
      'visibility'
    ],
    tooltipAuto: true,
    tooltipContent: null,
    tooltipDuration: null,
    tooltipEffectClass: 'slide', // fade, grow, slide, null
    tooltipEvent: 'hover',
    tooltipPlace: 'top',
    tooltipSpacing: null,
    tooltipTypeClass: null,
    tooltipVisibility: null,
  };

  assert.expect(11);

  Ember.keys(expectedProperties).forEach(function(expectedProperty) {
    const expectedValue = expectedProperties[expectedProperty];
    const actualValue = component.get(expectedProperty);

    if (expectedValue) {

      assert.deepEqual(actualValue, expectedValue,
        `The component should have a ${expectedProperty} property with a value equal to ${expectedValue}`);

    } else {

      assert.ok(actualValue !== undefined,
        `The component should have a ${expectedProperty} property`);

    }
  });

});

test('The mixin adds the public methods', function(assert) {

  assert.ok(!!component.renderTooltip,
    'The component should have a renderTooltip method');

  assert.ok(!!component.renderChildTooltips,
    'The component should have a renderTooltip method');

  component.renderTooltip();

  assert.ok(!component.get('tooltip'),
    'The component should not have a tooltip property after calling renderTooltip when no tooltip content is specified');

});
