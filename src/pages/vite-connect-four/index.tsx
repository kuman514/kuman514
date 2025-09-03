import Section from '^/entities/section';
import ExternalAnchor from '^/shared/external-anchor';
import Paragraph from '^/shared/paragraph';
import Tag from '^/shared/tag';
import Title from '^/shared/title';
import UnorderedBulletList from '^/shared/unordered-bullet-list';

import MostRecentlyEdited from '^/shared/most-recently-edited';
import PageTemplate from '^/shared/page-template';

interface Props {
  editedDate?: Date;
}

export default function ViteConnectFourPage({ editedDate }: Props) {
  // const renderBanner = (
  //   <div aria-label="banner-image" className="pt-16 w-full h-[50vh]">
  //     <Image
  //       className="w-full h-full object-cover"
  //       src={ViteConnectFourBannerPng}
  //       alt="ViteConnectFour 배너 이미지"
  //     />
  //   </div>
  // );

  const renderEditedDate = editedDate ? (
    <MostRecentlyEdited editedDate={editedDate} />
  ) : null;

  const renderContent = (
    <>
      <Title customClassName="text-4xl sm:text-5xl md:text-6xl">
        Vite 커넥트 포 (ViteConnectFour)
      </Title>

      <Section title="개요">
        <UnorderedBulletList>
          <li>.</li>
          <li>개인 프로젝트</li>
          <li>
            구현 내용 요약
            <UnorderedBulletList>
              <li>.</li>
            </UnorderedBulletList>
          </li>
        </UnorderedBulletList>
      </Section>

      <Section title="방문하기">
        [{' '}
        <ExternalAnchor href="https://github.com/kuman514/ViteConnectFour">
          GitHub 저장소
        </ExternalAnchor>{' '}
        ] [{' '}
        <ExternalAnchor href="https://vite-connect-four.vercel.app/">
          게임 플레이
        </ExternalAnchor>{' '}
        ]
      </Section>

      <Section
        title="이 프로젝트를 만든 이유"
        subsectionClassName="flex flex-row flex-wrap gap-2"
      >
        <Paragraph>.</Paragraph>
      </Section>

      <Section title="플레이 방법 (Windows Chrome 기준)">
        <UnorderedBulletList>
          <li>.</li>
        </UnorderedBulletList>
      </Section>

      <Section
        title="사용한 기술 스택"
        subsectionClassName="flex flex-row flex-wrap gap-2"
      >
        <Tag>React</Tag>
        <Tag>TypeScript</Tag>
        <Tag>Vite</Tag>
        <Tag>Yarn Berry</Tag>
        <Tag>Zustand</Tag>
      </Section>
    </>
  );

  return (
    <PageTemplate customClassName="w-full flex flex-col items-center">
      {/* {renderBanner} */}
      <div className="flex flex-col px-8 py-24 gap-16 sm:px-24 max-w-6xl">
        {renderEditedDate}
        {renderContent}
      </div>
    </PageTemplate>
  );
}
