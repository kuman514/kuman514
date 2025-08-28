import { render } from '@testing-library/react';

import YSOArcadeRecordsPage from '.';

describe('YSOArcadeRecordsPage', () => {
  it('should show as expected', () => {
    const { container } = render(<YSOArcadeRecordsPage />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should show as expected with edited date', () => {
    const { container } = render(
      <YSOArcadeRecordsPage editedDate={new Date('2024-12-19')} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
