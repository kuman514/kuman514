import { render } from '@testing-library/react';

import ViteMinesweeperPage from '.';

describe('ViteMinesweeperPage', () => {
  it('should show as expected', () => {
    const { container } = render(<ViteMinesweeperPage />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should show as expected with edited date', () => {
    const { container } = render(
      <ViteMinesweeperPage editedDate={new Date('2023-05-29')} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
