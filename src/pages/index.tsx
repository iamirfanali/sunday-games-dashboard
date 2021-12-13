import { useEffect } from 'react';

import { Container, Divider } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AppCard from '../components/organisms/app-card';
import Header from '../components/organisms/header';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { getAppsAction } from '../store/actions/app.action';
import { getCampaignsAction } from '../store/actions/campaign.action';

const links = [
  {
    id: '1',
    children: 'Overview',
    underline: 'none',
    color: 'black',
    to: '/',
  },
];

export default function Index() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { apps } = useTypedSelector((state) => state.appsReducer);
  const { campaigns } = useTypedSelector((state) => state.campaignsReducer);

  const totalCampaigns = campaigns.length;

  const activeApps = apps?.filter((app) => app.active);
  const inActiveApps = apps?.filter((app) => !app.active);

  const handleNavigate = (id: string) => {
    navigate(`/game/${id}`);
  };

  useEffect(() => {
    dispatch(getAppsAction());
    dispatch(getCampaignsAction());
  }, [dispatch]);

  return (
    <Container>
      <Header links={links} />
      <AppCard apps={activeApps} totalCampaigns={totalCampaigns} handleNavigate={handleNavigate} />
      <Divider sx={{ width: 10 / 12, marginX: 'auto', marginY: 3 }} />
      <AppCard apps={inActiveApps} totalCampaigns={totalCampaigns} />
    </Container>
  );
}
