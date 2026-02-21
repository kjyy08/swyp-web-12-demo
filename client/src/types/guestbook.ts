// 방명록 직군 타입
export type Role = "PM" | "Designer" | "Developer" | "Other";

// 방명록 응답 타입
export interface Guestbook {
  id: number;
  nickname: string;
  role: Role;
  message: string;
  created_at: string;
}

// 방명록 생성 요청 타입
export interface GuestbookCreate {
  nickname: string;
  role: Role;
  message: string;
}

// 방명록 수정 요청 타입
export interface GuestbookUpdate {
  nickname?: string;
  role?: Role;
  message?: string;
}
