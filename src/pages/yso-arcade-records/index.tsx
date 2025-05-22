import ProjectPageTemplate from '^/entities/project/page-template';
import ExternalAnchor from '^/shared/external-anchor';
import Paragraph from '^/shared/paragraph';
import Tag from '^/shared/tag';
import Title from '^/shared/title';
import UnorderedBulletList from '^/shared/unordered-bullet-list';

import Section from '^/entities/section';
import Emphasize from '^/shared/emphasize';

import YSOArcadeRecordsPng from './assets/yso-arcade-records.png';

export default function YSOArcadeRecordsPage() {
  return (
    <ProjectPageTemplate
      bannerImage={{
        imageData: YSOArcadeRecordsPng,
        altText: 'YSOArcadeRecordsPage 배너 이미지',
      }}
    >
      <Title customClassName="text-4xl sm:text-5xl md:text-6xl">
        YSOArcadeRecords
      </Title>

      <div className="w-full flex flex-row flex-wrap justify-center items-center gap-4">
        {/**
         * @todo
         * Add record & review list, article, form images.
         */}
      </div>

      <Section title="개요">
        <UnorderedBulletList>
          <li>개인 프로젝트</li>
          <li>
            구현 내용
            <UnorderedBulletList>
              <li>
                {/**
                 * @todo
                 * Add what I did
                 */}
              </li>
            </UnorderedBulletList>
          </li>
        </UnorderedBulletList>
      </Section>

      <Section title="방문하기">
        [{' '}
        <ExternalAnchor href="https://github.com/kuman514/YSOArcadeRecords">
          GitHub 저장소
        </ExternalAnchor>{' '}
        ] [{' '}
        <ExternalAnchor href="https://yso-arcade-records.vercel.app/">
          사이트
        </ExternalAnchor>{' '}
        ]
      </Section>

      <Section
        title="이 프로젝트를 만든 이유"
        subsectionClassName="flex flex-row flex-wrap gap-2"
      >
        <Paragraph>
          슈팅게임 동호인들과 더욱 원활하게 교류하기 위해 제작되었습니다.
          기존에는 SNS나 디스코드 등의 메신저로 교류하였으나, 이러한 교류 수단은
          다른 종류의 글이나 메시지까지 난잡하게 섞여 있어 슈팅게임 기록을
          제대로 찾아보기 어려운 문제를 안고 있었습니다. 이러한 문제를
          해결하고자 제가 달성한 각종 기록을 더욱 쉽게 열람하고 공유할 수 있는
          사이트를 직접 개발하였습니다.
        </Paragraph>
        {/**
         * @todo
         * Append improvements from YSOShmupRecords
         */}
      </Section>

      <Section
        title="사용한 기술 스택"
        subsectionClassName="flex flex-row flex-wrap gap-2"
      >
        <Tag>Next.js</Tag>
        <Tag>React</Tag>
        <Tag>TypeScript</Tag>
        <Tag>Axios</Tag>
        <Tag>Vercel</Tag>
        <Tag>Supabase</Tag>
      </Section>

      <Section
        title="스켈레톤 컴포넌트 적용"
        subsectionClassName="flex flex-col gap-4"
      >
        <div className="w-full flex flex-row flex-wrap justify-center items-center gap-4">
          {/**
           * @todo
           * Add images about skeleton
           */}
        </div>
        <Paragraph>
          <Emphasize>
            스켈레톤 컴포넌트는 데이터를 가져오는 동안 임시 콘텐츠를 표시하는
            컴포넌트
          </Emphasize>
          입니다. 사용자는 콘텐츠를 기다리다가 쉽게 지치고 지루함을 느끼므로,
          데이터를 가져오는 동안 단순히 빈 화면만 보여준다면 많은 사람들은
          사이트를 떠나게 될 것입니다. 그래서 이를 방지하기 위해,
          <Emphasize>
            애니메이션 효과가 들어간 스켈레톤 컴포넌트를 직접 만들어, 기록
            목록이나 기록 아티클 로딩 등에 적용
          </Emphasize>
          하였습니다.
        </Paragraph>
      </Section>

      <Section
        title="Supabase와 서버 액션을 사용"
        subsectionClassName="flex flex-col gap-4"
      >
        {/**
         * @todo
         * Add what I did with Supabase and Server Actions.
         */}
      </Section>
    </ProjectPageTemplate>
  );
}
