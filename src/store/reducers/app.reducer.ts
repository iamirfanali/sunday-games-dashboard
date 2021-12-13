import { appConstants } from '../../settings/constants';
import { Apps } from '../../types/shared';
import { IAction } from './types';

interface IState {
  apps: Array<Apps>;
  isLoading: boolean;
}

const initialState: IState = {
  apps: [],
  isLoading: false,
};

export function appsReducer(state: IState = initialState, action: IAction<Apps>) {
  switch (action.type) {
    case appConstants.GET_APPS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case appConstants.GET_APPS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        apps: action.payload.list,
      };
    case appConstants.GET_APPS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
