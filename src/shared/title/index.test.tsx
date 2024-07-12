import { render } from '@testing-library/react';

import Title from '.';

describe('Title', () => {
  it('should show as expected', () => {
    const { container } = render(
      <Title>If you win you are Maverick, if you lose you are Yasuo.</Title>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should show as expected 2', () => {
    const { container } = render(
      <Title customClassName="text-black">Yasuo Maverick</Title>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
