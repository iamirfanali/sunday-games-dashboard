import { CardProps as MuiCardProps } from '@mui/material';

export interface CardProps {
  icon: string;
  name: string;
  avgInstall: number;
  avgRevenue: number;
  totalCampaigns: number;
  isActive: boolean;
  handleClick?: () => void;
}

export interface StyledCardProps extends MuiCardProps {
  isactive?: string;
}
