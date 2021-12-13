import { render } from '@testing-library/react';

import Card from './index';

describe('Card Component', () => {
  it('should render card', () => {
    const { getByText } = render(
      <Card isActive icon="" name="App Name" avgInstall={10} avgRevenue={0} totalCampaigns={0} />
    );
    expect(getByText('App Name')).toBeInTheDocument();
  });
});
