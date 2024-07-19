import SecondaryTitle from '^/shared/secondary-title';
import Tag from '^/shared/tag';
import Title from '^/shared/title';
import UnorderedBulletList from '^/shared/unordered-bullet-list';

export default function YSOShmupRecordsPage() {
  return (
    <main className="flex min-h-screen flex-col px-8 py-24 gap-4 sm:px-24">
      <Title customClassName="text-4xl sm:text-5xl md:text-6xl">
        YSOShmupRecords
      </Title>
      <SecondaryTitle customClassName="text-4xl">
        사용한 기술 스택
      </SecondaryTitle>
      <div className="flex flex-row flex-wrap gap-2">
        <Tag>React</Tag>
        <Tag>TypeScript</Tag>
        <Tag>Vite</Tag>
        <Tag>Yarn Berry</Tag>
        <Tag>Vercel</Tag>
        <Tag>Axios</Tag>
        <Tag>Prettier</Tag>
        <Tag>Figma</Tag>
        <Tag>Lambda</Tag>
        <Tag>DynamoDB</Tag>
        <Tag>API Gateway</Tag>
        <Tag>Node.js</Tag>
      </div>
      <SecondaryTitle customClassName="text-4xl">개요</SecondaryTitle>
      <UnorderedBulletList>
        <li>개인 프로젝트</li>
        <li>
          구현 내용
          <UnorderedBulletList>
            <li>
              프로젝트 세팅, 태스크 브레이크다운, 디자인, 퍼블리싱, 기능 구현,
              테스트, 배포, 문서 및 업데이트 로그 작성, 유지보수를 담당함.
            </li>
            <li>
              react-router-dom과 Vercel Rewrite를 사용하여 각 페이지 라우팅.
            </li>
            <li>기록 열람, 외부로 공유, 다크 모드 등등 각종 기능 구현.</li>
            <li>
              Vite + Yarn Berry로 프로젝트를 세팅하여 Create React App 대비 로딩
              시간 30초 → 5초로 감소, 설치 속도가 5배 빨라짐.
            </li>
            <li>
              데이터를 가져오는 동안 UI가 멈춰있어 보이지 않기 위해 스켈레톤
              컴포넌트 적용.
            </li>
            <li>
              Lambda + DynamoDB + API Gateway + Node.js를 이용하여 기록 등의
              데이터를 제공하고 관리하는 서버리스 백엔드 및 백오피스 구축.
            </li>
          </UnorderedBulletList>
        </li>
      </UnorderedBulletList>
    </main>
  );
}
