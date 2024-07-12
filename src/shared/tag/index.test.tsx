import { render } from '@testing-library/react';

import Tag from '.';

describe('Tag', () => {
  it('should show as expected', () => {
    const { container } = render(
      <Tag>If you win you are Maverick, if you lose you are Yasuo.</Tag>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should show as expected 2', () => {
    const { container } = render(
      <Tag customClassName="text-black">Yasuo Maverick</Tag>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
