# Agent Team Composition

## 팀 구성 개요
4명의 메인 에이전트가 각각 담당 영역을 병렬로 작업하며, 필요 시 서브에이전트를 활용하여 효율을 극대화한다.

```
Team Lead (Claude Code Main)
├── backend-dev (general-purpose)
│   ├── oh-my-claudecode:explore      # 코드베이스 탐색
│   ├── oh-my-claudecode:build-fixer  # 빌드 에러 수정
│   └── oh-my-claudecode:debugger     # 런타임 에러 디버깅
│
├── frontend-dev (general-purpose)
│   ├── oh-my-claudecode:explore      # 코드베이스 탐색
│   └── oh-my-claudecode:build-fixer  # 빌드 에러 수정
│
├── ui-designer (oh-my-claudecode:designer)
│   ├── Pencil MCP                    # .pen 파일 디자인 제작
│   └── oh-my-claudecode:explore      # 코드베이스 탐색
│
└── devops-eng (general-purpose)
    ├── oh-my-claudecode:explore      # 코드베이스 탐색
    └── oh-my-claudecode:build-fixer  # 빌드 에러 수정
```

---

## 1. backend-dev (백엔드 개발자)

| 항목 | 값 |
|------|-----|
| Agent Type | `general-purpose` |
| 담당 디렉토리 | `server/` |
| 주요 작업 | FastAPI REST API, DB 모델, CRUD 구현 |
| 상세 계획 | [backend-plan.md](./backend-plan.md) |

---

## 2. frontend-dev (프론트엔드 개발자)

| 항목 | 값 |
|------|-----|
| Agent Type | `general-purpose` |
| 담당 디렉토리 | `client/` |
| 주요 작업 | React UI 컴포넌트, API 연동, 스타일링 |
| 상세 계획 | [frontend-plan.md](./frontend-plan.md) |

---

## 3. ui-designer (UI/UX 디자이너)

| 항목 | 값 |
|------|-----|
| Agent Type | `oh-my-claudecode:designer` |
| 담당 디렉토리 | `docs/design/` |
| 주요 작업 | Pencil(.pen)로 UI 디자인 제작, 레이아웃 설계 |
| 상세 계획 | [designer-plan.md](./designer-plan.md) |

---

## 4. devops-eng (DevOps 엔지니어)

| 항목 | 값 |
|------|-----|
| Agent Type | `general-purpose` |
| 담당 디렉토리 | `gitops/` |
| 주요 작업 | Dockerfile, Docker Compose |
| 상세 계획 | [devops-plan.md](./devops-plan.md) |

---

## 팀 커뮤니케이션 규칙
1. 각 에이전트는 자신의 담당 디렉토리만 수정한다
2. 인터페이스(API 스펙)는 backend-plan.md를 기준으로 한다
3. 에이전트 간 직접 의존성이 있는 작업은 태스크로 관리한다
4. 작업 완료 후 팀 리더에게 메시지로 보고한다

## 커밋 규칙
- 작업을 **의미 있는 단위로 분리**하여 커밋한다 (한 번에 몰아서 커밋하지 않는다)
- **커밋 전에 반드시 팀 리더에게 메시지로 보고하고 승인을 받은 후** 커밋한다
- 승인 없이 자의적으로 커밋하지 않는다
