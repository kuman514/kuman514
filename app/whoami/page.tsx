import ProjectPageTemplate from '^/entities/project/page-template';
import Section from '^/entities/section';
import ExternalAnchor from '^/shared/external-anchor';
import Paragraph from '^/shared/paragraph';
import Tag from '^/shared/tag';
import Title from '^/shared/title';

export default function WhoAmIPage() {
  return (
    <ProjectPageTemplate>
      <Title customClassName="text-4xl sm:text-5xl md:text-6xl">
        kuman514는...
      </Title>

      <Section title="자기소개" subsectionClassName="flex flex-col gap-4">
        <Paragraph customClassName="first-letter:text-2xl first-letter:text-green-600 first-letter:font-bold">
          저는 React, Next.js, React Native를 비롯한 웹프론트엔드 기술들을
          배우고 있습니다. 이에 그치지 않고, 배워온 것들을 활용하여,
          YSOArcadeRecords나 ViteConnectFour같은 개인 프로젝트를 직접 만들어
          배포 후 유저들의 피드백을 반영하고 유지보수까지 진행해 왔습니다.
        </Paragraph>
        <Paragraph>
          또한, 저는 한모금 팀 프로젝트에서 React Native와 Expo를 활용하여 앱의
          각종 기능을 구현해나갔으며, App Store Connect와 Google Play Store
          Console을 통해 배포 후 유지보수 및 개선까지 진행해 왔습니다. 이
          과정에서, 디자이너와 기획자가 제공한 요구사항을 정확하게 파악하고
          구현하는 능력과, 이를 효율적으로 수행하기 위한 수단들을 연구하여
          적용하는 능력까지 키울 수 있었습니다.
        </Paragraph>
        <Paragraph>
          이러한 경험을 바탕으로, 항상 도전하는 자세로 안정성과 사용성에
          기여하는 개발자가 되겠습니다. 감사합니다.
        </Paragraph>
      </Section>

      <Section
        title="현재 하고 있는 활동"
        subsectionClassName="flex flex-col gap-4"
      >
        <Paragraph customClassName="first-letter:text-2xl first-letter:text-green-600 first-letter:font-bold">
          Github에서 1일 1커밋 활동을 진행하고 있습니다. 1일 1커밋이란, 배운
          내용이나 프로젝트 진행 등의 유의미한 커밋을 하루에 최소 1회 하는
          활동을 말합니다. 저는 이러한 활동을 통해, 저의 개발 역량을 꾸준히
          향상시킬 수 있었습니다.
        </Paragraph>
        <section>
          [{' '}
          <ExternalAnchor href={'https://github.com/kuman514'}>
            kuman514의 GitHub 바로가기
          </ExternalAnchor>{' '}
          ]
        </section>
        <Paragraph>
          또한,{' '}
          <ExternalAnchor href="https://solved.ac">solved.ac</ExternalAnchor>
          에서 1일 1솔브 활동도 진행하고 있습니다. 1일 1솔브란, solved.ac와
          연계되는{' '}
          <ExternalAnchor href="https://acmicpc.net">백준</ExternalAnchor>에서
          알고리즘 문제를 하루에 1개 이상의 문제를 푸는 활동을 말합니다. 저는
          이러한 활동을 통해, 문제 해결 능력을 꾸준히 키워나가고 있습니다.
        </Paragraph>
        <section>
          [{' '}
          <ExternalAnchor href={'https://solved.ac/kuman514'}>
            kuman514의 solved.ac 프로필 바로가기
          </ExternalAnchor>{' '}
          ]
        </section>
      </Section>

      <Section
        title="주력 기술 스택"
        subsectionClassName="flex flex-row flex-wrap gap-2"
      >
        <Tag>React</Tag>
        <Tag>TypeScript</Tag>
        <Tag>JavaScript</Tag>
        <Tag>HTML</Tag>
        <Tag>CSS</Tag>
      </Section>

      <Section
        title="연마 중인 기술 스택"
        subsectionClassName="flex flex-row flex-wrap gap-2"
      >
        <Tag>Vite</Tag>
        <Tag>React Native</Tag>
        <Tag>Next.js</Tag>
      </Section>
    </ProjectPageTemplate>
  );
}
