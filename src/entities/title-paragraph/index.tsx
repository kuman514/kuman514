import { ReactNode } from 'react';

import Paragraph from '^/shared/paragraph';
import SecondaryTitle from '^/shared/secondary-title';
import { ParagraphProps } from '^/shared/paragraph/types';

interface Props {
  title: ReactNode;
  titleCustomClassName?: string;
  paragraphProps: ParagraphProps[];
}

export default function TitleAndParagraph({
  title,
  titleCustomClassName,
  paragraphProps,
}: Props) {
  return (
    <>
      <SecondaryTitle customClassName={titleCustomClassName}>
        {title}
      </SecondaryTitle>
      {paragraphProps.map((props, index) => (
        <Paragraph key={`paragraph-${index}`} {...props} />
      ))}
    </>
  );
}
