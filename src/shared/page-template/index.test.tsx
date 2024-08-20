import { render } from '@testing-library/react';

import PageTemplate from '.';

describe('PageTemplate', () => {
  it('should match the snapshot', () => {
    const { container } = render(
      <PageTemplate customClassName="mt-24 text-6xl">
        Lorem ipsum dolor sit amet.
      </PageTemplate>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
