import { render } from '@testing-library/react';

import Emphasize from '^/shared/emphasize';
import Paragraph from '^/shared/paragraph';

import Section from '.';

describe('Section', () => {
  it('should render as expected', () => {
    const { container } = render(
      <Section
        title={
          <>
            Lorem <Emphasize>Ipsum</Emphasize> Dolor Sit Amet
          </>
        }
      >
        <Paragraph customClassName="first-letter:text-2xl first-letter:text-green-600 first-letter:font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit
          ipsum ante, ut eleifend ante vulputate eu. Fusce tincidunt pretium
          dapibus. Pellentesque eget scelerisque est. Pellentesque interdum
          tempus eros, eget pretium neque blandit vitae. Ut semper est lorem,
          vitae iaculis felis mollis vel. Quisque posuere lacus ante, sit amet
          egestas purus ultricies in. Curabitur eu urna dignissim, iaculis augue
          quis, posuere purus. In a velit elit. Donec congue, lorem sed
          consectetur volutpat, urna orci posuere tellus, non tempus nulla ipsum
          nec mi. Vivamus lobortis varius ex eu accumsan. Duis tincidunt leo
          eget eros efficitur, ut cursus massa pharetra. Etiam pulvinar
          tincidunt elit a auctor.
        </Paragraph>
        <Paragraph>
          Maecenas fringilla consectetur ante a pulvinar. Nunc ac rhoncus quam.
          Praesent tempor felis diam, id facilisis elit imperdiet id. Vestibulum
          sed quam non purus tempor ultrices. Nunc molestie urna a mauris
          bibendum ultrices. Praesent fringilla justo in neque egestas, nec
          porttitor magna sagittis. Ut et nibh massa. Integer auctor sem at quam
          imperdiet, a imperdiet lorem consectetur. Vivamus malesuada arcu nec
          mauris ornare molestie. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec ultricies nulla vitae est sodales mattis. Nunc
          eleifend elementum sollicitudin. Donec mollis porttitor lacus, sed
          tincidunt felis ultrices id. Vestibulum viverra turpis eu eros
          ultrices maximus ut in sem.
        </Paragraph>
        <Paragraph>
          Nullam sit amet viverra justo, nec tempor metus. Phasellus hendrerit
          porttitor quam, vel posuere libero vehicula eu. Donec egestas ante ut
          dolor laoreet, eu euismod mi venenatis. In elementum velit lobortis
          lectus euismod, sed mattis ipsum pharetra. Quisque imperdiet hendrerit
          mi ac semper. Vestibulum elementum quis ipsum ac semper. Morbi ac nisl
          vitae turpis vestibulum convallis vel id ipsum. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Donec vitae dui velit.
        </Paragraph>
      </Section>
    );
    expect(container).toMatchSnapshot();
  });
});
