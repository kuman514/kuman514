import ProjectListItem from '^/entities/project/list-item';
import Title from '^/shared/title';

import ExpoLogoWordMark from '^/pages/project-list/assets/logo-wordmark.png';
import ViteMinesweeperPng from '^/pages/vite-minesweeper/assets/vite-minesweeper.png';
import YSOShmupRecords2Png from '^/pages/yso-shmup-records/assets/yso-shmup-records-2.png';

export default function ProjectListPage() {
  return (
    <main className="flex min-h-screen flex-col px-8 py-24 gap-4 sm:px-24">
      <Title customClassName="mt-24 text-4xl sm:text-5xl md:text-6xl">
        프로젝트 목록
      </Title>

      <ul>
        <ProjectListItem
          projectItem={{
            projectId: 'PrivateTeamProject',
            title: '비공개 팀 프로젝트',
            thumbnailUrl: ExpoLogoWordMark.src,
            description: 'iOS + Android를 타겟으로 한 모바일 앱.',
            techStackTags: ['React Native', 'Expo'],
          }}
        />
        <ProjectListItem
          projectItem={{
            projectId: 'YSOShmupRecords',
            title: 'YSOShmupRecords',
            thumbnailUrl: YSOShmupRecords2Png.src,
            description:
              '본인 YSO(kuman514)의 슈팅게임 기록을 열람하고 공유할 수 있게 만들기 위한 웹 사이트.',
            techStackTags: [
              'React',
              'TypeScript',
              'Vite',
              'Yarn Berry',
              'Vercel',
              'Axios',
              'Prettier',
              'Figma',
              'Lambda',
              'DynamoDB',
              'API Gateway',
              'Node.js',
            ],
          }}
        />
        <ProjectListItem
          projectItem={{
            projectId: 'ViteMinesweeper',
            title: 'Vite 지뢰찾기 (ViteMinesweeper)',
            thumbnailUrl: ViteMinesweeperPng.src,
            description:
              'React와 너비 우선 탐색 알고리즘을 활용하여 만든 Microsoft Minesweeper 스타일 지뢰찾기.',
            techStackTags: [
              'React',
              'TypeScript',
              'Vite',
              'Yarn Berry',
              'Zustand',
              'Vercel',
              'ChakraUI',
            ],
          }}
        />
      </ul>
    </main>
  );
}
