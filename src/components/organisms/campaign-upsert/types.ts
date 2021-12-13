import { FormInput } from '../../../types/shared';

export interface CampaignUpsertProps {
  isOpen: boolean;
  handleClose: () => void;
  handleSubmit: (data: FormInput) => void;
}
