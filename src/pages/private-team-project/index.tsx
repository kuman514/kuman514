import TitleAndParagraph from '^/entities/title-paragraph';
import Emphasize from '^/shared/emphasize';
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
      <TitleAndParagraph
        titleProp={{
          children: (
            <>
              <Emphasize>Lorem ipsum dolor sit amet</Emphasize>, consectetur
              adipiscing elit.
            </>
          ),
          customClassName: 'text-2xl sm:text-3xl md:text-4xl',
        }}
        paragraphProps={[
          {
            children: (
              <>
                <Emphasize>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Emphasize>{' '}
                Proin sed justo at odio accumsan ultricies. Vestibulum at dolor
                eu mi vulputate varius non a odio. <Tag>Sed lobortis</Tag>{' '}
                dapibus mi tempus auctor. Aenean varius lorem sapien, id aliquet
                nibh sollicitudin ut. Duis lacus quam, scelerisque nec libero
                mattis, pharetra aliquet ligula.{' '}
                <Emphasize>
                  Integer ac est vitae ipsum dictum tincidunt.
                </Emphasize>{' '}
                Donec in ligula blandit lectus sagittis vehicula vel ut nibh.
                Praesent at porta dui. Sed suscipit faucibus ex quis pulvinar.
                Donec iaculis magna vitae lacus mattis tincidunt. Pellentesque
                vulputate diam ut egestas pellentesque. In nunc purus,{' '}
                <Emphasize>
                  tempor nec augue nec, efficitur suscipit magna.
                </Emphasize>{' '}
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Quisque vitae elit vel massa
                suscipit finibus.
              </>
            ),
            customClassName:
              'first-letter:text-2xl light:first-letter:text-green-800 dark:first-letter:text-green-200 first-letter:font-bold',
          },
          {
            children: (
              <>
                Donec rutrum <Tag>tristique tellus</Tag>,{' '}
                <Emphasize>posuere gravida neque pulvinar in.</Emphasize> Mauris
                convallis luctus ex ut rutrum. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus.
                Pellentesque consequat, magna nec tristique porttitor, tellus
                mauris consectetur turpis, sed feugiat augue ligula non libero.
                Integer ullamcorper, nunc vel tincidunt sagittis, risus mi
                posuere arcu, sit amet imperdiet orci leo imperdiet ante. Duis
                lobortis vel nibh aliquam mollis. Mauris varius lobortis
                lobortis.{' '}
                <Emphasize>
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas.
                </Emphasize>{' '}
                Phasellus sagittis, enim venenatis rutrum finibus, mi erat
                viverra ligula, vel elementum urna magna ut metus. Nunc congue
                tellus ac urna facilisis, at tincidunt nulla cursus. Etiam
                bibendum vulputate nisi at tempor. Nam non tortor turpis.
                Maecenas sagittis commodo lectus,{' '}
                <Tag>quis placerat leo sodales et</Tag>. Nulla volutpat nibh
                nisl, quis ornare massa varius ac. Nullam vitae mi at ante
                fermentum hendrerit id et diam. Quisque laoreet id ante eu
                lobortis.
              </>
            ),
          },
          {
            children:
              'Quisque placerat libero ut orci porttitor, id venenatis turpis fringilla. Integer placerat libero in leo faucibus, eget accumsan leo dapibus. Quisque sit amet dui arcu. Donec mattis eros mi, ac pulvinar metus tempor et. Praesent odio urna, tempor id congue in, laoreet ut mi. Praesent consectetur, nunc at malesuada sodales, nunc metus semper ex, convallis mattis elit ex id urna. Curabitur lobortis justo quis est semper cursus. Cras finibus ligula ac arcu sodales hendrerit. Cras ornare neque id ante imperdiet, sit amet maximus orci suscipit. Vivamus elit lectus, mollis sed nisl ac, volutpat convallis augue. Morbi tempor dui id convallis auctor. Donec metus mauris, maximus ut dignissim at, mattis bibendum arcu.',
          },
        ]}
      />
      <TitleAndParagraph
        titleProp={{
          children: (
            <>
              Class aptent <Emphasize>taciti sociosqu</Emphasize> ad.
            </>
          ),
          customClassName: 'text-2xl sm:text-3xl md:text-4xl',
        }}
        paragraphProps={[
          {
            children:
              'Curabitur ullamcorper, mi in tristique sagittis, diam lorem malesuada sapien, vitae dictum nibh lectus ac felis. Donec efficitur nulla libero, vel pretium erat malesuada non. Fusce vel lectus vel ipsum maximus iaculis. Fusce et eleifend nibh, scelerisque venenatis arcu. Nam mattis, lorem ac ultricies viverra, enim nulla convallis erat, id pretium mauris nibh in felis. Donec orci metus, ultricies nec mi id, vestibulum pulvinar ante. Nulla vel lectus erat. Praesent fermentum urna neque, quis condimentum orci ornare eget. Nullam quis magna a diam mattis bibendum eu at nulla. Vivamus nec dignissim augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sagittis at nisi sit amet malesuada. Aenean vitae ligula sit amet erat auctor sagittis in a lacus.',
          },
        ]}
      />
      <TitleAndParagraph
        titleProp={{
          children: (
            <>
              Vivamus <Emphasize>tempor rhoncus elit</Emphasize> ut posuere.
            </>
          ),
          customClassName: 'text-2xl sm:text-3xl md:text-4xl',
        }}
        paragraphProps={[
          {
            children: (
              <>
                Fusce ultricies quis risus quis mattis.{' '}
                <Emphasize>Curabitur ac purus massa.</Emphasize> In ante lectus,
                posuere in accumsan eget, posuere sit amet ante. Vivamus vitae
                fermentum metus, lobortis malesuada eros. Curabitur id bibendum
                quam, eget dictum purus. Nam luctus arcu nec odio eleifend
                lobortis. Vestibulum tincidunt a felis non lobortis. Sed
                ullamcorper, arcu at aliquam luctus, lacus elit blandit leo, eu
                pharetra eros ex id neque. Proin efficitur, nisl sed scelerisque
                ornare, velit risus facilisis dolor, ultricies viverra erat
                turpis vel mauris. Nulla dignissim posuere hendrerit. Ut auctor
                lectus fermentum purus porttitor placerat. Fusce non lectus
                placerat, bibendum odio non, aliquet erat. <Tag>Ut maximus</Tag>{' '}
                lorem odio, sit amet iaculis lacus convallis vel.
              </>
            ),
          },
          {
            children:
              'Aenean elementum magna quis ex condimentum sodales. Nam a tempus turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vel leo et urna laoreet auctor. Praesent lobortis urna eget erat blandit mattis. Nulla ac gravida orci. Maecenas ullamcorper dignissim commodo. Praesent pulvinar velit nec lectus gravida, nec tempus augue tincidunt. Aenean ut congue leo. Vestibulum nec metus eu nibh ornare imperdiet. Donec tellus felis, ultricies id libero at, laoreet venenatis lectus. Vestibulum sed enim vitae ligula elementum placerat eleifend sed risus.',
          },
        ]}
      />
    </main>
  );
}
