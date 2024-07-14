import { render } from '@testing-library/react';

import ViteMinesweeperPage from '.';

describe('ViteMinesweeperPage', () => {
  it('should show as expected', () => {
    const { container } = render(<ViteMinesweeperPage />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
