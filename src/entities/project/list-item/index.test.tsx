import { fireEvent, render, screen } from '@testing-library/react';

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

const mockFn = jest.fn();

function MockedLink({
  children,
  href,
  'aria-label': ariaLabel,
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      aria-label={ariaLabel}
      onClick={() => {
        mockFn(href);
      }}
    >
      {children}
    </a>
  );
}

jest.mock('next/link', () => MockedLink);

describe('ProjectListItem', () => {
  it('should have appearances that matches snapshot', () => {
    const { container } = render(
      testProjectItem.map((item) => (
        <ProjectListItem key={`project-${item.projectId}`} projectItem={item} />
      ))
    );
    expect(container).toMatchSnapshot();
  });

  it('should have nodes that have working links which takes you to /projects/:projectId', async () => {
    render(
      testProjectItem.map((item) => (
        <ProjectListItem key={`project-${item.projectId}`} projectItem={item} />
      ))
    );

    fireEvent.click(await screen.findByText(/Koishi Komeiji/i));
    expect(mockFn).toHaveBeenLastCalledWith('/projects/Koishi');

    fireEvent.click(await screen.findByText(/Hoshino Takanashi/i));
    expect(mockFn).toHaveBeenLastCalledWith('/projects/Hoshino');
  });
});
