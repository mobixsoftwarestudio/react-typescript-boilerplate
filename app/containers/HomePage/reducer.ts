/*
 *
 * HomePage reducer
 *
 */
import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import { triggerDummyLoading } from './actions';

export const initialState = {
  loading: false,
};

const reducer = handleActions(
  {
    [triggerDummyLoading](state, action) {
      return update(state, {
        loading: { $set: action.payload },
      });
    },
  },
  initialState,
);

export default reducer;
