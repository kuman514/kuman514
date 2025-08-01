import Link from 'next/link';

import { NavNode } from './types';

interface Props {
  navNodes: NavNode[];
}

export default function Header({ navNodes }: Props) {
  return (
    <header className="fixed z-header inset-x-0 top-0 w-full h-16 flex flex-row justify-between items-center bg-green-500 sm:px-6 md:px-8 text-sm sm:text-base">
      <div className="h-full flex flex-col justify-center">
        <Link
          aria-label="kuman514-logo"
          href="/"
          className="px-4 py-3 font-semibold text-white transition hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] hover:-translate-y-0.5"
        >
          kuman514
        </Link>
      </div>
      <nav className="h-full w-fit">
        <ul className="flex flex-row justify-between items-center w-full h-full md:gap-4">
          {navNodes.map(({ id, label, href }) => (
            <li key={id} id={id}>
              <Link
                href={href}
                className="h-full flex justify-center items-center px-2 sm:px-4 py-3 font-semibold text-white transition hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] hover:-translate-y-0.5"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
