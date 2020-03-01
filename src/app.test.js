/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import { shallow } from 'enzyme';

import { testStore, findByTestId } from './utils';

import App from './App';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe('App component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: 'Text example 1',
          body: 'Body 1 text'
        },
        {
          title: 'Text example 2',
          body: 'Body 2 text'
        },
        {
          title: 'Text example 3',
          body: 'Body 3 text'
        }
      ]
    };
    wrapper = setUp(initialState);
  });

  test('should render without errors', () => {
    const component = findByTestId(wrapper, 'app');
    expect(component.length).toBe(1);
  });
});
