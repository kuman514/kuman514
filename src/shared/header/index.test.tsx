import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

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

function renderHeader() {
  return render(<Header navNodes={testNavNodes} />, { wrapper: MemoryRouter });
}

describe('Header', () => {
  it('should have appearances that matches snapshot', () => {
    const { container } = renderHeader();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have nodes that link to the expected routes', () => {
    renderHeader();

    expect(screen.getByLabelText('kuman514-logo')).toHaveAttribute('href', '/');
    expect(screen.getByText(/Yasuo/i).closest('a')).toHaveAttribute(
      'href',
      '/yasuo'
    );
    expect(screen.getByText(/Koishi Komeiji/i).closest('a')).toHaveAttribute(
      'href',
      '/koishi'
    );
    expect(screen.getByText(/Hoshino Takanashi/i).closest('a')).toHaveAttribute(
      'href',
      '/hoshino'
    );
  });
});
