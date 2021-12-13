import Dialog from '../../atoms/dialog';
import Form from '../../molecules/form';
import { CampaignUpsertProps } from './types';

export default function CampaignUpsert({ isOpen, handleClose, handleSubmit }: CampaignUpsertProps) {
  return (
    <Dialog isOpen={isOpen} handleClose={handleClose}>
      <Form onSubmit={handleSubmit} />
    </Dialog>
  );
}
