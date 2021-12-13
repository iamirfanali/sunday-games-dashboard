import { Box, Stack, Typography } from '@mui/material';
import moment from 'moment';

import { GameHeadProps } from './types';

export default function GameHead({ icon, name, createdAt }: GameHeadProps) {
  return (
    <Box marginY={2} display="flex">
      <img width="230" src={icon} alt={name} />
      <Stack marginLeft={4} spacing={2}>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="subtitle1" color="GrayText">
          Created on {moment(createdAt).format('DD.MM.YYYY')}
        </Typography>
      </Stack>
    </Box>
  );
}
