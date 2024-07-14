import { render } from '@testing-library/react';

import UnorderedBulletList from '.';

describe('UnorderedBulletList', () => {
  it('should show as expected', () => {
    const { container } = render(
      <UnorderedBulletList>
        <li>Yasuo</li>
        <li>Koishi</li>
        <li>Hoshino</li>
      </UnorderedBulletList>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should show as expected 2', () => {
    const { container } = render(
      <UnorderedBulletList>
        <li>
          <a href="yasuo-science.com">Yasuo</a>
        </li>
        <li>
          <a href="koishi.com">Koishi</a>
        </li>
        <li>
          <a href="hoshino.com">Hoshino</a>
        </li>
      </UnorderedBulletList>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
