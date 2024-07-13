import TitleAndParagraph from '^/entities/title-paragraph';
import Emphasize from '^/shared/emphasize';
import Title from '^/shared/title';

/**
 * @todo
 * This is fake content. Change into real one.
 */

export default function WhoAmIPage() {
  return (
    <main className="flex min-h-screen flex-col px-8 py-24 gap-4 sm:px-24">
      <code className="font-mono font-bold">app/whoami/page.tsx</code>
      <code className="font-mono font-bold">
        This is fake content for layouts. The content will be changed into real
        one soon.
      </code>
      <Title customClassName="text-4xl sm:text-5xl md:text-6xl">
        Lorem ipsum dolor sit amet.
      </Title>
      <TitleAndParagraph
        titleProp={{
          children: (
            <>
              <Emphasize>Lorem ipsum dolor sit amet</Emphasize>, consectetur
              adipiscing elit.
            </>
          ),
          customClassName: 'text-2xl sm:text-3xl md:text-4xl',
        }}
        paragraphProps={[
          {
            children:
              'Duis sodales ipsum odio, eu accumsan dui ullamcorper sit amet. Nulla tristique ornare cursus. Morbi egestas porta facilisis. Praesent ac ultricies nunc, pretium ullamcorper ipsum. Suspendisse placerat imperdiet ipsum, nec condimentum orci accumsan a. Nullam sollicitudin justo in ex ullamcorper posuere. Vestibulum finibus diam eu metus maximus lacinia. Praesent eleifend hendrerit libero quis egestas. Sed vitae venenatis ante.',
            customClassName:
              'first-letter:text-2xl first-letter:text-green-600 first-letter:font-bold',
          },
        ]}
      />
      <TitleAndParagraph
        titleProp={{
          children: (
            <>
              Class aptent <Emphasize>taciti sociosqu</Emphasize> ad.
            </>
          ),
          customClassName: 'text-2xl sm:text-3xl md:text-4xl',
        }}
        paragraphProps={[
          {
            children:
              'Curabitur ullamcorper, mi in tristique sagittis, diam lorem malesuada sapien, vitae dictum nibh lectus ac felis. Donec efficitur nulla libero, vel pretium erat malesuada non. Fusce vel lectus vel ipsum maximus iaculis. Fusce et eleifend nibh, scelerisque venenatis arcu. Nam mattis, lorem ac ultricies viverra, enim nulla convallis erat, id pretium mauris nibh in felis. Donec orci metus, ultricies nec mi id, vestibulum pulvinar ante. Nulla vel lectus erat. Praesent fermentum urna neque, quis condimentum orci ornare eget. Nullam quis magna a diam mattis bibendum eu at nulla. Vivamus nec dignissim augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sagittis at nisi sit amet malesuada. Aenean vitae ligula sit amet erat auctor sagittis in a lacus.',
          },
        ]}
      />
      <TitleAndParagraph
        titleProp={{
          children: (
            <>
              Vivamus <Emphasize>tempor rhoncus elit</Emphasize> ut posuere.
            </>
          ),
          customClassName: 'text-2xl sm:text-3xl md:text-4xl',
        }}
        paragraphProps={[
          {
            children:
              'Fusce ultricies quis risus quis mattis. In volutpat nec mauris eget semper. Nam vel arcu quis sapien commodo cursus. Donec pellentesque mollis cursus. In hac habitasse platea dictumst. Nulla eget dapibus diam, in viverra mi. Aliquam erat volutpat. Nunc vitae est sed eros pulvinar lobortis. Morbi sit amet elementum quam. Sed dolor erat, imperdiet eget eleifend et, imperdiet quis mauris. In hac habitasse platea dictumst. Proin nec pellentesque lacus. Morbi convallis leo a dapibus lacinia.',
          },
        ]}
      />
    </main>
  );
}
