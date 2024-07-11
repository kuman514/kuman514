import Title from '^/shared/Title';
import Emphasize from '^/shared/Emphasize';

export default function IntroPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <Title customClassName="font-mono text-4xl sm:text-6xl">
        <Emphasize customClassName="px-4">kuman514</Emphasize>
      </Title>
      <Title customClassName="font-mono text-lg text-center sm:text-2xl">
        Frontend Developer Portfolio
      </Title>
    </main>
  );
}
