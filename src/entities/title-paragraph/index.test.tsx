import { render } from '@testing-library/react';

import TitleAndParagraph from '.';

describe('TitleAndParagraph', () => {
  it('should render as expected', () => {
    const { container } = render(
      <TitleAndParagraph
        title={
          <>
            <span className="text-green-600 first-letter:font-bold">
              Lorem ipsum dolor sit amet
            </span>
            , consectetur adipiscing elit.
          </>
        }
        paragraphProps={[
          {
            children:
              'Duis sodales ipsum odio, eu accumsan dui ullamcorper sit amet. Nulla tristique ornare cursus. Morbi egestas porta facilisis. Praesent ac ultricies nunc, pretium ullamcorper ipsum. Suspendisse placerat imperdiet ipsum, nec condimentum orci accumsan a. Nullam sollicitudin justo in ex ullamcorper posuere. Vestibulum finibus diam eu metus maximus lacinia. Praesent eleifend hendrerit libero quis egestas. Sed vitae venenatis ante.',
            customClassName:
              'first-letter:text-2xl first-letter:text-green-600 first-letter:font-bold',
          },
        ]}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
