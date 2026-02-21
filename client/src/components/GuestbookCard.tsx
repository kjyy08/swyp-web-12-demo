import type { Guestbook } from "../types/guestbook";

interface Props {
  entry: Guestbook;
  onDelete: (id: number) => void;
}

// 직군별 뱃지 색상
const ROLE_COLORS: Record<string, string> = {
  PM: "bg-purple-100 text-purple-700",
  Designer: "bg-pink-100 text-pink-700",
  Developer: "bg-blue-100 text-blue-700",
  Other: "bg-gray-100 text-gray-600",
};

// 상대 시간 포맷
function formatTime(dateStr: string): string {
  const timestamp = dateStr.endsWith("Z") ? dateStr : dateStr + "Z";
  const diff = Date.now() - new Date(timestamp).getTime();
  const min = Math.floor(diff / 60000);
  if (min < 1) return "방금 전";
  if (min < 60) return `${min}분 전`;
  const hour = Math.floor(min / 60);
  if (hour < 24) return `${hour}시간 전`;
  const day = Math.floor(hour / 24);
  return `${day}일 전`;
}

export default function GuestbookCard({ entry, onDelete }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col gap-3 hover:shadow-md transition-shadow overflow-hidden">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="font-semibold text-gray-900 text-sm truncate">
            {entry.nickname}
          </span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${ROLE_COLORS[entry.role] ?? ROLE_COLORS.Other}`}
          >
            {entry.role}
          </span>
        </div>
        <button
          onClick={() => onDelete(entry.id)}
          className="text-gray-300 hover:text-red-400 transition-colors text-lg leading-none shrink-0"
          aria-label="삭제"
        >
          &times;
        </button>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap break-words overflow-hidden">
        {entry.message}
      </p>
      <span className="text-xs text-gray-400 mt-auto">
        {formatTime(entry.created_at)}
      </span>
    </div>
  );
}
