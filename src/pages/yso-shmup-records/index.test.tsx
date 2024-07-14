import { render } from '@testing-library/react';

import YSOShmupRecordsPage from '.';

describe('YSOShmupRecordsPage', () => {
  it('should show as expected', () => {
    const { container } = render(<YSOShmupRecordsPage />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
