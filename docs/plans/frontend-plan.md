# Frontend Implementation Plan

## 담당 에이전트: frontend-dev
- **Type**: `general-purpose`
- **작업 디렉토리**: `client/`

## 사전 환경
- Vite + React + TypeScript 스캐폴딩 완료
- Tailwind CSS v4 설정 완료 (vite plugin + `@import "tailwindcss"`)
- 의존성 설치 완료

---

## 파일별 구현 가이드

### 1. `src/types/guestbook.ts`
- backend-plan.md의 Data Model 기반 TypeScript 타입 정의
- Role union type 정의

### 2. `src/api/guestbook.ts`
- backend-plan.md의 API Endpoints 기반 fetch 함수 구현
- API Base URL: `http://localhost:8000`
- `fetch` API 사용 (추가 라이브러리 설치 없음)
- `Content-Type: application/json` 헤더 설정

### 3. `src/components/Header.tsx`
- 타이틀 + 부제

### 4. `src/components/GuestbookForm.tsx`
- 닉네임, 직군 선택, 메시지 입력
- 제출 후 폼 초기화 + 목록 갱신
- 기본 HTML validation 활용

### 5. `src/components/GuestbookCard.tsx`
- 닉네임, 직군 뱃지, 메시지, 등록 시간, 삭제 버튼
- 디자인은 `docs/design/`의 디자이너 설계 문서 참조

### 6. `src/components/GuestbookList.tsx`
- GuestbookCard 그리드 렌더링
- 빈 상태 메시지

### 7. `src/App.tsx`
- 컴포넌트 조합, useState/useEffect로 데이터 관리
- 등록/삭제 후 목록 자동 갱신

### 8. 정리
- 기본 Vite 템플릿 파일(assets/react.svg 등) 정리

---

## 디렉토리 생성 필요
```bash
mkdir -p client/src/components client/src/api client/src/types
```

## 실행
```bash
cd client && npm run dev
```

## 서브에이전트 활용 시나리오
| 상황 | 서브에이전트 |
|------|-------------|
| 프로젝트 구조 파악 | `oh-my-claudecode:explore` |
| TS/빌드 에러 | `oh-my-claudecode:build-fixer` |
