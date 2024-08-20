interface Props {
  editedDate: Date;
}

export default function MostRecentlyEdited({ editedDate }: Props) {
  return (
    <div className="w-full text-right">
      최근 수정 일자: {editedDate.getFullYear()}년 {editedDate.getMonth() + 1}월{' '}
      {editedDate.getDate()}일
    </div>
  );
}
