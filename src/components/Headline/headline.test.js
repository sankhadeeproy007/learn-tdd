/* eslint-disable react/forbid-foreign-prop-types */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import { Headline } from '.';

const setUp = (props = {}) => shallow(<Headline {...props} />);

describe('Headline Component', () => {
  describe('Checking prop types', () => {
    test('should not throw a warning', () => {
      const expectedProps = {
        title: 'Test header',
        description: 'Test description'
      };

      const propsError = checkPropTypes(
        Headline.propTypes,
        expectedProps,
        'props',
        Headline.name
      );

      expect(propsError).toBeUndefined();
    });
  });

  describe('Has props', () => {
    let component;

    beforeEach(() => {
      const props = {
        title: 'Test header',
        description: 'Test description'
      };
      component = setUp(props);
    });

    test('should render without error', () => {
      const wrapper = component.find(`[test-id='headline']`);
      expect(wrapper.length).toBe(1);
    });

    test('should render H1', () => {
      const title = component.find(`[test-id='title']`);
      expect(title.length).toBe(1);
    });

    test('should render a description', () => {
      const desc = component.find(`[test-id='description']`);
      expect(desc.length).toBe(1);
    });
  });

  describe('Has NO props', () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });

    test('should not render', () => {
      const wrapper = component.find(`[test-id='headline']`);
      expect(wrapper.length).toBe(0);
    });
  });
});
