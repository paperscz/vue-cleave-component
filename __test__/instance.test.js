import {mount} from '@vue/test-utils'

import Component from '../src/component.js';

describe('Cleave component instance', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(Component, {
      propsData: {
        value: null,
        options: {
          creditCard: true
        }
      }
    });
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  });

  test('renders input field', () => {
    expect(wrapper.is('input')).toBe(true);
  });


  test('clean up on destroy', () => {
    wrapper.destroy();
    expect(wrapper.isEmpty()).toBe(true);
    expect(wrapper.vm.$data.cleave).toBe(null);
  });

});
