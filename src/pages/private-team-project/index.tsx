import Section from '^/entities/section';
import Emphasize from '^/shared/emphasize';
import ExternalAnchor from '^/shared/external-anchor';
import Paragraph from '^/shared/paragraph';
import Tag from '^/shared/tag';
import Title from '^/shared/title';
import UnorderedBulletList from '^/shared/unordered-bullet-list';

export default function PrivateTeamProjectPage() {
  return (
    <main className="flex min-h-screen flex-col px-8 py-24 gap-16 sm:px-24">
      <Title customClassName="text-4xl sm:text-5xl md:text-6xl">
        비공개 팀 프로젝트
      </Title>

      <Section title="개요">
        <UnorderedBulletList>
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
                Axios를 이용하여 게시물 등록/수정/삭제/열람과 이미지 업로드
                등등, 백엔드 API와 연계된 각종 기능 구현.
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

      <Section
        title="사용한 기술 스택"
        subsectionClassName="flex flex-row flex-wrap gap-2"
      >
        <Tag>Expo</Tag>
        <Tag>React Native</Tag>
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
    </main>
  );
}
