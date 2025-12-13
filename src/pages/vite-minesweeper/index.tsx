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

import BfsPng from './assets/bfs.png';
import QueuePopPng from './assets/queue-pop.png';
import ViteMinesweeperBannerPng from './assets/vite-minesweeper-banner.png';
import ViteMinesweeperPng from './assets/vite-minesweeper.png';

interface Props {
  editedDate?: Date;
}

export default function ViteMinesweeperPage({ editedDate }: Props) {
  const renderBanner = (
    <div aria-label="banner-image" className="pt-16 w-full h-[50vh]">
      <Image
        className="w-full h-full object-cover"
        src={ViteMinesweeperBannerPng}
        alt="ViteMinesweeper 배너 이미지"
      />
    </div>
  );

  const renderEditedDate = editedDate ? (
    <MostRecentlyEdited editedDate={editedDate} />
  ) : null;

  const renderContent = (
    <>
      <Title customClassName="text-4xl sm:text-5xl md:text-6xl">
        Vite 지뢰찾기 (ViteMinesweeper)
      </Title>

      <Section
        title="프리뷰"
        subsectionClassName="w-full flex flex-row flex-wrap justify-center items-center"
      >
        <Image
          src={ViteMinesweeperPng}
          alt="ViteMinesweeper Expert 단계 승리 장면"
          className="w-fit max-h-80 object-contain"
        />
      </Section>

      <Section title="개요">
        <UnorderedBulletList>
          <li>
            React와 너비 우선 탐색 알고리즘을 활용하여 만든 Microsoft
            Minesweeper 스타일 지뢰찾기.
          </li>
          <li>개인 프로젝트</li>
          <li>
            구현 내용 요약
            <UnorderedBulletList>
              <li>
                프로젝트 세팅, 최소 구현 조건 설정, 기능 구현, 테스트, 배포,
                문서 및 업데이트 로그 작성, 유지보수를 담당함.
              </li>
              <li>지뢰찾기 게임, 재방문 후 이어서 하기 등등 각종 기능 구현.</li>
              <li>
                Vite + Yarn Berry로 프로젝트를 세팅하여 Create React App 대비
                로딩 시간 30초 → 5초로 감소, 설치 속도가 5배 빨라짐.
              </li>
              <li>
                빈 타일 클릭 후 8방향 주변의 또다른 빈 타일을 탐색하기 위해
                활용한 BFS 알고리즘에 쓰인 큐를 Array.prototype.shift() 기반에서
                링크드 리스트 기반으로 변경하여, 큐의 pop 시간 복잡도를 O(n)에서
                O(1)로 개선함.
              </li>
            </UnorderedBulletList>
          </li>
        </UnorderedBulletList>
      </Section>

      <Section title="방문하기">
        [{' '}
        <ExternalAnchor href="https://github.com/kuman514/ViteMinesweeper">
          GitHub 저장소
        </ExternalAnchor>{' '}
        ] [{' '}
        <ExternalAnchor href="https://vite-minesweeper.vercel.app/">
          게임 플레이
        </ExternalAnchor>{' '}
        ]
      </Section>

      <Section
        title="이 프로젝트를 만든 이유"
        subsectionClassName="flex flex-row flex-wrap gap-2"
      >
        <Paragraph>
          Microsoft Minesweeper의 규격을 따르는 지뢰찾기를 다운로드 없이
          플레이하고 싶어 제작을 시작했습니다. Windows 8 이후로 Microsoft
          Minesweeper는 기본 게임에서 제외되었습니다. 물론{' '}
          <ExternalAnchor href="https://www.xbox.com/ko-KR/games/store/microsoft-minesweeper/9WZDNCRFHWCN">
            Microsoft 공식 지뢰찾기 게임을 다운받아 플레이할 수 있으나
          </ExternalAnchor>
          , 불필요하게 화려한 그래픽과 광고 등등의 문제점을 안고 있습니다.{' '}
          <ExternalAnchor href="https://www.google.com/search?q=%EC%A7%80%EB%A2%B0%EC%B0%BE%EA%B8%B0&oq=%EC%A7%80%EB%A2%B0%EC%B0%BE%EA%B8%B0&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDvSAQc3MTZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8">
            Google이 제공하는 지뢰찾기
          </ExternalAnchor>{' '}
          또한, 규격(너비와 높이 등등)은 기존에 알던 Microsoft Minesweeper의
          규격과 달라 아쉬움을 느꼈습니다. 이러한 이유로 Microsoft Minesweeper의
          규격을 따르는 지뢰찾기를 다운로드 없이 플레이하고 싶었습니다.
        </Paragraph>
      </Section>

      <Section title="플레이 방법 (Windows Chrome 기준)">
        <UnorderedBulletList>
          <li>
            게임의 룰은 Microsoft Windows 7까지의 기본 게임이었던 Microsoft
            Minesweeper의 룰을 지향하고 있습니다.
          </li>
          <li>마우스 좌클릭으로 방문되지 않은 타일을 확인할 수 있습니다.</li>
          <li>
            마우스 우클릭으로 방문되지 않은 타일에 지뢰가 있다고 짐작하는
            `마킹`을 남길 수 있습니다.
          </li>
          <li>
            마우스 양쪽 클릭으로 주변에 지뢰가 있는지 확인할 수 있습니다.
            <UnorderedBulletList>
              <li>
                숫자와 주변 마킹의 개수가 일치하지 않으면 작동하지 않습니다.
              </li>
            </UnorderedBulletList>
          </li>
          <li>지뢰를 건드리거나 모두 찾으면 게임이 종료됩니다.</li>
          <li>
            <Tag>Reset</Tag> 버튼으로 게임을 다시 시작할 수 있습니다.
          </li>
          <li>
            <Tag>Config</Tag> 버튼으로 게임의 규격을 설정할 수 있습니다. 설정 시
            진행 중인 게임은 초기화됩니다.
          </li>
          <li>
            게임에서 설정할 수 있는 규격의 범위입니다.
            <UnorderedBulletList>
              <li>너비: 9 ~ 30칸</li>
              <li>높이: 9 ~ 16칸</li>
              <li>지뢰 개수: 10 ~ Floor(너비 * 높이 * 0.925)개</li>
            </UnorderedBulletList>
          </li>
        </UnorderedBulletList>
      </Section>

      <Section
        title="사용한 기술 스택"
        subsectionClassName="flex flex-row flex-wrap gap-2"
      >
        <Tag>React</Tag>
        <Tag>TypeScript</Tag>
        <Tag>Vite</Tag>
        <Tag>Yarn Berry</Tag>
        <Tag>Zustand</Tag>
        <Tag>Vercel</Tag>
        <Tag>ChakraUI</Tag>
      </Section>

      <Section
        title="이 프로젝트에서 기술적으로 기뻤던 점"
        subsectionClassName="flex flex-col gap-4"
      >
        <Paragraph>
          {/**
           * @todo
           * 다음과 같은 내용을 넣기
           * - 컴퓨터공학 지식 중 알고리즘(BFS(너비 우선 탐색))을 활용할 수 있어서 좋았다
           */}
        </Paragraph>
      </Section>

      <Section
        title="지뢰찾기 구현에 쓰인 알고리즘"
        subsectionClassName="flex flex-col gap-4"
      >
        <div className="flex justify-center items-center">
          <Image
            src={BfsPng}
            alt="ViteMinesweeper 구현에 쓰인 알고리즘인 BFS"
          />
        </div>
        <Paragraph>
          지뢰찾기 게임에서, 어떤 타일을 눌렀을 때 또다른 숫자 타일이나
          가장자리에 다다를 때까지{' '}
          <Emphasize>주변 8방향으로 빈 타일 탐색</Emphasize>을 수행하는데,
          여기서 가장 효율적인 방법인{' '}
          <Emphasize>BFS(너비 우선 탐색) 알고리즘</Emphasize>을 적용하였습니다.
        </Paragraph>
      </Section>

      <Section
        title="큐의 Pop 호출 시간 복잡도 개선"
        subsectionClassName="flex flex-col gap-4"
      >
        <Paragraph>
          앱 속도 개선 작업 이전에는,{' '}
          <Emphasize>사용자들로부터 앱의 반응이 약간 느리다는 피드백</Emphasize>
          을 받았습니다. 그 원인 중 하나가, <Tag>Array.prototype.shift()</Tag>를
          큐의 pop에 사용하고 있었다는 점이었습니다. 실제로,{' '}
          <Tag>Array.prototype.shift()</Tag>는 배열의 맨 앞 원소 제거 후 나머지
          원소의 인덱스가 전부 변경되므로, 한 번 실행할 때마다 배열의 길이만큼의
          연산 시간을 가집니다. 즉, 시간복잡도가 <Tag>O(n)</Tag>
          이라는 이야기이죠.
        </Paragraph>
        <Paragraph>
          이를 개선하기 위해{' '}
          <Emphasize>
            시간복잡도가 <Tag>O(1)</Tag>인 pop 방법
          </Emphasize>
          을 사용 해야 했는데, 그 방법이{' '}
          <Emphasize>
            링크드 리스트 기반의 pop을 사용하는 큐를 직접 만드는 것
          </Emphasize>
          이었습니다. 링크드 리스트를 사용하면, 맨 앞 원소 <Tag>front</Tag>를
          pop할 때 <Tag>front</Tag>만 그 뒤를 가리키게 만들고 이전에{' '}
          <Tag>front</Tag>였던걸 반환하기만 하면 됩니다. 이렇게{' '}
          <Tag>Array.prototype.shift()</Tag> 기반의 pop을 사용하는 큐를 직접
          구현한 링크드 리스트 큐로 교체함으로써,{' '}
          <Emphasize>앱의 속도를 개선</Emphasize>했습니다.
        </Paragraph>
        <div className="flex justify-center items-center">
          <Image
            src={QueuePopPng}
            alt="Array.prototype.shift() 기반 pop과 링크드 리스트 기반 pop의 성능 비교"
          />
        </div>
        <Paragraph>
          큐가 얼마나 잘 작동하는지 검증하는 수단으로,{' '}
          <ExternalAnchor href="https://www.acmicpc.net/">백준</ExternalAnchor>
          에서 큐를 사용하는 유형의 문제 풀이에 응용했습니다. (
          <ExternalAnchor href="https://www.acmicpc.net/problem/14940">
            예시 문제
          </ExternalAnchor>
          ) 81596705호 제출은 <Tag>Array.prototype.shift()</Tag> 기반의 pop을
          사용하고 있으며, 81596769호 제출은 링크드 리스트 기반의 pop을 사용하고
          있습니다. 여기서, <Emphasize>링크드 리스트를 사용했을 때</Emphasize>가{' '}
          <Tag>Array.prototype.shift()</Tag>를 사용했을 때보다{' '}
          <Emphasize>44ms 더 빨라지는</Emphasize>
          것을 알 수 있습니다.
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
