import { fireEvent, render, screen } from '@testing-library/react';

import Button from '.';

describe('Button', () => {
  it('should render as expected', () => {
    const { container } = render(<Button onClick={() => {}}>Yasuo</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be clickable when it is not disabled', async () => {
    const mockFn = jest.fn();
    render(<Button onClick={mockFn}>Yasuo</Button>);
    fireEvent.click(await screen.findByText(/Yasuo/i));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should not be clickable when it is disabled', async () => {
    const mockFn = jest.fn();
    render(
      <Button isDisabled onClick={mockFn}>
        Yasuo
      </Button>
    );
    fireEvent.click(await screen.findByText(/Yasuo/i));
    expect(mockFn).not.toHaveBeenCalled();
  });
});
