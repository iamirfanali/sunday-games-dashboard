import { campaignsConstants } from '../../settings/constants';
import { Campaigns } from '../../types/shared';
import { IAction } from './types';

interface IState {
  campaign: Campaigns;
  campaigns: Array<Campaigns>;
  isLoading: boolean;
}

const initialState: IState = {
  campaign: {},
  campaigns: [],
  isLoading: false,
};

export function campaignsReducer(state: IState = initialState, action: IAction<Campaigns>) {
  switch (action.type) {
    case campaignsConstants.GET_CAMPAIGNS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case campaignsConstants.GET_CAMPAIGNS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        campaigns: action.payload.list,
        campaign: action.payload.single,
      };
    case campaignsConstants.GET_CAMPAIGNS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case campaignsConstants.SET_CAMPAIGN_DATA:
      return {
        ...state,
        campaign: action.payload.single,
      };
    case campaignsConstants.ADD_CAMPAIGN_DATA:
      return {
        ...state,
        campaigns: [...state.campaigns, action.payload.single],
      };
    default:
      return state;
  }
}
