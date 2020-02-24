import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '.';

const setUp = (props = {}) => shallow(<Header {...props} />);

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  test('should render without errors', () => {
    const wrapper = component.find(`[test-id='header']`);
    expect(wrapper.length).toBe(1);
  });

  test('should render header text', () => {
    const hasHeaderText = component.childAt(0).equals('Header');
    expect(hasHeaderText).toBeTruthy();
  });
});
