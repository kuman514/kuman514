import { render } from '@testing-library/react';

import HanmogmPage from '.';

describe('HanmogmPage', () => {
  it('should show as expected', () => {
    const { container } = render(<HanmogmPage />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
