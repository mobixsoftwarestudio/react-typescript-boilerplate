import { createAction } from 'redux-actions';
import ActionTypes from './actionTypes';

export const dummyRequest = createAction(ActionTypes.DUMMY_REQUEST);
export const triggerDummyLoading = createAction(
  ActionTypes.TRIGGER_DUMMY_LOADING,
);
