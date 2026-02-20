# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Tech Stack
- **Backend**: FastAPI + SQLAlchemy + aiosqlite (SQLite)
- **Frontend**: React + Vite + TypeScript + Tailwind CSS v4
- **Infra**: Docker, Docker Compose, ArgoCD Helm Chart
- **Package Manager**: uv (backend), npm (frontend)

## Commit Convention

### 형식
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Type
| Type       | 설명 |
|------------|------|
| `feat`     | 새로운 기능 추가 |
| `fix`      | 버그 수정 |
| `docs`     | 문서 변경 |
| `design`     | 사용자 UI 디자인 변경 |
| `style`    | 코드 포맷팅, 세미콜론 누락 등 (로직 변경 없음) |
| `refactor` | 리팩토링 (기능/버그 변경 없음) |
| `chore`    | 빌드, 설정 파일 변경 등 기타 |
| `ci`       | CI/CD 설정 변경 |

### 예시
```
feat(server): add guestbook CRUD API endpoints
feat(client): add guestbook form and card components
chore(gitops): add Dockerfile and docker-compose
docs: add implementation plan documents
```

## Development Commands

### Backend (server/)
```bash
# 서버 실행
cd server && uv run uvicorn main:app --reload --host 0.0.0.0 --port 8000

# 의존성 추가
cd server && uv add <package>
```

### Frontend (client/)
```bash
# 개발 서버 실행
cd client && npm run dev

# 빌드
cd client && npm run build

# 린트
cd client && npm run lint
```

### Docker (gitops/)
```bash
cd gitops && docker compose up --build
# Frontend: http://localhost:3000
# API Docs: http://localhost:8000/docs
```

## Architecture

모노레포 구조로, 각 디렉토리는 독립적인 담당 영역을 가진다.

- `server/` - FastAPI 백엔드. async SQLAlchemy + aiosqlite로 SQLite 비동기 접근. API prefix는 `/api/`.
- `client/` - React SPA. Tailwind CSS v4는 Vite 플러그인 방식(`@tailwindcss/vite`)으로 설정됨. `@import "tailwindcss"`만 사용.
- `gitops/` - Docker, Docker Compose, ArgoCD Helm Chart. nginx에서 `/api/` 요청을 백엔드로 프록시.
- `docs/plans/` - 에이전트 팀 구현 계획 문서. API 스펙과 데이터 모델은 `backend-plan.md`가 원본.
- `docs/design/` - Pencil MCP(.pen) UI 디자인 산출물.

## Rules
- 테스트 코드는 작성하지 않는다
- 한국어 주석 사용
- 코드는 간결하고 읽기 쉽게 작성
- 에러 핸들링은 기본적인 수준으로만
