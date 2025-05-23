import ProjectListItem from '^/entities/project/list-item';
import Title from '^/shared/title';

import ProjectPageTemplate from '^/entities/project/page-template';
import HanmogmBannerPng from '^/pages/hanmogm/assets/hanmogm-banner.png';
import ViteMinesweeperBannerPng from '^/pages/vite-minesweeper/assets/vite-minesweeper-banner.png';
import YSOArcadeRecords from '^/pages/yso-arcade-records/assets/yso-arcade-records.png';

export default function ProjectListPage() {
  return (
    <ProjectPageTemplate>
      <Title customClassName="text-4xl sm:text-5xl md:text-6xl">
        프로젝트 목록
      </Title>

      <ul>
        <ProjectListItem
          projectItem={{
            projectId: 'Hanmogm',
            title: '한모금 (Hanmogm)',
            thumbnailUrl: HanmogmBannerPng.src,
            description:
              'iOS + Android를 타겟으로 한, 각종 주류 정보를 열람하고 시음기록을 작성할 수 있는 테이스팅 노트 앱.',
            techStackTags: [
              'React Native',
              'Expo',
              'TypeScript',
              'Axios',
              'Zustand',
            ],
          }}
        />
        <ProjectListItem
          projectItem={{
            projectId: 'YSOArcadeRecords',
            title: 'YSOArcadeRecords',
            thumbnailUrl: YSOArcadeRecords.src,
            description:
              '본인 YSO(kuman514)의 아케이드 게임 기록, 리뷰, 사진 모음집을 열람하고 공유할 수 있게 만들기 위한 사이트.',
            techStackTags: [
              'Next.js',
              'React',
              'TypeScript',
              'Axios',
              'Vercel',
              'Supabase',
              'Tailwind CSS',
            ],
          }}
        />
        <ProjectListItem
          projectItem={{
            projectId: 'ViteMinesweeper',
            title: 'Vite 지뢰찾기 (ViteMinesweeper)',
            thumbnailUrl: ViteMinesweeperBannerPng.src,
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
    </ProjectPageTemplate>
  );
}
