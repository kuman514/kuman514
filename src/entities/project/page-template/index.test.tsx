import { render, screen } from '@testing-library/react';

import TestImageJpg from '^/shared/test-assets/image.jpg';

import ProjectPageTemplate from '.';

describe('ProjectPageTemplate', () => {
  it('should match the snapshot', () => {
    const { container } = render(
      <ProjectPageTemplate>Lorem ipsum dolor sit amet.</ProjectPageTemplate>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should show banner if it has banner image URL', async () => {
    render(
      <ProjectPageTemplate
        bannerImage={{
          imageData: TestImageJpg,
          altText: 'Koishi Komeiji',
        }}
      >
        Lorem ipsum dolor sit amet.
      </ProjectPageTemplate>
    );

    expect(await screen.findByLabelText('banner-image')).not.toBeNull();
  });
});
