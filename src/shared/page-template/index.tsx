import { ReactNode } from 'react';

interface Props {
  mostRecentlyEdited: Date;
  customClassName?: string;
  children?: ReactNode;
}

export default function PageTemplate({
  mostRecentlyEdited,
  customClassName,
  children,
}: Props) {
  return (
    <main className={`min-h-screen flex flex-col ${customClassName}`}>
      <div className="w-full text-right">
        최근 수정 일자: {mostRecentlyEdited.getFullYear()}년{' '}
        {mostRecentlyEdited.getMonth() + 1}월 {mostRecentlyEdited.getDate()}일
      </div>
      {children}
    </main>
  );
}
