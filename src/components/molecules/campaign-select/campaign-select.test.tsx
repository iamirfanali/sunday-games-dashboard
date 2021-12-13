import { render } from '@testing-library/react';

import CampaignSelect from './index';

const campaigns = [
  {
    id: '1',
    name: 'facebook',
    installs: [
      {
        day: 'Day 1',
        value: 40,
      },
      {
        day: 'Day 2',
        value: 40,
      },
    ],
  },
];

describe('Campaign Select Component', () => {
  it('should render campaign select', () => {
    const { getByText } = render(
      <CampaignSelect campaigns={campaigns} value="1" handleChange={(e) => e.target.value} />
    );
    expect(getByText('facebook')).toBeInTheDocument();
  });
});
