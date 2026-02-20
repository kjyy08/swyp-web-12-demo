# Designer Implementation Plan

## 담당 에이전트: ui-designer
- **Type**: `oh-my-claudecode:designer`
- **작업 디렉토리**: `docs/design/`
- **디자인 도구**: Pencil MCP (.pen 파일)

## 역할
- Pencil로 방명록 앱 UI 디자인 제작 (.pen 파일)
- 페이지 레이아웃, 컴포넌트 디자인, 색상 팔레트, 타이포그래피 설계
- frontend-dev가 구현 시 참조할 시각적 디자인 산출물 제공

## 작업 흐름
1. Pencil `get_guidelines` 로 디자인 가이드라인 확인
2. `get_style_guide_tags` → `get_style_guide` 로 디자인 영감 수집
3. `docs/design/guestbook.pen` 파일에 UI 디자인 제작
   - 메인 페이지 레이아웃 (Header, Form, Card List)
   - 방명록 카드 컴포넌트 (닉네임, 직군 뱃지, 메시지, 시간)
   - 등록 폼 컴포넌트
   - 모바일/데스크톱 반응형 변형
4. `get_screenshot` 으로 디자인 검증
5. 팀 리더에게 완료 보고

## Pencil 활용 가이드
- `open_document("docs/design/guestbook.pen")` 로 시작
- `batch_get` 으로 디자인 시스템 컴포넌트 탐색
- `batch_design` 으로 화면 구성 (Insert, Update, Copy 등)
- `get_screenshot` 으로 결과물 시각적 검증
- `get_variables` / `set_variables` 로 색상, 테마 변수 관리

## 디자인 방향
- 모던하고 깔끔한 디자인
- 행사 분위기에 맞는 밝고 친근한 톤
- 카드형 레이아웃
- 반응형 (모바일 우선)

## 서브에이전트 활용 시나리오
| 상황 | 서브에이전트 |
|------|-------------|
| 코드 구조 파악 | `oh-my-claudecode:explore` |
