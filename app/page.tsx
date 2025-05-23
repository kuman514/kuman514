import Emphasize from '^/shared/emphasize';
import PixiJsApp from '^/shared/pixi-js';
import BunnySprite from '^/shared/pixi-js/bunny-sprite';
import Title from '^/shared/title';

/**
 * @todo
 * Add decorations.
 */

export default function IntroPage() {
  return (
    <>
      <PixiJsApp>
        <BunnySprite />
      </PixiJsApp>
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
