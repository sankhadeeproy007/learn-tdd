import moxios from 'moxios';
import { testStore } from '../utils';
import { fetchPosts } from '../actions';

describe('fetchPosts action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('should update store correctly', () => {
    const expectedState = [
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
    ];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });
});
