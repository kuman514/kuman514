import Image from 'next/image';

import Section from '^/entities/section';
import Emphasize from '^/shared/emphasize';
import ExternalAnchor from '^/shared/external-anchor';
import Paragraph from '^/shared/paragraph';
import Tag from '^/shared/tag';
import Title from '^/shared/title';
import UnorderedBulletList from '^/shared/unordered-bullet-list';

import MostRecentlyEdited from '^/shared/most-recently-edited';
import PageTemplate from '^/shared/page-template';
import YSOArcadeRecordsCreateRecord1Png from './assets/yso-arcade-records-create-record-1.png';
import YSOArcadeRecordsCreateRecord2Png from './assets/yso-arcade-records-create-record-2.png';
import YSOArcadeRecordsImageViewerPng from './assets/yso-arcade-records-image-viewer.png';
import YSOArcadeRecordsIntroPng from './assets/yso-arcade-records-intro.png';
import YSOArcadeRecordsPostListSkeletonPng from './assets/yso-arcade-records-post-list-skeleton.png';
import YSOArcadeRecordsRecordArticlePng from './assets/yso-arcade-records-record-article.png';
import YSOArcadeRecordsRecordListPng from './assets/yso-arcade-records-record-list.png';
import YSOArcadeRecordsReviewArticlePng from './assets/yso-arcade-records-review-article.png';
import YSOArcadeRecordsReviewListPng from './assets/yso-arcade-records-review-list.png';
import YSOArcadeRecordsSidebarPng from './assets/yso-arcade-records-sidebar.png';
import YSOArcadeRecordsPng from './assets/yso-arcade-records.png';

interface Props {
  editedDate?: Date;
}

export default function YSOArcadeRecordsPage({ editedDate }: Props) {
  const renderBanner = (
    <div aria-label="banner-image" className="pt-16 w-full h-[50vh]">
      <Image
        className="w-full h-full object-cover"
        src={YSOArcadeRecordsPng}
        alt="YSOArcadeRecordsPage 배너 이미지"
      />
    </div>
  );

  const renderEditedDate = editedDate ? (
    <MostRecentlyEdited editedDate={editedDate} />
  ) : null;

  const renderContent = (
    <>
      <Title customClassName="text-4xl sm:text-5xl md:text-6xl">
        YSOArcadeRecords
      </Title>

      <div className="w-full flex flex-row flex-wrap justify-center items-center gap-4">
        <Image
          src={YSOArcadeRecordsIntroPng}
          alt="YSOShmupRecords 인트로 페이지"
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={YSOArcadeRecordsRecordListPng}
          alt="YSOShmupRecords 각종 아케이드 기록 리스트"
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={YSOArcadeRecordsRecordArticlePng}
          alt="YSOShmupRecords 아케이드 기록 아티클"
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={YSOArcadeRecordsCreateRecord1Png}
          alt="YSOShmupRecords 기록 생성 상단 부분"
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={YSOArcadeRecordsCreateRecord2Png}
          alt="YSOShmupRecords 기록 생성 하단 부분"
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={YSOArcadeRecordsReviewListPng}
          alt="YSOShmupRecords 각종 리뷰 리스트"
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={YSOArcadeRecordsReviewArticlePng}
          alt="YSOShmupRecords 리뷰 아티클"
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={YSOArcadeRecordsImageViewerPng}
          alt="YSOShmupRecords 이미지 뷰어"
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={YSOArcadeRecordsSidebarPng}
          alt="YSOShmupRecords 이미지 뷰어"
          className="w-fit max-h-80 object-contain"
        />
      </div>

      <Section title="개요">
        <UnorderedBulletList>
          <li>개인 프로젝트</li>
          <li>
            구현 내용
            <UnorderedBulletList>
              <li>
                프로젝트 세팅, 태스크 브레이크다운, 퍼블리싱, 기능 구현, 배포,
                문서 및 업데이트 로그 작성, 유지보수를 담당함.
              </li>
              <li>
                Next.js의 App Router를 활용하여 파일 시스템 기반의 간단한 페이지
                라우팅.
              </li>
              <li>기록 열람, 외부로 공유, 이미지 뷰어 등등 각종 기능 구현.</li>
              <li>
                데이터를 가져오는 동안 UI가 멈춰있어 보이지 않기 위해 스켈레톤
                컴포넌트 적용.
              </li>
              <li>
                Supabase와 Server Actions, Route Handler를 사용하여, 데이터
                생성/열람/수정/삭제를 단 하나의 사이트에서 모두 할 수 있게 만듦.
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
          <Emphasize>
            다른 종류의 글이나 메시지까지 난잡하게 섞여 있어 슈팅게임 관련
            내용을 제대로 찾아보기 어려운 문제
          </Emphasize>
          를 안고 있었습니다. 이러한 문제를 해결하고자{' '}
          <Emphasize>
            제가 달성한 각종 기록, 제게 인상깊었던 게임과 각종 아케이드 관련
            사진 모음집을 더욱 쉽게 열람하고 공유할 수 있는 사이트를 직접 개발
          </Emphasize>
          하였습니다.
        </Paragraph>
        <Paragraph>
          또한, 이 프로젝트는 YSOShmupRecords로부터 이어지며, 레포지토리가
          분산되어 있던 프론트엔드(YSOShmupRecords),
          백엔드(YSOShmupRecordsBackend), 백오피스(Writronics)를{' '}
          <Emphasize>하나의 레포지토리(YSOArcadeRecords)에 통합</Emphasize>하기
          위해 제작되었습니다. 이에 그치지 않고, 라우팅 설정에 추가적인 작업이
          필요한 react-router-dom으로부터 탈피하고,{' '}
          <Emphasize>
            파일 경로만 정해줘도 라우팅 설정이 끝나는, 더 간단한 라우팅 방식
          </Emphasize>
          , 그리고{' '}
          <Emphasize>
            서버 사이드 렌더링을 통해 페이지의 로딩 시간을 감소
          </Emphasize>
          시킬 필요가 있었습니다. 이러한 목적에{' '}
          <Emphasize>가장 적절한 방법이 Next.js 15를 사용하는 것</Emphasize>
          이었습니다.
        </Paragraph>
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
        <Tag>Tailwind CSS</Tag>
      </Section>

      <Section
        title="스켈레톤 컴포넌트 적용"
        subsectionClassName="flex flex-col gap-4"
      >
        <div className="w-full flex flex-row flex-wrap justify-center items-center gap-4">
          <Image
            src={YSOArcadeRecordsPostListSkeletonPng}
            alt="YSOShmupRecords에서 포스트 리스트를 불러오는 중에 나오는 스켈레톤 컴포넌트"
            className="w-fit max-h-80 object-contain"
          />
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
        title="Supabase와 Server Actions, Route Handler 사용"
        subsectionClassName="flex flex-col gap-4"
      >
        <Paragraph>
          기록과 리뷰 등의 데이터를 더욱 쉽게 관리하기 위해,{' '}
          <ExternalAnchor href="https://supabase.com/pricing">
            무료 티어로도 API 무제한 호출이 가능한 Supabase
          </ExternalAnchor>
          와 Server Actions, 그리고 Route Handler를 이용해 데이터베이스와 퍼블릭
          버킷을 연동하여, 하나의 프로젝트에서 기록/리뷰 열람/추가/편집/삭제는
          물론 직접 이미지 업로드하는 것까지 모두 가능하게 만들었습니다. 기록과
          리뷰 열람은 누구나 할 수 있지만 추가/편집/삭제는 관리자 로그인이
          필요하도록 만들었습니다.{' '}
          <ExternalAnchor href="https://vercel.com/docs/errors/FUNCTION_PAYLOAD_TOO_LARGE#troubleshoot">
            이미지는 서버 액션에 올리기에 용량이 너무 큰 탓에
          </ExternalAnchor>
          , 이미지 업로드와 포스트 생성 및 수정은 Route Handler를 통해
          진행하였습니다.
        </Paragraph>
      </Section>

      <Section
        title="아케이드 기록 관련 기능 시연 영상"
        subsectionClassName="flex flex-col gap-4"
      >
        <div className="w-full h-60 sm:h-80">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Fh0yuBlXII8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              borderWidth: 0,
            }}
          />
        </div>
        <div className="w-full h-60 sm:h-80">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/m4y4TCb95c0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              borderWidth: 0,
            }}
          />
        </div>
      </Section>
    </>
  );

  return (
    <PageTemplate customClassName="w-full flex flex-col items-center">
      {renderBanner}
      <div className="flex flex-col px-8 py-24 gap-16 sm:px-24 max-w-6xl">
        {renderEditedDate}
        {renderContent}
      </div>
    </PageTemplate>
  );
}
