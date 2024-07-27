import Image from 'next/image';

import ExternalAnchor from '^/shared/external-anchor';
import Paragraph from '^/shared/paragraph';
import SecondaryTitle from '^/shared/secondary-title';
import Tag from '^/shared/tag';
import Title from '^/shared/title';
import UnorderedBulletList from '^/shared/unordered-bullet-list';

import SkeletonPng from './assets/skeleton.png';
import Writronics1Png from './assets/writronics-1.png';
import Writronics2Png from './assets/writronics-2.png';

export default function YSOShmupRecordsPage() {
  return (
    <main className="flex min-h-screen flex-col px-8 py-24 gap-4 sm:px-24">
      <Title customClassName="text-4xl sm:text-5xl md:text-6xl">
        YSOShmupRecords
      </Title>

      <SecondaryTitle customClassName="mt-4 text-2xl sm:text-3xl md:text-4xl">
        방문하기
      </SecondaryTitle>
      <div className="flex flex-row flex-wrap gap-1">
        [
        <ExternalAnchor href="https://github.com/kuman514/YSOShmupRecords">
          깃허브 저장소
        </ExternalAnchor>
        ] [
        <ExternalAnchor href="https://yso-shmup-records.vercel.app/">
          사이트
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
        <Tag>Vercel</Tag>
        <Tag>Axios</Tag>
        <Tag>Prettier</Tag>
        <Tag>Figma</Tag>
        <Tag>Lambda</Tag>
        <Tag>DynamoDB</Tag>
        <Tag>API Gateway</Tag>
        <Tag>Node.js</Tag>
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

      <SecondaryTitle customClassName="mt-4 text-2xl sm:text-3xl md:text-4xl">
        스켈레톤 컴포넌트 적용
      </SecondaryTitle>
      <div className="flex justify-center items-center">
        <Image
          {...SkeletonPng}
          alt="YSOShmupRecords의 기록 아티클 스켈레톤 컴포넌트"
          className="max-h-80 object-contain"
        />
      </div>
      <Paragraph customClassName="mb-0">
        스켈레톤 컴포넌트는 데이터를 가져오는 동안 콘텐츠를 표시하는
        컴포넌트입니다. 사용자는 콘텐츠를 기다리다가 쉽게 지치고 지루함을
        느끼므로, 데이터를 가져오는 동안 단순히 빈 화면만 보여준다면 많은
        사람들은 사이트를 떠나게 될 것입니다. 그래서 이를 방지하기 위해,
        애니메이션 효과가 들어간 스켈레톤 컴포넌트를 직접 만들어, 기록 목록이나
        기록 아티클 로딩 등에 적용하였습니다.
      </Paragraph>

      <SecondaryTitle customClassName="mt-4 text-2xl sm:text-3xl md:text-4xl">
        서버리스 백엔드 구축 및 연동
      </SecondaryTitle>
      <div className="w-full flex flex-row flex-wrap justify-center items-center gap-4">
        <Image
          {...Writronics1Png}
          alt="YSOShmupRecords의 백오피스 Writronics의 기록 아티클"
          className="w-fit max-h-80 object-contain"
        />
        <Image
          {...Writronics2Png}
          alt="YSOShmupRecords의 백오피스 Writronics의 기록 리스트"
          className="w-fit max-h-80 object-contain"
        />
      </div>
      <Paragraph customClassName="mb-0">
        기록 등의 데이터를 더욱 쉽게 관리하기 위해, Lambda + DynamoDB + API
        Gateway를 이용하여 서버리스 백엔드를 구축하여, YSOShmupRecords와 그의
        백오피스 Writronics와 연동하였습니다. 백엔드 상에서, 기록 목록과 기록
        아티클 등의 열람은 누구나 할 수 있지만 추가/편집/삭제는 관리자 로그인이
        필요하도록 만들었습니다.
      </Paragraph>
    </main>
  );
}
