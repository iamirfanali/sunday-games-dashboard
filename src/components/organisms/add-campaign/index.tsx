import { useState } from 'react';

import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';

import { addCampaignAction } from '../../../store/actions/campaign.action';
import { FormInput } from '../../../types/shared';
import CampaignUpsert from '../campaign-upsert';

export default function AddCampaign() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (data: FormInput) => {
    dispatch(addCampaignAction(data));
    setIsOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color="success"
        sx={{ marginTop: 2, width: 1 / 2 }}
        onClick={handleClickOpen}
      >
        New Campaign
      </Button>

      <CampaignUpsert isOpen={isOpen} handleClose={handleClose} handleSubmit={handleSubmit} />
    </>
  );
}
