import { Card as MuiCard, styled, colors } from '@mui/material';

import { StyledCardProps } from './types';

export const StyledCard = styled(MuiCard)<StyledCardProps>(({ theme, isactive }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: 'none',
  backgroundColor: colors.grey[100],
  padding: theme.spacing(1, 2),
  cursor: isactive === 'true' ? 'pointer' : 'default',
  opacity: isactive === 'true' ? '1' : '0.5',
}));
