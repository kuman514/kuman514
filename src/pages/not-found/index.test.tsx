import { render } from '@testing-library/react';

import NotFoundPage from '.';

describe('NotFoundPage', () => {
  it('should show as expected', () => {
    const { container } = render(<NotFoundPage />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
