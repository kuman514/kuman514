import Image from 'next/image';

import ProjectPageTemplate from '^/entities/project/page-template';
import Section from '^/entities/section';
import Emphasize from '^/shared/emphasize';
import ExternalAnchor from '^/shared/external-anchor';
import Paragraph from '^/shared/paragraph';
import Tag from '^/shared/tag';
import Title from '^/shared/title';
import UnorderedBulletList from '^/shared/unordered-bullet-list';

import Hanmogm1Png from './assets/hanmogm-1.png';
import Hanmogm2Png from './assets/hanmogm-2.png';
import Hanmogm3Png from './assets/hanmogm-3.png';
import Hanmogm4Png from './assets/hanmogm-4.png';
import Hanmogm5Png from './assets/hanmogm-5.png';
import Hanmogm6Png from './assets/hanmogm-6.png';
import HanmogmBannerPng from './assets/hanmogm-banner.png';

export default function HanmogmPage() {
  return (
    <ProjectPageTemplate
      bannerImage={{
        imageData: HanmogmBannerPng,
        altText: '한모금 배너 이미지',
      }}
    >
      <Title customClassName="text-4xl sm:text-5xl md:text-6xl">
        한모금 (Hanmogm)
      </Title>

      <div className="w-full flex flex-row flex-wrap justify-center items-center gap-4">
        <Image
          src={Hanmogm1Png}
          alt=""
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={Hanmogm2Png}
          alt=""
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={Hanmogm3Png}
          alt=""
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={Hanmogm4Png}
          alt=""
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={Hanmogm5Png}
          alt=""
          className="w-fit max-h-80 object-contain"
        />
        <Image
          src={Hanmogm6Png}
          alt=""
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
            1명 (본인)
          </li>
          <li>
            작업 내용
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
                Axios를 이용하여 시음기록 등록/수정/삭제/열람, 주류 요청, 이미지
                업로드 등등 백엔드 API와 연계된 각종 기능 구현.
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
            어떻게 표시해야 하는지{' '}
          </Emphasize>
          등등에 대한 논의가 주를 이뤘습니다. 이에 대한 논의가 결정되었을 때,
          예상되는 개발 일정을 산정하고 구현을 시작합니다.
        </Paragraph>
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
    </ProjectPageTemplate>
  );
}
