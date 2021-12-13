import { ReactNode } from 'react';

export interface DialogProps {
  isOpen: boolean;
  children: ReactNode;
  handleClose: () => void;
}
