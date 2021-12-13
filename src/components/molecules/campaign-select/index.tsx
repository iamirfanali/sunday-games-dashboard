import { Select, MenuItem } from '@mui/material';

import { CampaignSelectProps } from './types';

export default function CampaignSelect({ campaigns, handleChange, value }: CampaignSelectProps) {
  return (
    <Select
      value={value || '1'}
      onChange={handleChange}
      defaultValue={value || '1'}
      sx={{ width: 1 / 2 }}
    >
      {campaigns.map((el) => (
        <MenuItem key={el.id} value={el.id}>
          {el.name}
        </MenuItem>
      ))}
    </Select>
  );
}
