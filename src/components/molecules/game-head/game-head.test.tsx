import { render } from '@testing-library/react';

import GameHead from './index';

describe('Game Head Component', () => {
  it('should render Game Head', () => {
    const { getByText } = render(<GameHead icon="" name="Game Name" createdAt="" />);
    expect(getByText('Game Name')).toBeInTheDocument();
  });
});
