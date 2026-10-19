import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { ProjectItem } from '../types';
import ProjectListItem from '.';

const testProjectItem: ProjectItem[] = [
  {
    projectId: 'Koishi',
    title: 'Koishi Komeiji',
    thumbnailUrl:
      'https://pbs.twimg.com/profile_images/1175746616545857538/JuT5t8dm.jpg',
    description: 'A Youkai girl of unconsciousness from Touhou Project.',
    techStackTags: [
      'Touhou Project',
      'Subterranean Animism',
      'Hopeless Masquerade',
      'Moshi Moshi Meridesu',
      'Unconsciousness',
      'Hartmann No Youkai Shoujo',
    ],
  },
  {
    projectId: 'Hoshino',
    title: 'Hoshino Takanashi',
    thumbnailUrl: 'https://pbs.twimg.com/media/FtlqZPhaAAAnEqZ.jpg?name=orig',
    description: 'A 3rd-grade high school student. Appears in Blue Archive.',
    techStackTags: [
      'Blue Archive',
      'Abydos High School',
      'Shot Gun',
      'Tank',
      'Foreclosure Task Force',
    ],
  },
];

function renderList() {
  return render(
    <ul>
      {testProjectItem.map((item) => (
        <ProjectListItem key={`project-${item.projectId}`} projectItem={item} />
      ))}
    </ul>,
    { wrapper: MemoryRouter }
  );
}

describe('ProjectListItem', () => {
  it('should have appearances that matches snapshot', () => {
    const { container } = renderList();
    expect(container).toMatchSnapshot();
  });

  it('should have nodes that link to /projects/:projectId', () => {
    renderList();

    expect(screen.getByText(/Koishi Komeiji/i).closest('a')).toHaveAttribute(
      'href',
      '/projects/Koishi'
    );
    expect(screen.getByText(/Hoshino Takanashi/i).closest('a')).toHaveAttribute(
      'href',
      '/projects/Hoshino'
    );
  });
});
