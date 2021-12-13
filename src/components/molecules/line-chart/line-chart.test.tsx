import { render } from '@testing-library/react';

import LineChart from './index';

jest.mock('react-chartjs-2', () => ({
  Line: () => null,
}));

describe('Line Chart Component', () => {
  it('should render line chart', () => {
    const { getByText } = render(<LineChart title="Chart" labels={['label 1']} data={[10]} />);
    expect(getByText('Chart')).toBeInTheDocument();
  });
});
