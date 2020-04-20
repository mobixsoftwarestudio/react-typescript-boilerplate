import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

interface HomePageState {
  readonly loading: boolean;
}

type HomePageActions = ActionType<typeof actions>;

type RootState = ApplicationRootState;
type ContainerState = HomePageState;
type ContainerActions = HomePageActions;

export { RootState, ContainerState, ContainerActions };
