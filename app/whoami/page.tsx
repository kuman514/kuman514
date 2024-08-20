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
          프론트엔드 엔지니어로서 React와 TypeScript를 다뤄왔으며, 이를 기반으로
          고객이 겪고 있는 각종 문제를 해결해왔습니다. 이에 그치지 않고, Vite나
          Next.js, React Native같은 기술 스택도 직접 연마하면서 비공개 팀
          프로젝트나 YSOShmupRecords같은 개인 프로젝트에도 적용해나가고
          있습니다. 더 나아가, 만든 앱의 안정성과 사용성을 향상시키기 위해,
          사용자의 피드백을 반영하며 유지보수를 진행해오고 있습니다.
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
          활동을 말합니다. 저는 이러한 활동을 통해, 저의 개발 역량을 매일
          조금씩이라도 꾸준히 향상시킬 수 있었습니다.
        </Paragraph>
        <section>
          [{' '}
          <ExternalAnchor href={'https://github.com/kuman514'}>
            kuman514의 GitHub 바로가기
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
