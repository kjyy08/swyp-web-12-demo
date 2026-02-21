import type { Guestbook, GuestbookCreate } from "../types/guestbook";

// Docker: nginx 프록시 경로 사용, 개발: Vite proxy 또는 직접 접근
const API_BASE = "";

// 방명록 목록 조회
export async function fetchGuestbooks(): Promise<Guestbook[]> {
  const res = await fetch(`${API_BASE}/api/guestbook`);
  if (!res.ok) throw new Error("방명록 조회 실패");
  return res.json();
}

// 방명록 등록
export async function createGuestbook(data: GuestbookCreate): Promise<Guestbook> {
  const res = await fetch(`${API_BASE}/api/guestbook`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("방명록 등록 실패");
  return res.json();
}

// 방명록 삭제
export async function deleteGuestbook(id: number): Promise<void> {
  const res = await fetch(`${API_BASE}/api/guestbook/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("방명록 삭제 실패");
}
