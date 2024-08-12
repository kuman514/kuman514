import { render, screen } from '@testing-library/react';

import PageTemplate from '.';

describe('PageTemplate', () => {
  it('should contain most recently modified date', async () => {
    render(
      <PageTemplate mostRecentlyEdited={new Date('2024-08-13')}>
        Lorem ipsum dolor sit amet.
      </PageTemplate>
    );

    expect(
      await screen.findByText(/최근 수정 일자: 2024년 8월 13일/i)
    ).not.toBeNull();
  });

  it('should match the snapshot', () => {
    const { container } = render(
      <PageTemplate
        customClassName="mt-24 text-6xl"
        mostRecentlyEdited={new Date('2024-08-13')}
      >
        Lorem ipsum dolor sit amet.
      </PageTemplate>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
