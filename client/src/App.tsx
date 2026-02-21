import { useState, useEffect } from "react";
import type { Guestbook, GuestbookCreate } from "./types/guestbook";
import { fetchGuestbooks, createGuestbook, deleteGuestbook } from "./api/guestbook";
import Header from "./components/Header";
import GuestbookForm from "./components/GuestbookForm";
import GuestbookList from "./components/GuestbookList";

export default function App() {
  const [entries, setEntries] = useState<Guestbook[]>([]);

  // 목록 조회
  const loadEntries = async () => {
    try {
      const data = await fetchGuestbooks();
      setEntries(data);
    } catch {
      console.error("방명록 조회 실패");
    }
  };

  useEffect(() => {
    loadEntries();
  }, []);

  // 등록
  const handleCreate = async (data: GuestbookCreate) => {
    try {
      await createGuestbook(data);
      await loadEntries();
    } catch {
      alert("등록에 실패했습니다");
      throw new Error("등록 실패");
    }
  };

  // 삭제
  const handleDelete = async (id: number) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;
    try {
      await deleteGuestbook(id);
      await loadEntries();
    } catch {
      alert("삭제에 실패했습니다");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <Header />
        <GuestbookForm onSubmit={handleCreate} />
        <GuestbookList entries={entries} onDelete={handleDelete} />
      </div>
    </div>
  );
}
