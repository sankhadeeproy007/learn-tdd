import { types } from '../../actions/types';

export const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return action.payload;

    default:
      return state;
  }
};
