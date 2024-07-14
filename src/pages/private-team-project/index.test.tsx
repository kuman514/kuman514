import { render } from '@testing-library/react';

import PrivateTeamProjectPage from '.';

describe('PrivateTeamProjectPage', () => {
  it('should show as expected', () => {
    const { container } = render(<PrivateTeamProjectPage />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
