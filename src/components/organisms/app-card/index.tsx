import { Stack } from '@mui/material';

import { getAverage } from '../../../utils/helpers';
import Card from '../../molecules/card';
import { AppCardProps } from './types';

export default function AppCard({ apps, totalCampaigns, handleNavigate }: AppCardProps) {
  return (
    <Stack sx={{ m: 3 }} spacing={2}>
      {apps.map((app) => {
        const avgInstall = getAverage(app?.installs, 'value');
        const avgRevenue = getAverage(app?.revenue, 'value');
        return (
          <Card
            key={app.id}
            icon={app.icon}
            name={app.name}
            isActive={app.active}
            avgInstall={avgInstall}
            avgRevenue={avgRevenue}
            totalCampaigns={totalCampaigns}
            handleClick={handleNavigate && (() => handleNavigate(app.id))}
          />
        );
      })}
    </Stack>
  );
}
