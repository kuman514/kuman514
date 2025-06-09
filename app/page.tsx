import { navNodes } from '^/app/header/nodes';
import Emphasize from '^/shared/emphasize';
import SecondaryTitle from '^/shared/secondary-title';
import Title from '^/shared/title';
import PixiJsApp from '^/widgets/pixi-js';
import Link from 'next/link';

export default function IntroPage() {
  return (
    <>
      <PixiJsApp />
      <main className="fixed x-0 y-0 flex min-h-screen flex-col items-center justify-center p-24 gap-4">
        <Title customClassName="font-mono text-4xl sm:text-6xl">
          <Emphasize customClassName="px-4">kuman514</Emphasize>
        </Title>
        <SecondaryTitle customClassName="font-mono text-lg text-center sm:text-2xl">
          Frontend Developer Portfolio
        </SecondaryTitle>
        <div className="flex font-mono text-lg flex-row gap-4">
          {navNodes.map(({ id, label, href }) => (
            <Link
              key={id}
              href={href}
              className="transition hover:text-green-500 dark:hover:text-green-300 hover:drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)] dark:hover:drop-shadow-[0_1px_8px_rgb(255,255,255)] hover:-translate-y-0.5"
            >
              {label}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
