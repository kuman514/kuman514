import Paragraph from '^/shared/paragraph';
import SecondaryTitle from '^/shared/secondary-title';
import { ParagraphProps } from '^/shared/paragraph/types';
import { TitleProps } from '^/shared/title/types';

interface Props {
  titleProp: TitleProps;
  paragraphProps: ParagraphProps[];
}

export default function TitleAndParagraph({
  titleProp,
  paragraphProps,
}: Props) {
  return (
    <>
      <SecondaryTitle customClassName={titleProp.customClassName}>
        {titleProp.children}
      </SecondaryTitle>
      {paragraphProps.map((props, index) => (
        <Paragraph key={`paragraph-${index}`} {...props} />
      ))}
    </>
  );
}
