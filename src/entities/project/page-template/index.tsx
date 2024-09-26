import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

import MostRecentlyEdited from '^/shared/most-recently-edited';
import { MOST_RECENTLY_EDITED_DATE } from '^/shared/most-recently-edited/date';
import PageTemplate from '^/shared/page-template';

interface Props {
  bannerImage?: {
    imageData: StaticImageData;
    altText: string;
  };
  children?: ReactNode;
}

export default function ProjectPageTemplate({ bannerImage, children }: Props) {
  const renderBanner = bannerImage ? (
    <div aria-label="banner-image" className="pt-16 w-full h-[50vh]">
      <Image
        className="w-full h-full object-cover"
        {...bannerImage.imageData}
        alt={bannerImage.altText}
      />
    </div>
  ) : null;

  return (
    <PageTemplate customClassName="w-full flex flex-col items-center">
      {renderBanner}
      <div className="flex flex-col px-8 py-24 gap-16 sm:px-24 max-w-6xl">
        <MostRecentlyEdited editedDate={MOST_RECENTLY_EDITED_DATE} />
        {children}
      </div>
    </PageTemplate>
  );
}
