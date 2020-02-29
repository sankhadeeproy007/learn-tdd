import { types } from '../../actions/types';

import postsReducer, { initialState } from './reducer';

describe('Posts reducer', () => {
  test('should return initial state if receiving no type', () => {
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
  test('should return new state if receiving type', () => {
    const posts = [
      { title: 'Test 1' },
      { title: 'Test 2' },
      { title: 'Test 3' }
    ];
    const newState = postsReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts
    });
    expect(newState).toEqual(posts);
  });
});
