import Image from 'next/image';

import ExternalAnchor from '^/shared/external-anchor';
import Paragraph from '^/shared/paragraph';
import SecondaryTitle from '^/shared/secondary-title';
import Tag from '^/shared/tag';
import Title from '^/shared/title';
import UnorderedBulletList from '^/shared/unordered-bullet-list';

import BfsPng from './assets/bfs.png';
import QueuePopPng from './assets/queue-pop.png';

export default function ViteMinesweeperPage() {
  return (
    <main className="flex min-h-screen flex-col px-8 py-24 gap-4 sm:px-24">
      <Title customClassName="text-4xl sm:text-5xl md:text-6xl">
        Vite 지뢰찾기 (ViteMinesweeper)
      </Title>

      <SecondaryTitle customClassName="mt-4 text-2xl sm:text-3xl md:text-4xl">
        방문하기
      </SecondaryTitle>
      <div className="flex flex-row flex-wrap gap-1">
        [
        <ExternalAnchor href="https://github.com/kuman514/ViteMinesweeper">
          깃허브 저장소
        </ExternalAnchor>
        ] [
        <ExternalAnchor href="https://vite-minesweeper.vercel.app/">
          게임 플레이
        </ExternalAnchor>
        ]
      </div>

      <SecondaryTitle customClassName="mt-4 text-2xl sm:text-3xl md:text-4xl">
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

      <SecondaryTitle customClassName="mt-4 text-2xl sm:text-3xl md:text-4xl">
        개요
      </SecondaryTitle>
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

      <SecondaryTitle customClassName="mt-4 text-2xl sm:text-3xl md:text-4xl">
        지뢰찾기 구현에 쓰인 알고리즘
      </SecondaryTitle>
      <div className="flex justify-center items-center">
        <Image {...BfsPng} alt="ViteMinesweeper 구현에 쓰인 알고리즘인 BFS" />
      </div>
      <Paragraph customClassName="mb-0">
        지뢰찾기 게임에서, 어떤 타일을 눌렀을 때 또다른 숫자 타일이나 가장자리에
        다다를 때까지 주변 8방향으로 빈 타일 탐색을 수행하는데, 여기서 가장
        효율적인 방법인 BFS(너비 우선 탐색) 알고리즘을 적용하였습니다.
      </Paragraph>

      <SecondaryTitle customClassName="mt-4 text-2xl sm:text-3xl md:text-4xl">
        큐의 Pop 호출 시간 복잡도 개선
      </SecondaryTitle>
      <Paragraph customClassName="mb-0">
        앱 속도 개선 작업 이전에는, 사용자들로부터 앱의 반응이 약간 느리다는
        피드백을 받았습니다. 그 원인 중 하나가,{' '}
        <Tag>Array.prototype.shift()</Tag>를 큐의 pop에 사용하고 있었다는
        점이었습니다. 실제로, <Tag>Array.prototype.shift()</Tag>는 배열의 맨 앞
        원소 제거 후 나머지 원소의 인덱스가 전부 변경되므로, 한 번 실행할 때마다
        배열의 길이만큼의 연산 시간을 가집니다. 즉, 시간복잡도가 <Tag>O(n)</Tag>
        이라는 이야기이죠.
      </Paragraph>
      <Paragraph customClassName="mb-0">
        이를 개선하기 위해 시간복잡도가 <Tag>O(1)</Tag>인 pop 방법을 사용해야
        했는데, 그 방법이 링크드 리스트 기반의 pop을 사용하는 큐를 직접 만드는
        것이었습니다. 링크드 리스트를 사용하면, 맨 앞 원소 <Tag>front</Tag>를
        pop할 때 <Tag>front</Tag>만 그 뒤를 가리키게 만들고 이전에{' '}
        <Tag>front</Tag>였던걸 반환하기만 하면 됩니다. 이렇게{' '}
        <Tag>Array.prototype.shift()</Tag> 기반의 pop을 사용하는 큐를 직접
        구현한 링크드 리스트 큐로 교체함으로써, 앱의 속도를 개선했습니다.
      </Paragraph>
      <div className="flex justify-center items-center">
        <Image
          {...QueuePopPng}
          alt="Array.prototype.shift() 기반 pop과 링크드 리스트 기반 pop의 성능 비교"
        />
      </div>
      <Paragraph customClassName="mb-0">
        큐가 얼마나 잘 작동하는지 검증하는 수단으로,{' '}
        <ExternalAnchor href="https://www.acmicpc.net/">백준</ExternalAnchor>
        에서 큐를 사용하는 유형의 문제 풀이에 응용했습니다. (
        <ExternalAnchor href="https://www.acmicpc.net/problem/14940">
          예시 문제
        </ExternalAnchor>
        ) 81596705호 제출은 <Tag>Array.prototype.shift()</Tag> 기반의 pop을
        사용하고 있으며, 81596769호 제출은 링크드 리스트 기반의 pop을 사용하고
        있습니다. 여기서, 링크드 리스트를 사용했을 때가{' '}
        <Tag>Array.prototype.shift()</Tag>를 사용했을 때보다 44ms 더 빨라지는
        것을 알 수 있습니다.
      </Paragraph>
    </main>
  );
}
