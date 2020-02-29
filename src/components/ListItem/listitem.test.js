/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import { ListItem } from '.';

const setUp = (props = {}) => shallow(<ListItem {...props} />);

describe('ListItem Component', () => {
  describe('Checking proptypes', () => {
    test('should not throw a warning', () => {
      const expectedProps = {
        title: 'Title test',
        description: 'Description test',
        loading: false
      };
      const propsError = checkPropTypes(
        ListItem.propTypes,
        expectedProps,
        'props',
        ListItem.name
      );

      expect(propsError).toBeUndefined();
    });
  });

  describe('renders', () => {
    let component;
    beforeEach(() => {
      const props = {
        title: 'Title test',
        description: 'Description test',
        loading: false
      };
      component = setUp(props);
    });
    test('should render without errors', () => {
      const wrapper = component.find(`[test-id='listitem']`);
      expect(wrapper.length).toBe(1);
    });
  });

  describe('renders loader when loading', () => {
    let component;
    beforeEach(() => {
      const props = {
        loading: true
      };
      component = setUp(props);
    });
    test('should render loader', () => {
      const wrapper = component.find(`[test-id='loader']`);
      expect(wrapper.length).toBe(1);
    });
  });
});
