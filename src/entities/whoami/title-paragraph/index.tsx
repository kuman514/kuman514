import { ReactNode } from 'react';

import Paragraph from '^/shared/paragraph';
import SecondaryTitle from '^/shared/secondary-title';

interface Props {
  title: ReactNode;
  titleCustomClassName?: string;

  paragraph: ReactNode;
  paragraphCustomClassName?: string;
}

export default function WhoAmIContentTitleAndParagraph({
  title,
  titleCustomClassName,
  paragraph,
  paragraphCustomClassName,
}: Props) {
  return (
    <>
      <SecondaryTitle customClassName={titleCustomClassName}>
        {title}
      </SecondaryTitle>
      <Paragraph customClassName={paragraphCustomClassName}>
        {paragraph}
      </Paragraph>
    </>
  );
}
