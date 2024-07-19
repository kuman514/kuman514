import SecondaryTitle from '^/shared/secondary-title';
import Tag from '^/shared/tag';
import Title from '^/shared/title';
import UnorderedBulletList from '^/shared/unordered-bullet-list';

export default function PrivateTeamProjectPage() {
  return (
    <main className="flex min-h-screen flex-col px-8 py-24 gap-4 sm:px-24">
      <Title customClassName="text-4xl sm:text-5xl md:text-6xl">
        비공개 팀 프로젝트
      </Title>
      <SecondaryTitle customClassName="text-4xl">
        사용한 기술 스택
      </SecondaryTitle>
      <div className="flex flex-row flex-wrap gap-2">
        <Tag>Expo</Tag>
        <Tag>React Native</Tag>
      </div>
      <SecondaryTitle customClassName="text-4xl">개요</SecondaryTitle>
      <UnorderedBulletList>
        <li>
          팀 구성: PM 1명, 기획자 1명, 디자이너 1명, 백엔드 2명, 프론트엔드 1명
          (본인)
        </li>
        <li>
          구현 내용
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
              Axios를 이용하여 게시물 등록/수정/삭제/열람과 이미지 업로드 등등,
              백엔드 API와 연계된 각종 기능 구현.
            </li>
            <li>
              Amazon Cognito Identity JS를 이용하여 회원가입, 로그인, 회원탈퇴,
              비밀번호 초기화, 이메일 인증 등의 유저 관련 기능 구현.
            </li>
            <li>
              각종 기능에 대해 로딩 여부, 에러 여부, 결과값을 담은 커스텀 훅을
              구축.
            </li>
            <li>
              expo-updates 패키지와 Expo Channel을 활용한 CI/CD를 구축하여, Expo
              무료 플랜에서 월 30회(iOS 15회)까지만 할 수 있는 EAS Build를
              절약함.
            </li>
          </UnorderedBulletList>
        </li>
      </UnorderedBulletList>
    </main>
  );
}
