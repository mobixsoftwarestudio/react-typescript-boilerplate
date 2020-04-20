import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectHomePageDomain = (state: ApplicationRootState) =>
  state.homePage ? state.homePage : initialState;

export const makeSelectLoading = () =>
  createSelector(selectHomePageDomain, substate => substate.loading);
