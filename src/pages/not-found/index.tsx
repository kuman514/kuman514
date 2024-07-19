import Title from '^/shared/title';

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center gap-4 text-center">
      <Title customClassName="text-4xl sm:text-5xl md:text-6xl">
        404 Not Found
      </Title>
      <span>요청하신 페이지를 찾을 수 없습니다.</span>
    </main>
  );
}
