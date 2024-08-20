import { render } from '@testing-library/react';

import ProjectPageTemplate from '.';

describe('ProjectPageTemplate', () => {
  it('should match the snapshot', () => {
    const { container } = render(
      <ProjectPageTemplate>Lorem ipsum dolor sit amet.</ProjectPageTemplate>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
