import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Link from './index';

describe('Link Component', () => {
  it('should render Link', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Link to="/">home</Link>
      </MemoryRouter>
    );
    expect(getByText('home')).toBeInTheDocument();
  });
});
