import { fireEvent, render, screen } from '@testing-library/react';

import Header from '.';
import { NavNode } from './types';

const testNavNodes: NavNode[] = [
  {
    id: 'yasuo',
    label: 'Yasuo',
    href: '/yasuo',
  },
  {
    id: 'koishi',
    label: 'Koishi Komeiji',
    href: '/koishi',
  },
  {
    id: 'hoshino',
    label: 'Hoshino Takanashi',
    href: '/hoshino',
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

describe('Header', () => {
  it('should have appearances that matches snapshot', async () => {
    const { container } = render(<Header navNodes={testNavNodes} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have nodes that have working links', async () => {
    render(<Header navNodes={testNavNodes} />);

    fireEvent.click(await screen.findByLabelText('kuman514-logo'));
    expect(mockFn).toHaveBeenLastCalledWith('/');

    fireEvent.click(await screen.findByText(/Yasuo/i));
    expect(mockFn).toHaveBeenLastCalledWith('/yasuo');

    fireEvent.click(await screen.findByText(/Koishi Komeiji/i));
    expect(mockFn).toHaveBeenLastCalledWith('/koishi');

    fireEvent.click(await screen.findByText(/Hoshino Takanashi/i));
    expect(mockFn).toHaveBeenLastCalledWith('/hoshino');
  });
});
