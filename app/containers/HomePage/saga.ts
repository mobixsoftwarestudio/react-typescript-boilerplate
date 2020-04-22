import { put, takeLatest, delay } from 'redux-saga/effects';
import ActionTypes from './actionTypes';
import { triggerDummyLoading } from './actions';

export function* triggerDummyLoadingSaga() {
  yield put(triggerDummyLoading(true));
  yield delay(5000);
  yield put(triggerDummyLoading(false));
}

export default function* saga() {
  yield takeLatest(ActionTypes.DUMMY_REQUEST, triggerDummyLoadingSaga);
}
