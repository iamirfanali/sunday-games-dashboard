import { render } from '@testing-library/react';

import Dialog from './index';

describe('Dialog Component', () => {
  it('should render open dialog', () => {
    const { getByText } = render(
      <Dialog isOpen handleClose={() => {}}>
        Dialog Box
      </Dialog>
    );
    expect(getByText('Dialog Box')).toBeInTheDocument();
  });

  it('should not render dialog', () => {
    const { queryByText } = render(
      <Dialog isOpen={false} handleClose={() => {}}>
        Dialog Box
      </Dialog>
    );
    expect(queryByText('Dialog Box')).toBeNull();
  });
});
