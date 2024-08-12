import { render, screen } from '@testing-library/react';

import ProjectPageTemplate from '.';

describe('ProjectPageTemplate', () => {
  it('should contain most recently modified date', async () => {
    render(
      <ProjectPageTemplate mostRecentlyEdited={new Date('2024-08-01')}>
        Lorem ipsum dolor sit amet.
      </ProjectPageTemplate>
    );

    expect(
      await screen.findByText(/최근 수정 일자: 2024년 8월 1일/i)
    ).not.toBeNull();
  });

  it('should match the snapshot', () => {
    const { container } = render(
      <ProjectPageTemplate mostRecentlyEdited={new Date('2024-08-13')}>
        Lorem ipsum dolor sit amet.
      </ProjectPageTemplate>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
