import { render, screen } from '@testing-library/react';

import MostRecentlyEdited from '.';

describe('MostRecentlyEdited', () => {
  it('should be "2024년 8월 15일" when it gets 2024-08-15', async () => {
    render(<MostRecentlyEdited editedDate={new Date('2024-08-15')} />);

    expect(
      await screen.findByText(/최근 수정 일자: 2024년 8월 15일/i)
    ).not.toBeNull();
  });

  it('should be "2023년 11월 21일" when it gets 2023-11-21', async () => {
    render(<MostRecentlyEdited editedDate={new Date('2023-11-21')} />);

    expect(
      await screen.findByText(/최근 수정 일자: 2023년 11월 21일/i)
    ).not.toBeNull();
  });
});
