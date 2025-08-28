import { render } from '@testing-library/react';

import HanmogmPage from '.';

describe('HanmogmPage', () => {
  it('should show as expected', () => {
    const { container } = render(<HanmogmPage />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should show as expected with edited date', () => {
    const { container } = render(
      <HanmogmPage editedDate={new Date('2023-09-01')} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
