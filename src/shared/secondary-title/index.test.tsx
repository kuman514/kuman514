import { render } from '@testing-library/react';

import SecondaryTitle from '.';

describe('SecondaryTitle', () => {
  it('should show as expected', () => {
    const { container } = render(
      <SecondaryTitle customClassName="text-4xl">
        If you win you are Maverick, if you lose you are Yasuo.
      </SecondaryTitle>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should show as expected 2', () => {
    const { container } = render(
      <SecondaryTitle customClassName="text-4xl text-black">
        Yasuo Maverick
      </SecondaryTitle>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
