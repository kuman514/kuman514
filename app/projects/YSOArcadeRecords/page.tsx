import Image from 'next/image';

import Section from '^/entities/section';
import Emphasize from '^/shared/emphasize';
import ExternalAnchor from '^/shared/external-anchor';
import MostRecentlyEdited from '^/shared/most-recently-edited';
import PageTemplate from '^/shared/page-template';
import Paragraph from '^/shared/paragraph';
import Tag from '^/shared/tag';
import Title from '^/shared/title';
import UnorderedBulletList from '^/shared/unordered-bullet-list';
import YSOArcadeRecordsHelathPng from '^/pages/yso-arcade-records/assets/yso-arcade-records-health.png';
import YSOArcadeRecordsPostListSkeletonPng from '^/pages/yso-arcade-records/assets/yso-arcade-records-post-list-skeleton.png';
import YSOArcadeRecordsPng from '^/pages/yso-arcade-records/assets/yso-arcade-records.png';
import GalleryListJpg from '^/pages/yso-arcade-records/assets/gallery-list.jpg';
import GalleryJpg from '^/pages/yso-arcade-records/assets/gallery.jpg';
import ImageViewerJpg from '^/pages/yso-arcade-records/assets/image-viewer.jpg';
import RecordForm1Jpg from '^/pages/yso-arcade-records/assets/record-form-1.jpg';
import RecordForm2Jpg from '^/pages/yso-arcade-records/assets/record-form-2.jpg';
import RecordListJpg from '^/pages/yso-arcade-records/assets/record-list.jpg';
import RecordJpg from '^/pages/yso-arcade-records/assets/record.jpg';
import ReviewJpg from '^/pages/yso-arcade-records/assets/review.jpg';
import { MOST_RECENTLY_EDITED_DATE } from '^/shared/most-recently-edited/date';

export default function YSOArcadeRecordsPage() {
  const renderBanner = (
    <div aria-label="banner-image" className="pt-16 w-full h-[50vh]">
      <Image
        className="w-full h-full object-cover"
        src={YSOArcadeRecordsPng}
        alt="YSOArcadeRecordsPage 배너 이미지"
      />
    </div>
  );

  const renderContent = (
    <>
      <Title customClassName="text-4xl sm:text-5xl md:text-6xl">
        YSOArcadeRecords
      </Title>

      <Section
        title="프리뷰"
        subsectionClassName="w-full flex flex-row flex-wrap justify-center items-center gap-4"
      >
        <Image
          src={RecordListJpg}
          alt="YSOShmupRecords 각종 아케이드 기록 리스트"
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={RecordJpg}
          alt="YSOShmupRecords 아케이드 기록 아티클"
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={RecordForm1Jpg}
          alt="YSOShmupRecords 기록 폼 상단 부분"
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={RecordForm2Jpg}
          alt="YSOShmupRecords 기록 폼 하단 부분"
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={ReviewJpg}
          alt="YSOShmupRecords 리뷰 아티클"
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={ImageViewerJpg}
          alt="YSOShmupRecords 이미지 뷰어"
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={GalleryListJpg}
          alt="YSOShmupRecords 갤러리 리스트"
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={GalleryJpg}
          alt="YSOShmupRecords 갤러리 아티클"
          className="w-fit max-h-80 object-contain"
        />
      </Section>

      <Section title="개요">
        <UnorderedBulletList>
          <li>
            Next.js와 Supabase를 활용하여 본인 YSO(kuman514)의 아케이드 게임
            기록, 리뷰, 사진 모음집을 열람하고 공유할 수 있게 만들기 위한
            사이트.
          </li>
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
              <li>
                Supabase, Server Actions, Route Handler를 사용하여, 데이터
                생성/열람/수정/삭제를 단 하나의 사이트에서 모두 할 수 있게 만듦.
              </li>
              <li>
                TanStack Query의 useInfiniteQuery를 이용하여 아케이드
                기록/리뷰/갤러리 등등의 리스트에 대한 무한 스크롤 시스템을 구축.
              </li>
              <li>
                아케이드 기록/리뷰/갤러리 등의 포스트 열람/생성/수정/삭제,
                외부로 공유, 이미지 뷰어 등등 각종 기능 구현.
              </li>
              <li>
                데이터를 가져오는 동안 UI가 멈춰있어 보이지 않기 위해 스켈레톤
                컴포넌트 적용.
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
            서버 사이드 렌더링을 통해 페이지 콘텐츠의 초기 로딩 시간을 감소
          </Emphasize>
          시킬 필요가 있었습니다. 이러한 목적에{' '}
          <Emphasize>가장 적절한 방법이 Next.js를 사용하는 것</Emphasize>
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
        <Tag>TanStack Query</Tag>
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
        title="이 프로젝트를 통해 배운 점"
        subsectionClassName="flex flex-col gap-4"
      >
        <Paragraph>
          데이터를 로딩하거나 서버에 문제가 발생하는 등 불가피한 상황에서도
          사용자에게 앱이 멈췄다는 인상을 주지 않는 것이 중요함을 깨달았습니다.
        </Paragraph>

        <div className="w-full flex flex-row flex-wrap justify-center items-center gap-4">
          <Image
            src={YSOArcadeRecordsPostListSkeletonPng}
            alt="YSOArcadeRecords에서 포스트 리스트를 불러오는 중에 나오는 스켈레톤 컴포넌트"
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

        <div className="w-full flex flex-row flex-wrap justify-center items-center gap-4">
          <Image
            src={YSOArcadeRecordsHelathPng}
            alt="YSOArcadeRecords의 Supabase 데이터베이스 보안 업그레이드를 위해 일시적으로 서비스를 중단한 모습"
            className="w-fit max-h-80 object-contain"
          />
        </div>
        <Paragraph>
          또한, Supabase 데이터베이스의 보안을 향상시키는 업그레이드 등등으로
          인해 불가피하게 서비스를 중단해야 할 경우를 대비하여, Supabase Edge
          Function을 호출하여 앱이 중단되었을 경우 사유, 문의창구와 함께 중단
          안내를 표시하도록 만들었습니다.
        </Paragraph>
      </Section>

      <Section
        title="아케이드 기록 관련 기능 시연 영상"
        subsectionClassName="flex flex-col gap-4"
      >
        <div className="w-full aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/W3deNEYC1Qk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              borderWidth: 0,
            }}
          />
        </div>
        <div className="w-full aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Gv1UgTBXzMI"
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
        <MostRecentlyEdited editedDate={MOST_RECENTLY_EDITED_DATE} />
        {renderContent}
      </div>
    </PageTemplate>
  );
}
