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
    test('should render title', () => {
      const title = component.find(`[test-id='title']`);
      expect(title.length).toBe(1);
    });
    test('should render description', () => {
      const title = component.find(`[test-id='description']`);
      expect(title.length).toBe(1);
    });
  });

  describe('renders loader', () => {
    let component;
    beforeEach(() => {
      const props = {
        loading: true
      };
      component = setUp(props);
    });
    test('should render loader when loading is true', () => {
      const loader = component.find(`[test-id='loader']`);
      const wrapper = component.find(`[test-id='listitem']`);
      expect(loader.length).toBe(1);
      expect(wrapper.length).toBe(0);
    });
  });
});
