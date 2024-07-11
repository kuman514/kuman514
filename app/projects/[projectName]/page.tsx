interface Props {
  params: {
    projectName: string;
  };
}

export default function ProjectArticlePage({ params: { projectName } }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <code className="font-mono font-bold">
        app/projects/{projectName}/page.tsx
      </code>
    </main>
  );
}
