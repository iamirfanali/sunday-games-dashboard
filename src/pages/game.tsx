import { useEffect } from 'react';

import { Container, Box, Stack, Divider, SelectChangeEvent } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import CampaignSelect from '../components/molecules/campaign-select';
import GameHead from '../components/molecules/game-head';
import LineChart from '../components/molecules/line-chart';
import AddCampaign from '../components/organisms/add-campaign';
import Header from '../components/organisms/header';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { getAppsAction } from '../store/actions/app.action';
import { getCampaignsAction, setCampaignAction } from '../store/actions/campaign.action';
import { extractArray } from '../utils/helpers';

const links = [
  {
    id: '1',
    children: 'Overview',
    underline: 'none',
    color: 'primary',
    to: '/',
  },
  {
    id: '2',
    children: 'Game',
    underline: 'none',
    color: 'black',
    to: '',
  },
];

export default function Game() {
  const param = useParams();
  const dispatch = useDispatch();

  const { apps } = useTypedSelector((state) => state.appsReducer);
  const { campaigns, campaign } = useTypedSelector((state) => state.campaignsReducer);

  const computedApp = apps.filter((app) => app.id === param.id);

  const appInstallLabels = extractArray(computedApp[0]?.installs, 'day');
  const appInstallData = extractArray(computedApp[0]?.installs, 'value');

  const appRevenueLabels = extractArray(computedApp[0]?.revenue, 'day');
  const appRevenueData = extractArray(computedApp[0]?.revenue, 'value');

  const campaignInstallLabels = extractArray(campaign?.installs, 'day');
  const campaignInstallData = extractArray(campaign?.installs, 'value');

  useEffect(() => {
    dispatch(getAppsAction());
    dispatch(getCampaignsAction());
  }, [dispatch]);

  const handleChange = (event: SelectChangeEvent) => {
    const computedCampaign = campaigns?.filter((el) => el.id === event.target.value);
    dispatch(setCampaignAction(computedCampaign[0]));
  };

  return (
    <Container>
      <Header links={links} />
      <GameHead
        icon={computedApp[0]?.icon}
        name={computedApp[0]?.name}
        createdAt={computedApp[0]?.createdAt}
      />
      <Stack direction="row" spacing={10}>
        <LineChart title="Installs" labels={appInstallLabels} data={appInstallData} />
        <LineChart title="Revenue" labels={appRevenueLabels} data={appRevenueData} />
      </Stack>
      <Divider sx={{ width: 1 / 2, marginX: 'auto', marginY: 3 }} />
      <Stack direction="row" spacing={10} width={1}>
        <Box width={1 / 2} display="flex" flexDirection="column" alignItems="center" marginTop={6}>
          <CampaignSelect
            campaigns={campaigns}
            value={campaign.id?.toString()}
            handleChange={handleChange}
          />
          <AddCampaign />
        </Box>
        <Box width={1 / 2}>
          <LineChart title="Installs" labels={campaignInstallLabels} data={campaignInstallData} />
        </Box>
      </Stack>
    </Container>
  );
}
