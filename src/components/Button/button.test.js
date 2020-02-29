/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import { Button } from '.';

const setUp = (props = {}) => shallow(<Button {...props} />);

describe('Button Component', () => {
  describe('Checking proptypes', () => {
    test('should not throw a warning', () => {
      const expectedProps = {
        buttonText: 'Button text',
        onClick: () => {}
      };
      const propsError = checkPropTypes(
        Button.propTypes,
        expectedProps,
        'props',
        Button.name
      );

      expect(propsError).toBeUndefined();
    });
  });

  describe('renders', () => {
    let component;
    beforeEach(() => {
      const props = {
        buttonText: 'Button text',
        onClick: () => {}
      };
      component = setUp(props);
    });
    test('should render without errors', () => {
      const wrapper = component.find(`[test-id='button']`);
      expect(wrapper.length).toBe(1);
    });
  });
});
