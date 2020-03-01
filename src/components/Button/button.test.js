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
    let mockFunction;
    let component;
    beforeEach(() => {
      mockFunction = jest.fn();
      const props = {
        buttonText: 'Button text',
        onClick: mockFunction
      };
      component = setUp(props);
    });
    test('should render without errors', () => {
      const button = component.find(`[test-id='button']`);
      expect(button.length).toBe(1);
    });
    test('should emit callback on click event', () => {
      const button = component.find(`[test-id='button']`);
      button.simulate('click');
      const callback = mockFunction.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
