import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import BreadCrumbs from './index';

const links = [
  {
    id: '1',
    children: 'home',
    underline: 'none',
    color: 'black',
    to: '/',
  },
];

describe('Breadcrumb Component', () => {
  it('should render Breadcrumb', () => {
    const { getByText } = render(
      <MemoryRouter>
        <BreadCrumbs links={links} />
      </MemoryRouter>
    );
    expect(getByText('home')).toBeInTheDocument();
  });
});
