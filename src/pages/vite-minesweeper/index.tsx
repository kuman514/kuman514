import SecondaryTitle from '^/shared/secondary-title';
import Tag from '^/shared/tag';
import Title from '^/shared/title';
import UnorderedBulletList from '^/shared/unordered-bullet-list';

export default function ViteMinesweeperPage() {
  return (
    <main className="flex min-h-screen flex-col px-8 py-24 gap-4 sm:px-24">
      <Title customClassName="text-4xl sm:text-5xl md:text-6xl">
        Vite 지뢰찾기 (ViteMinesweeper)
      </Title>
      <SecondaryTitle customClassName="text-4xl">
        사용한 기술 스택
      </SecondaryTitle>
      <div className="flex flex-row flex-wrap gap-2">
        <Tag>React</Tag>
        <Tag>TypeScript</Tag>
        <Tag>Vite</Tag>
        <Tag>Yarn Berry</Tag>
        <Tag>Zustand</Tag>
        <Tag>Vercel</Tag>
        <Tag>ChakraUI</Tag>
      </div>
      <SecondaryTitle customClassName="text-4xl">개요</SecondaryTitle>
      <UnorderedBulletList>
        <li>개인 프로젝트</li>
        <li>
          구현 내용
          <UnorderedBulletList>
            <li>
              프로젝트 세팅, 최소 구현 조건 설정, 기능 구현, 테스트, 배포, 문서
              및 업데이트 로그 작성, 유지보수를 담당함.
            </li>
            <li>지뢰찾기 게임, 재방문 후 이어서 하기 등등 각종 기능 구현.</li>
            <li>
              Vite + Yarn Berry로 프로젝트를 세팅하여 Create React App 대비 로딩
              시간 30초 → 5초로 감소, 설치 속도가 5배 빨라짐.
            </li>
            <li>
              빈 타일 클릭 후 8방향 주변의 또다른 빈 타일을 탐색하기 위해 활용한
              BFS 알고리즘에 쓰인 큐를 Array.prototype.shift() 기반에서 링크드
              리스트 기반으로 변경하여, 큐의 pop 시간 복잡도를 O(n)에서 O(1)로
              개선함.
            </li>
          </UnorderedBulletList>
        </li>
      </UnorderedBulletList>
    </main>
  );
}
