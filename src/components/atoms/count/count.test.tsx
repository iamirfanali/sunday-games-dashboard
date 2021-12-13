import { render } from '@testing-library/react';

import Count from './index';

describe('Count Component', () => {
  it('should render Count', () => {
    const { getByText } = render(<Count title="installs" value="30" />);
    expect(getByText('installs')).toBeInTheDocument();
  });
});
