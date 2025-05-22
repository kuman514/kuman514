import { render } from '@testing-library/react';

import YSOArcadeRecordsPage from '.';

describe('YSOArcadeRecordsPage', () => {
  it('should show as expected', () => {
    const { container } = render(<YSOArcadeRecordsPage />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
