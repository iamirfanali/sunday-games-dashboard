import { Apps } from '../../../types/shared';

export interface AppCardProps {
  apps: Array<Apps>;
  totalCampaigns: number;
  handleNavigate?: (id: string) => void;
}
