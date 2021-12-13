import { LinkBaseProps as MuiLinkProps } from '@mui/material';
import { LinkProps as RouterLinkProps } from 'react-router-dom';

export interface App {
  createdAt: string;
  name: string;
  icon: string;
  active: boolean;
  id: string;
}

export interface AppInstall {
  day: string;
  value: number;
  id: string;
  appId: string;
}

export interface AppRevenue {
  day: string;
  value: number;
  id: string;
  appId: string;
}

export interface Campaign {
  name?: string;
  id?: string;
}

export interface CampaignInstall {
  day: string;
  value: number;
}

export interface Apps extends App {
  installs: Array<AppInstall>;
  revenue: Array<AppRevenue>;
}

export interface Campaigns extends Campaign {
  installs?: Array<CampaignInstall>;
}

export interface FormInput {
  name: string;
}

export interface Links {
  links: Array<LinkProps>;
}

export type LinkProps = MuiLinkProps & RouterLinkProps;
