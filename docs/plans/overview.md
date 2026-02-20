# Implementation Plan Overview

## 목표
스위프 웹 12기 데모데이 행사에서 Claude Code의 에이전트 팀 기능을 시연하기 위한 **방명록 풀스택 애플리케이션** 구축.

## 시연 시나리오
1. 발표자가 Claude Code에 팀 에이전트 실행 명령을 입력
2. 4명의 에이전트(backend, frontend, designer, devops)가 병렬로 작업 시작
3. Q&A 시간(약 5분) 동안 에이전트가 자율적으로 개발
4. Q&A 종료 후 완성된 결과물을 청중과 함께 확인

## 계획 문서 구성
| 문서 | 설명 |
|------|------|
| [overview.md](./overview.md) | 전체 계획 개요 (이 문서) |
| [team-composition.md](./team-composition.md) | 에이전트 팀 구성, 역할, 서브에이전트 |
| [backend-plan.md](./backend-plan.md) | 백엔드 구현 계획 |
| [frontend-plan.md](./frontend-plan.md) | 프론트엔드 구현 계획 |
| [designer-plan.md](./designer-plan.md) | UI/UX 디자인 계획 |
| [devops-plan.md](./devops-plan.md) | GitOps/인프라 구현 계획 |

## 사전 셋업 완료 항목
- [x] server/ - uv 프로젝트 초기화 + 의존성 설치
- [x] client/ - Vite + React + TS 스캐폴딩 + Tailwind CSS v4 설정
- [x] .gitignore 설정
