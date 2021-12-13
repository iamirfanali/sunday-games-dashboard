import { SelectChangeEvent } from '@mui/material';

import { Campaigns } from '../../../types/shared';

export interface CampaignSelectProps {
  value: string | undefined;
  campaigns: Array<Campaigns>;
  handleChange: (event: SelectChangeEvent) => void;
}
