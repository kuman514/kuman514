import LinkButton from '^/features/link-button';
import Title from '^/shared/title';

export default function ContactPage() {
  return (
    <main className="flex w-full min-h-screen flex-col justify-center items-center px-8 py-24 gap-4 sm:px-24">
      <Title customClassName="text-4xl sm:text-5xl md:text-6xl mb-6">
        연락망
      </Title>
      <LinkButton
        href="mailto:hadjadj0@gmail.com"
        customClassName="w-full max-w-2xl"
      >
        hadjadj0@gmail.com로 메일 보내기
      </LinkButton>
      <LinkButton
        href="https://github.com/kuman514"
        customClassName="w-full max-w-2xl"
      >
        Github 페이지 방문
      </LinkButton>
      <LinkButton
        href="https://open.kakao.com/me/kuman514"
        customClassName="w-full max-w-2xl"
      >
        kuman514 카카오톡 오픈채팅
      </LinkButton>
      <LinkButton
        href="https://open.kakao.com/me/YSOShmupRecords"
        customClassName="w-full max-w-2xl"
      >
        YSOShmupRecords 카카오톡 오픈채팅
      </LinkButton>
    </main>
  );
}
