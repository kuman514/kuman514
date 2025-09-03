import { render } from '@testing-library/react';

import ViteConnectFourPage from '.';

describe('ViteConnectFourPage', () => {
  it('should show as expected', () => {
    const { container } = render(<ViteConnectFourPage />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should show as expected with edited date', () => {
    const { container } = render(
      <ViteConnectFourPage editedDate={new Date('2023-05-29')} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
