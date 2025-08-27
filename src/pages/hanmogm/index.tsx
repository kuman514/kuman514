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
import HanmogmBannerPng from './assets/hanmogm-banner.png';
import HanmogmCollectionListPng from './assets/hanmogm-collection-list.png';
import HanmogmDrinkTastingPng from './assets/hanmogm-drink-tasting.png';
import HanmogmDrinkPng from './assets/hanmogm-drink.png';
import HanmogmHomePng from './assets/hanmogm-home.png';
import HanmogmRequestStatusPng from './assets/hanmogm-request-status.png';
import HanmogmSearchPng from './assets/hanmogm-search.png';
import HanmogmTastingNoteFormPage1Png from './assets/hanmogm-tasting-note-form-page-1.png';
import HanmogmTastingNoteFormPage2Png from './assets/hanmogm-tasting-note-form-page-2.png';
import HanmogmTastingNoteListPng from './assets/hanmogm-tasting-note-list.png';
import HanmogmTastingNotePng from './assets/hanmogm-tasting-note.png';

interface Props {
  editedDate?: Date;
}

export default function HanmogmPage({ editedDate }: Props) {
  const renderBanner = (
    <div aria-label="banner-image" className="pt-16 w-full h-[50vh]">
      <Image
        className="w-full h-full object-cover"
        src={HanmogmBannerPng}
        alt="한모금 배너 이미지"
      />
    </div>
  );

  const renderEditedDate = editedDate ? (
    <MostRecentlyEdited editedDate={editedDate} />
  ) : null;

  const renderContent = (
    <>
      <Title customClassName="text-4xl sm:text-5xl md:text-6xl">
        한모금 (Hanmogm)
      </Title>

      <div className="w-full flex flex-row flex-wrap justify-center items-center gap-4">
        <Image
          src={HanmogmHomePng}
          alt="한모금 홈 화면"
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={HanmogmSearchPng}
          alt="한모금 검색 화면"
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={HanmogmDrinkPng}
          alt="한모금 주류 상세 화면 상단"
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={HanmogmDrinkTastingPng}
          alt="한모금 주류 상세 화면 하단"
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={HanmogmTastingNoteFormPage1Png}
          alt="한모금 시음기록 작성 화면 1페이지"
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={HanmogmTastingNoteFormPage2Png}
          alt="한모금 시음기록 작성 화면 2페이지"
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={HanmogmTastingNotePng}
          alt="한모금 시음기록 상세 화면"
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={HanmogmTastingNoteListPng}
          alt="한모금 나의 전체 시음기록 화면"
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={HanmogmCollectionListPng}
          alt="한모금 나의 시음기록 모음집 화면"
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={HanmogmRequestStatusPng}
          alt="한모금 내 주류 요청 현황 화면"
          className="w-fit max-h-80 object-contain"
        />
      </div>

      <Section title="개요">
        <UnorderedBulletList>
          <li>
            iOS + Android를 타겟으로 한, 각종 주류 정보를 열람하고 시음기록을
            작성할 수 있는 테이스팅 노트 앱.
          </li>
          <li>
            팀 구성: PM 1명, 기획자 1명, 디자이너 1명, 백엔드 2명, 프론트엔드
            2명 (본인(원년)과 최근 합류 1명)
          </li>
          <li>
            담당한 작업 내용
            <UnorderedBulletList>
              <li>
                Expo로 React Native 프로젝트를 세팅하여, iOS + Android
                타겟이면서도 MacOS뿐만 아니라 Windows로도 개발할 수 있게 만듦.
              </li>
              <li>
                React Navigation의 Native Stack Navigator를 사용하여 스크린
                라우팅.
              </li>
              <li>
                Axios를 이용하여 시음기록 등록/수정/삭제/열람, 주류 상세, 주류
                요청, 이미지 업로드, 시음기록 모음집 등등 백엔드 API와 연계된
                각종 기능 구현.
              </li>
              <li>
                Amazon Cognito Identity JS를 이용하여 회원가입, 로그인,
                회원탈퇴, 비밀번호 초기화, 이메일 인증 등의 유저 관련 기능 구현.
              </li>
              <li>
                각종 기능에 대해 로딩 여부, 에러 여부, 결과값을 담은 커스텀 훅을
                구축.
              </li>
              <li>
                expo-updates 패키지와 Expo Channel을 활용한 CI/CD를 구축하여,
                Expo 무료 플랜에서 월 30회(iOS 15회)까지만 할 수 있는 EAS
                Build를 절약함.
              </li>
              <li>
                App Store Connect와 Google Play Console을 통해 iOS와 Android 앱
                릴리즈.
              </li>
            </UnorderedBulletList>
          </li>
        </UnorderedBulletList>
      </Section>

      <Section title="앱 다운로드">
        [{' '}
        <ExternalAnchor href="https://apps.apple.com/kr/app/%ED%95%9C%EB%AA%A8%EA%B8%88-hanmogm/id6502346193">
          iOS 다운로드
        </ExternalAnchor>{' '}
        ] [{' '}
        <ExternalAnchor href="https://play.google.com/store/apps/details?id=com.hanmogm.hanmogm">
          Android 다운로드
        </ExternalAnchor>{' '}
        ]
      </Section>

      <Section
        title="이 프로젝트가 시작된 계기"
        subsectionClassName="flex flex-row flex-wrap gap-2"
      >
        <Paragraph>
          친구가 초대해서 참석한 저녁 식사 중, 함께 참여한 PM님의 주도로 팀이
          결성되었습니다.
        </Paragraph>
        <Paragraph>
          요즘은 소주나 맥주보단 하이볼이나 와인같이 다양한 맛과 종류의 술을
          즐기는 것이 트렌드입니다. 그러나 이 트렌드와는 맞지 않게,{' '}
          <Emphasize>
            찾고자 하는 주류의 정보는 여기저기 흩어져있어 찾기 힘들었으며,
            기존에 있던 테이스팅 노트 앱들도 운영이 멈추었거나 기능이 부족하다는
            문제점
          </Emphasize>
          이 있었습니다. 이러한 문제를 해결하기 위해,{' '}
          <Emphasize>
            주류 검색 및 시음기록 작성/관리를 더욱 쉽고 편리하게 해주는 테이스팅
            노트 앱을 만들고자
          </Emphasize>{' '}
          하는 사람들을, 직접 대면이나 렛플 등의 팀 프로젝트 플랫폼을 통해
          모집하여 개발을 시작했습니다.
        </Paragraph>
      </Section>

      <Section
        title="사용한 기술 스택"
        subsectionClassName="flex flex-row flex-wrap gap-2"
      >
        <Tag>Expo</Tag>
        <Tag>React Native</Tag>
        <Tag>TypeScript</Tag>
        <Tag>Axios</Tag>
        <Tag>Zustand</Tag>
      </Section>

      <Section title="React Native 프로젝트를 Expo로 만든 이유?">
        <Paragraph>
          해당 앱은{' '}
          <Emphasize>iOS + Android를 타겟으로 하는 모바일 앱</Emphasize>이지만,{' '}
          <Emphasize>MacOS 뿐만 아니라 Windows로도 개발</Emphasize>하기 때문에,{' '}
          <Emphasize>Expo를 사용하는 것이 유일한 선택지</Emphasize>였습니다.
          실제 React Native 공식 문서에서도{' '}
          <ExternalAnchor href="https://reactnative.dev/docs/set-up-your-environment?platform=ios&os=windows#unsupported">
            CLI 등을 통해 직접 세팅할 때 Windows로 iOS 앱을 만드는건 지원되지
            않는다고 하며, 대체 방안으로 Expo와 Expo Go를 사용할 것을 안내합니다
          </ExternalAnchor>
          . 그래서, Expo로 React Native 프로젝트를 세팅함으로써, iOS + Android
          타겟인 이 앱을 MacOS뿐만 아니라 Windows로도 개발할 수 있게
          만들었습니다.
        </Paragraph>
      </Section>

      <Section title="협업 방법">
        <Paragraph>
          저희 팀은{' '}
          <Emphasize>
            Slack, Figma, Jira를 활용하여 정기 회의, 디자인 반영, 태스크
            브레이크다운, 개발 일정 산정, 진행상황 및 요청사항 보고 등등의 소통
          </Emphasize>
          을 진행해왔습니다. 특히, 저는 프론트엔드 개발자로서 기획자분이랑
          디자이너분과의 소통이 가장 활발했는데,{' '}
          <Emphasize>
            각종 컴포넌트나 스크린들이 어떤 화면에서 어떤 형태로 표시되어야
            하며, 어떤 상호작용이 발생했을 때 또는 어떤 상태가 변할 때 어떤
            변화가 있어야 하는지, 표시할 데이터가 비어있거나 에러가 발생할 경우
            어떻게 표시해야 하는지
          </Emphasize>{' '}
          등등에 대한 논의가 주를 이뤘습니다. 이에 대한 논의가 결정되었을 때,
          예상되는 개발 일정을 산정하고 구현을 시작합니다.
        </Paragraph>
      </Section>

      <Section
        title="진행 상황 공유 방법"
        subsectionClassName="flex flex-col gap-4"
      >
        <Paragraph>
          빌드 구축 전에는{' '}
          <ExternalAnchor href="https://expo.dev/go">Expo Go</ExternalAnchor>를
          활용하였습니다. Expo Go는 개발 중인 앱을 따로 빌드하여 설치하지 않고도
          QR 코드를 스캔하거나 <Tag>exp://</Tag>로 시작하는 URL에 접속하여{' '}
          <Emphasize>앱의 프리뷰를 볼 수 있게 해주는 앱</Emphasize>입니다. 이
          앱을 통해,{' '}
          <Emphasize>
            빌드를 따로 만들지 않고도 팀원들에게 신속하게 프리뷰를 제공
          </Emphasize>
          할 수 있었습니다.
        </Paragraph>
        <Paragraph>
          <Tag>expo-updates</Tag> 패키지와 Expo Channel을 활용하여,{' '}
          <Emphasize>CI/CD가 가능한 빌드를 구축</Emphasize>하였습니다.{' '}
          <Tag>eas.json</Tag>의 <Tag>build.(프로파일명).channel</Tag>에 원하는
          채널을 할당시키면, 그 빌드는 프로파일에 해당되는 채널의 업데이트를
          따라갑니다. (
          <ExternalAnchor href="https://docs.expo.dev/build/updates/">
            참고
          </ExternalAnchor>
          ) 이를 통해{' '}
          <Emphasize>코드만 푸시해도 업데이트가 되는 빌드를 구축</Emphasize>
          함으로써,{' '}
          <Emphasize>
            무료 플랜에서 월 최대 30회까지(Android 빌드 기준, iOS는 최대
            15회)밖에 안 되는
          </Emphasize>{' '}
          <Tag>eas build</Tag>의 사용 횟수를 획기적으로 줄일 수 있었습니다.
        </Paragraph>
      </Section>

      <Section
        title="이 프로젝트가 받은 피드백"
        subsectionClassName="flex flex-col gap-4"
      >
        <Paragraph>
          주류 찾기나 테이스팅 노트 작성 등,{' '}
          <Emphasize>
            주류 시음에 관한 각종 기능이 하나의 앱에 들어가있어 편리하다
          </Emphasize>
          는 피드백이 있었습니다. 술을 이것저것 마시다 보면 어떤 맛의 술이었는지
          헷갈리게 되어 테이스팅 노트나 술 블로그를 하셨던 고객께 유용하다는
          평가를 받았습니다. 또한, 주류 구입 전에 술의 평가가 어떤지 알아보려고
          비어레이트같은 사이트에 자주 방문하는 고객께도{' '}
          <Emphasize>술을 쉽게 검색할 수 있어 유용하다</Emphasize>는 평가를
          받았습니다.
        </Paragraph>
        <Paragraph>
          하지만,{' '}
          <Emphasize>
            대소문자/숫자/특수문자 등등을 입력하는 비밀번호에서 회원가입을 잠시
            머뭇거렸다
          </Emphasize>
          는 피드백도 있었습니다. 현재 한모금은 이메일과 비밀번호를 입력하는
          방식의 로그인밖에 지원하지 않는데, 이는 SNS 계정만 있으면 바로 가입 및
          로그인이 되는 소셜 로그인에 비해 번거롭기 때문입니다. 따라서 해당
          문제를 해결하기 위해, 로그인을 더욱 편리하게 만들기 위한 소셜 로그인
          기능을 구축하는 중입니다.
        </Paragraph>
      </Section>

      <Section
        title="이 프로젝트를 통해 배운 점"
        subsectionClassName="flex flex-col gap-4"
      >
        <Paragraph>
          React Native를 통해{' '}
          <Emphasize>
            React의 지식만 가지고 모바일 앱을 제작할 수 있다는 점은 정말 매력적
          </Emphasize>
          이었지만, 실제로 React Native 프로젝트를 진행하다 보니{' '}
          <Emphasize>
            플랫폼 별 의존성과 동작의 차이를 동시에 관리해야 한다
          </Emphasize>
          는 현실과 마주해야 했습니다. 대표적으로,{' '}
          <Emphasize>
            동일한 패키지더라도 iOS에서와 Android에서의 UI 렌더링 방식이나 권한
            처리 방식이 다르게 동작한다는 점
          </Emphasize>
          , 빌드 후 App Store Connect와 Play Store Console에{' '}
          <Emphasize>
            앱을 제출하는 과정에서도 플랫폼별로 서로 다른 과정이나 대응이
            필요하다는 점
          </Emphasize>{' '}
          등등이 있습니다. 이를 통해, 크로스 플랫폼이란 단 한 번에 끝나는 개발이
          아니라, <Emphasize>두 플랫폼을 동시에 고려한 정밀한 조율</Emphasize>
          이라는 사실을 깨달았습니다.
        </Paragraph>
        <Paragraph>
          사이드 프로젝트는 소규모 팀으로 진행되기 때문에,{' '}
          <Emphasize>
            각자의 외부 일정이 프로젝트에 큰 영향을 줄 수 있습니다.
          </Emphasize>{' '}
          특히 야근, 급한 일정, 기술적 난관 등에 직면했을 때,{' '}
          <Emphasize>
            최대한 신속 정확하게 팀원에게 상황을 공유해야 팀 전체에 미치는
            영향을 줄일 수 있고, 문제 해결을 위한 시간적 여유도 확보된다
          </Emphasize>
          는 점을 배웠습니다.
        </Paragraph>
        <Paragraph>
          어떤 업무를 진행할 땐,{' '}
          <Emphasize>
            {'"'}할 것{'"'}과 {'"'}하지 말아야 할 것{'"'}을 명확히 구분하고
            진행해야 함
          </Emphasize>
          을 배웠습니다. 완벽하게 진행하려고 하면, 결국 완벽은 커녕 핵심까지
          놓치게 됩니다. 따라서,{' '}
          <Emphasize>
            핵심과 거리가 먼 것은 일단 백로그로 두어 여유가 있거나 다음 기회를
            잡았을 때 진행
          </Emphasize>
          하는 것이 좋습니다.
        </Paragraph>
        <Paragraph>
          외부 패키지를 사용할 때는 단순히 이용하면서 문서만 보는 것이 아니라,{' '}
          <Emphasize>
            GitHub 이슈, 체인지로그, 소스코드 등을 통해 패키지의 동작 방식과
            잠재적인 문제를 주기적으로 확인해야 한다
          </Emphasize>
          는 점도 배웠습니다.
        </Paragraph>
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
