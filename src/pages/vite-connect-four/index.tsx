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
          <li>React + Vite + Zustand를 이용하여 만든, 커넥트 포 게임.</li>
          <li>개인 프로젝트</li>
          <li>
            구현 내용 요약
            <UnorderedBulletList>
              <li>
                프로젝트 세팅, 최소 구현 조건 설정, 태스크 브레이크다운, 기능
                구현, 테스트, 배포, 문서 및 업데이트 로그 작성, 유지보수를
                담당함.
              </li>
              <li>
                커넥트 포 게임, 실행 취소 및 되돌리기 등등 각종 기능 구현.
              </li>
              <li>
                Vite + Yarn Berry로 프로젝트를 세팅하여 Create React App 대비
                로딩 시간 30초 → 5초로 감소, 설치 속도가 5배 빨라짐.
              </li>
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
          <li>플레이어 1이 빨강, 플레이어 2가 노랑.</li>
          <li>
            빨강이 먼저 돌을 놓으며, 이후 두 플레이어가 번갈아가며 돌을
            놓습니다.
          </li>
          <li>돌은 낙하하기 때문에 맨 아래에서부터 쌓입니다.</li>
          <li>
            가로, 세로, 대각선 중 아무 한 방향으로 돌을 4개 이상 연결한
            플레이어가 승리합니다.
          </li>
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
