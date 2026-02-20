# Backend Implementation Plan

## 담당 에이전트: backend-dev
- **Type**: `general-purpose`
- **작업 디렉토리**: `server/`

## 사전 환경
- uv 프로젝트 초기화 완료
- 의존성 설치 완료
- Python 3.9+

---

## API Endpoints
| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/guestbook` | 방명록 목록 조회 (최신순) |
| POST | `/api/guestbook` | 방명록 등록 |
| PUT | `/api/guestbook/{id}` | 방명록 수정 |
| DELETE | `/api/guestbook/{id}` | 방명록 삭제 |
| GET | `/api/health` | 헬스체크 |

## Data Model
```
Guestbook:
  id: int              # PK, auto increment
  nickname: str        # 닉네임 (필수, 최대 20자)
  role: str            # 직군 (PM, Designer, Developer, Other)
  message: str         # 메시지 (필수, 최대 200자)
  created_at: datetime # 등록 시간 (자동)
```

## 파일별 구현 가이드

### 1. `server/database.py`
- SQLAlchemy async engine + aiosqlite 사용
- `connect_args={"check_same_thread": False}` 필수
- async session factory 구성
- DB 초기화 함수 (create_all)

### 2. `server/models.py`
- 위 Data Model을 SQLAlchemy 모델로 구현

### 3. `server/schemas.py`
- GuestbookCreate (입력용), GuestbookUpdate (수정용, Optional), GuestbookResponse (응답용)
- role 유효성 검증: `Literal["PM", "Designer", "Developer", "Other"]`

### 4. `server/routers/guestbook.py`
- 위 API Endpoints 구현
- 존재하지 않는 id 접근 시 404 반환
- 비동기 DB 세션 사용 (`async with`)
- `APIRouter(prefix="/api/guestbook")`

### 5. `server/main.py`
- CORS 미들웨어 설정 (개발: `http://localhost:5173` 허용)
- guestbook 라우터 등록
- startup 이벤트에서 DB 테이블 생성
- 비동기(async) 패턴 사용

---

## 디렉토리 생성 필요
```bash
mkdir -p server/routers
touch server/routers/__init__.py
```

## 실행
```bash
cd server && uv run uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

## 서브에이전트 활용 시나리오
| 상황 | 서브에이전트 |
|------|-------------|
| 프로젝트 구조 파악 | `oh-my-claudecode:explore` |
| import/의존성 에러 | `oh-my-claudecode:build-fixer` |
| 런타임 에러 | `oh-my-claudecode:debugger` |
