import { Box, Typography } from '@mui/material';

import { CountProps } from './types';

export default function Count({ title, value }: CountProps) {
  return (
    <Box textAlign="center">
      <Typography variant="h6">{value}</Typography>
      <Typography variant="body2">{title}</Typography>
    </Box>
  );
}
