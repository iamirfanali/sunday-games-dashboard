import { combineReducers } from 'redux';

import { appsReducer } from './app.reducer';
import { campaignsReducer } from './campaign.reducer';

const rootReducer = combineReducers({ appsReducer, campaignsReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
