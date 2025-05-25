import Emphasize from '^/shared/emphasize';
import Title from '^/shared/title';
import PixiJsApp from '^/widgets/pixi-js';

export default function IntroPage() {
  return (
    <>
      <PixiJsApp />
      <main className="fixed x-0 y-0 flex min-h-screen flex-col items-center justify-center p-24 gap-4">
        <Title customClassName="font-mono text-4xl sm:text-6xl">
          <Emphasize customClassName="px-4">kuman514</Emphasize>
        </Title>
        <Title customClassName="font-mono text-lg text-center sm:text-2xl">
          Frontend Developer Portfolio
        </Title>
      </main>
    </>
  );
}
