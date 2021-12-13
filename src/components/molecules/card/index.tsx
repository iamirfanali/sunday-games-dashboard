import { CardMedia, Typography, Stack } from '@mui/material';

import Count from '../../atoms/count';
import { StyledCard } from './styles';
import { CardProps } from './types';

export default function Card({
  icon,
  name,
  handleClick,
  avgInstall,
  avgRevenue,
  totalCampaigns,
  isActive,
}: CardProps) {
  return (
    <StyledCard isactive={isActive.toString()} onClick={handleClick}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <CardMedia component="img" sx={{ width: 80 }} image={icon} alt={name} />
        <Typography variant="body1">{name}</Typography>
      </Stack>
      <Stack direction="row" spacing={5}>
        <Count title="Campaign" value={totalCampaigns} />
        <Count title="Avg. installs" value={avgInstall} />
        <Count title="Avg. revenue" value={avgRevenue} />
      </Stack>
    </StyledCard>
  );
}
