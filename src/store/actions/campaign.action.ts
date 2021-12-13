import http from '../../services/http';
import { campaignsConstants } from '../../settings/constants';
import { Campaigns } from '../../types/shared';
import { IAction } from './types';

export function getCampaignsAction() {
  return (dispatch: (arg: IAction<Campaigns>) => void) => {
    dispatch({ type: campaignsConstants.GET_CAMPAIGNS_REQUEST });
    http
      .get('/campaign')
      .then((res) =>
        dispatch({
          type: campaignsConstants.GET_CAMPAIGNS_SUCCESS,
          payload: {
            list: res.data,
            single: res.data[0],
          },
        })
      )
      .catch(() => {
        dispatch({ type: campaignsConstants.GET_CAMPAIGNS_FAILURE });
      });
  };
}

export function setCampaignAction(data: Campaigns) {
  return (dispatch: (arg: IAction<Campaigns>) => void) => {
    dispatch({ type: campaignsConstants.SET_CAMPAIGN_DATA, payload: { single: data } });
  };
}

export function addCampaignAction(data: Campaigns) {
  return (dispatch: (arg: IAction<Campaigns>) => void) => {
    dispatch({ type: campaignsConstants.ADD_CAMPAIGN_DATA, payload: { single: data } });
  };
}
