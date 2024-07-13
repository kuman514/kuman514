import { fireEvent, render, screen } from '@testing-library/react';

import LinkButton from '.';

describe('LinkButton', () => {
  beforeEach(() => {
    global.open = jest.fn();
  });

  it('should render as expected', () => {
    const { container } = render(
      <LinkButton href="https://yasuo.leagueoflegends.com/">Yasuo</LinkButton>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should open link when it is not disabled', async () => {
    render(<LinkButton href="https://koishi-komeiji.xyz/">Koishi</LinkButton>);
    fireEvent.click(await screen.findByText(/Koishi/i));
    expect(global.open).toHaveBeenCalledWith(
      'https://koishi-komeiji.xyz/',
      '_blank'
    );
  });

  it('should not be clickable when it is disabled', async () => {
    render(
      <LinkButton isDisabled href="https://hoshino-takanashi.xyz/">
        Hoshino
      </LinkButton>
    );
    fireEvent.click(await screen.findByText(/Hoshino/i));
    expect(global.open).not.toHaveBeenCalled();
  });
});
