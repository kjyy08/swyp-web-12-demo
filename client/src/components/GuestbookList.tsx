import type { Guestbook } from "../types/guestbook";
import GuestbookCard from "./GuestbookCard";

interface Props {
  entries: Guestbook[];
  onDelete: (id: number) => void;
}

export default function GuestbookList({ entries, onDelete }: Props) {
  if (entries.length === 0) {
    return (
      <div className="text-center py-20 text-gray-400">
        <p className="text-lg">아직 방명록이 없어요</p>
        <p className="text-sm mt-1">첫 번째 메시지를 남겨보세요!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {entries.map((entry) => (
        <GuestbookCard key={entry.id} entry={entry} onDelete={onDelete} />
      ))}
    </div>
  );
}
