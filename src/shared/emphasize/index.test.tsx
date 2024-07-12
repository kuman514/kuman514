import { render } from '@testing-library/react';

import Emphasize from '.';

describe('Emphasize', () => {
  it('should show as expected', () => {
    const { container } = render(<Emphasize>Koishi Komeiji</Emphasize>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should show as expected 2', () => {
    const { container } = render(
      <Emphasize customClassName="to-pink-300">Hoshino Takanashi</Emphasize>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
