import { Dialog as MuiDialog, Box } from '@mui/material';

import { DialogProps } from './types';

export default function Dialog({ isOpen, handleClose, children }: DialogProps) {
  return (
    <MuiDialog open={isOpen} onClose={handleClose} fullWidth maxWidth="xs">
      <Box sx={{ p: 6 }}>{children}</Box>
    </MuiDialog>
  );
}
