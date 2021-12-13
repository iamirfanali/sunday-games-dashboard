import { Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { LinkProps } from '../../../types/shared';

export default function Link({ children, ...restProps }: LinkProps) {
  return (
    <MuiLink component={RouterLink} {...restProps}>
      {children}
    </MuiLink>
  );
}
