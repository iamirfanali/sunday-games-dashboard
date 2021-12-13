import http from '../../services/http';
import { appConstants } from '../../settings/constants';
import { Apps } from '../../types/shared';
import { IAction } from './types';

export function getAppsAction() {
  return (dispatch: (arg: IAction<Apps>) => void) => {
    dispatch({ type: appConstants.GET_APPS_REQUEST });
    http
      .get('/app')
      .then((res) => {
        dispatch({
          type: appConstants.GET_APPS_SUCCESS,
          payload: { list: res.data },
        });
      })
      .catch(() => {
        dispatch({ type: appConstants.GET_APPS_FAILURE });
      });
  };
}
