import { AppBar as MuiAppBar, styled, colors, AppBarProps } from '@mui/material';

export const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({
  backgroundColor: colors.grey[200],
  boxShadow: 'none',
  padding: theme.spacing(1),
}));
