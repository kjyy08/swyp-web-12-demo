# DevOps Implementation Plan

## 담당 에이전트: devops-eng
- **Type**: `general-purpose`
- **작업 디렉토리**: `gitops/`

## 사전 환경
- `gitops/` 디렉토리 존재 (비어있음)
- server/, client/ 코드는 다른 에이전트가 작업 중

---

## 파일별 구현 가이드

### 1. `gitops/docker/Dockerfile.server`
- `.venv`, `__pycache__` 제외
- uv sync로 의존성 설치 (lock 파일 기반)
- non-root user 사용 권장

### 2. `gitops/docker/Dockerfile.client`
- Multi-stage build (빌드 → nginx 서빙)

### 3. `gitops/docker/nginx.conf`
- `/` → React SPA 서빙 (`try_files $uri /index.html`)
- `/api/` → `http://server:8000` 프록시
- gzip 압축 활성화

### 4. `gitops/docker-compose.yml`
- docker-compose.yml은 gitops/에 위치하므로 상대 경로 주의
- server 컨테이너 이름을 `server`로 설정해 nginx 프록시 연동

### 5. Helm Chart (`gitops/helm/guestbook/`)
- Chart.yaml, values.yaml 작성
- templates/: server-deployment, server-service, client-deployment, client-service, ingress

---

## 디렉토리 생성 필요
```bash
mkdir -p gitops/docker
mkdir -p gitops/helm/guestbook/templates
```

## 검증
```bash
cd gitops && docker compose up --build
# http://localhost:3000 (프론트엔드)
# http://localhost:8000/docs (API 문서)
```

## 서브에이전트 활용 시나리오
| 상황 | 서브에이전트 |
|------|-------------|
| server/client 구조 파악 | `oh-my-claudecode:explore` |
| Docker 빌드 실패 | `oh-my-claudecode:build-fixer` |
