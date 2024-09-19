import Image from 'next/image';

import ProjectPageTemplate from '^/entities/project/page-template';
import ExternalAnchor from '^/shared/external-anchor';
import Paragraph from '^/shared/paragraph';
import Tag from '^/shared/tag';
import Title from '^/shared/title';
import UnorderedBulletList from '^/shared/unordered-bullet-list';

import Section from '^/entities/section';
import Emphasize from '^/shared/emphasize';

import SkeletonPng from './assets/skeleton.png';
import Writronics1Png from './assets/writronics-1.png';
import Writronics2Png from './assets/writronics-2.png';
import Writronics3Png from './assets/writronics-3.png';
import YSOShmupRecords1Png from './assets/yso-shmup-records-1.png';
import YSOShmupRecords2Png from './assets/yso-shmup-records-2.png';
import YSOShmupRecords3Png from './assets/yso-shmup-records-3.png';

export default function YSOShmupRecordsPage() {
  return (
    <ProjectPageTemplate>
      <Title customClassName="text-4xl sm:text-5xl md:text-6xl">
        YSOShmupRecords
      </Title>

      <div className="w-full flex flex-row flex-wrap justify-center items-center gap-4">
        <Image
          {...YSOShmupRecords1Png}
          alt="YSOShmupRecords의 기록 리스트"
          className="w-fit max-h-80 object-contain"
        />
        <Image
          {...YSOShmupRecords2Png}
          alt="YSOShmupRecords의 기록 아티클"
          className="w-fit max-h-80 object-contain"
        />
        <Image
          {...YSOShmupRecords3Png}
          alt="YSOShmupRecords의 아카트로닉스 오시는 길"
          className="w-fit max-h-80 object-contain"
        />
      </div>

      <Section title="개요">
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
                Vite + Yarn Berry로 프로젝트를 세팅하여 Create React App 대비
                로딩 시간 30초 → 5초로 감소, 설치 속도가 5배 빨라짐.
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
      </Section>

      <Section title="방문하기">
        [{' '}
        <ExternalAnchor href="https://github.com/kuman514/YSOShmupRecords">
          GitHub 저장소
        </ExternalAnchor>{' '}
        ] [{' '}
        <ExternalAnchor href="https://yso-shmup-records.vercel.app/">
          사이트
        </ExternalAnchor>{' '}
        ]
      </Section>

      <Section
        title="이 프로젝트를 만든 이유"
        subsectionClassName="flex flex-row flex-wrap gap-2"
      >
        <Paragraph>
          슈팅게임 동호인들과 더욱 원활하게 교류하기 위해 제작되었습니다.
          기존에는 SNS나 디스코드 등의 메신저로 교류하였으나, 이러한 교류 수단은
          다른 종류의 글이나 메시지까지 난잡하게 섞여 있어 슈팅게임 기록을
          제대로 찾아보기 어려운 문제를 안고 있었습니다. 이러한 문제를
          해결하고자 제가 달성한 각종 기록을 더욱 쉽게 열람하고 공유할 수 있는
          사이트를 직접 개발하였습니다.
        </Paragraph>
      </Section>

      <Section
        title="사용한 기술 스택"
        subsectionClassName="flex flex-row flex-wrap gap-2"
      >
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
      </Section>

      <Section
        title="스켈레톤 컴포넌트 적용"
        subsectionClassName="flex flex-col gap-4"
      >
        <div className="flex justify-center items-center">
          <Image
            {...SkeletonPng}
            alt="YSOShmupRecords의 기록 아티클 스켈레톤 컴포넌트"
            className="max-h-80 object-contain"
          />
        </div>
        <Paragraph>
          <Emphasize>
            스켈레톤 컴포넌트는 데이터를 가져오는 동안 임시 콘텐츠를 표시하는
            컴포넌트
          </Emphasize>
          입니다. 사용자는 콘텐츠를 기다리다가 쉽게 지치고 지루함을 느끼므로,
          데이터를 가져오는 동안 단순히 빈 화면만 보여준다면 많은 사람들은
          사이트를 떠나게 될 것입니다. 그래서 이를 방지하기 위해,
          <Emphasize>
            애니메이션 효과가 들어간 스켈레톤 컴포넌트를 직접 만들어, 기록
            목록이나 기록 아티클 로딩 등에 적용
          </Emphasize>
          하였습니다.
        </Paragraph>
      </Section>

      <Section
        title="서버리스 백엔드 구축 및 연동"
        subsectionClassName="flex flex-col gap-4"
      >
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
          <Image
            {...Writronics3Png}
            alt="YSOShmupRecords의 백오피스 Writronics의 기록 수정 화면"
            className="w-fit max-h-80 object-contain"
          />
        </div>
        <Paragraph>
          기록 등의 데이터를 더욱 쉽게 관리하기 위해, Lambda + DynamoDB + API
          Gateway를 이용하여 서버리스 백엔드를 구축하여, YSOShmupRecords와 그의
          백오피스 Writronics와 연동하였습니다. 더 나아가, S3 퍼블릭 버킷을
          추가적으로 구축하여, Writronics에서 이미지 파일 직접 업로드가
          가능하게끔 만들었습니다. 백엔드 상에서, 기록 목록과 기록 아티클 등의
          열람은 누구나 할 수 있지만 추가/편집/삭제는 관리자 로그인이 필요하도록
          만들었습니다.
        </Paragraph>
      </Section>
    </ProjectPageTemplate>
  );
}
