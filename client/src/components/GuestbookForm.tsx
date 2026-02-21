import { useState } from "react";
import type { Role, GuestbookCreate } from "../types/guestbook";

interface Props {
  onSubmit: (data: GuestbookCreate) => Promise<void>;
}

const ROLES: { value: Role; label: string }[] = [
  { value: "PM", label: "PM" },
  { value: "Designer", label: "Designer" },
  { value: "Developer", label: "Developer" },
  { value: "Other", label: "Other" },
];

export default function GuestbookForm({ onSubmit }: Props) {
  const [nickname, setNickname] = useState("");
  const [role, setRole] = useState<Role>("Developer");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname.trim() || !message.trim()) return;

    setLoading(true);
    try {
      await onSubmit({ nickname: nickname.trim(), role, message: message.trim() });
      setNickname("");
      setRole("Developer");
      setMessage("");
    } catch {
      // 에러 시 폼 데이터 유지
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-10"
    >
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          maxLength={20}
          required
          className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as Role)}
          className="px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm bg-white"
        >
          {ROLES.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>
      <textarea
        placeholder="메시지를 입력하세요"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        maxLength={200}
        required
        rows={3}
        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm resize-none mb-4"
      />
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-400">{message.length}/200</span>
        <button
          type="submit"
          disabled={loading || !nickname.trim() || !message.trim()}
          className="px-6 py-2.5 bg-indigo-500 text-white rounded-lg text-sm font-medium hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? "등록 중..." : "등록하기"}
        </button>
      </div>
    </form>
  );
}
