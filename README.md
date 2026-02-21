# SWYP Web 12기 데모데이 - 방명록 앱

## Project Overview

스위프(SWYP) 웹 12기 데모데이 행사에서 **Claude Code의 멀티 에이전트 팀 기능**을 시연하기 위해 만든 프로젝트입니다.

에이전트 팀을 실행하면 4명의 AI 에이전트가 자율적으로 협업하여 방명록 앱을 완성합니다.

### 에이전트 팀원 구성

| 에이전트 | 역할 | 담당 |
|---------|------|------|
| **backend-dev** | 백엔드 개발자 | FastAPI REST API, DB 모델, CRUD |
| **frontend-dev** | 프론트엔드 개발자 | React UI 컴포넌트, API 연동, 스타일링 |
| **ui-designer** | UI/UX 디자이너 | UI/UX 설계, 디자인 가이드 작성 |
| **devops-eng** | DevOps 엔지니어 | Dockerfile, Docker Compose |

## 기술 스택

| 영역 | 기술 |
|------|------|
| Backend | FastAPI + SQLAlchemy + aiosqlite (SQLite) |
| Frontend | React + Vite + TypeScript + Tailwind CSS v4 |
| Infra | Docker, Docker Compose |
| AI Tool | [Claude Code](https://docs.anthropic.com/en/docs/claude-code) + [Oh-My-ClaudeCode](https://github.com/nicekid1/oh-my-claudecode) |

## 프로젝트 구조

```
swyp-web-12-demo/
├── server/          # FastAPI 백엔드 (Python, uv)
├── client/          # React + Vite + Tailwind CSS 프론트엔드 (TypeScript)
├── gitops/          # Dockerfile, Docker Compose
├── docs/
│   ├── plans/       # 에이전트 팀 구현 계획 문서
│   └── design/      # UI/UX 디자인 설계 문서
├── CLAUDE.md        # 프로젝트 설정 (에이전트 공유)
└── README.md
```

## 직접 실행해보기

### Docker Compose (권장)

```bash
cd gitops
docker compose up --build
```

- 프론트엔드: http://localhost:3000
- API 문서: http://localhost:8000/docs

### 개별 실행

**백엔드**
```bash
cd server
uv run uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

**프론트엔드**
```bash
cd client
npm install
npm run dev
```

- 프론트엔드: http://localhost:5173

## API

| Method | Path | 설명 |
|--------|------|------|
| GET | `/api/guestbook` | 방명록 목록 조회 (최신순) |
| POST | `/api/guestbook` | 방명록 등록 |
| PUT | `/api/guestbook/{id}` | 방명록 수정 |
| DELETE | `/api/guestbook/{id}` | 방명록 삭제 |
| GET | `/api/health` | 헬스체크 |

## 에이전트 팀 실행 방법

> Claude Code와 필요한 플러그인이 설치되어 있어야 합니다.

### 사전 준비

1. [Claude Code](https://docs.anthropic.com/en/docs/claude-code) 설치
2. [Oh-My-ClaudeCode](https://github.com/nicekid1/oh-my-claudecode) 플러그인 설치
3. 에이전트 팀 기능 활성화 (실험적 기능)
   `~/.claude/settings.json`에 아래 내용 추가:
   ```json
   {
     "env": {
       "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
     }
   }
   ```

### 실행

Claude Code에서 아래 프롬프트를 입력하면 4명의 에이전트가 동시에 작업을 시작합니다.

```
/team 스위프 웹 12기 데모데이 방명록 풀스택 앱을 만들어줘.
backend-dev는 server/에 FastAPI API를,
frontend-dev는 client/에 React UI를,
ui-designer는 docs/design/의 UI/UX 디자인을,
devops-eng는 gitops/에 Dockerfile과 Docker Compose를 작성해.
각 팀원은 서브에이전트를 적극 활용해서 작업해.
docs/plans/ 폴더의 계획 문서를 참고해.
```

