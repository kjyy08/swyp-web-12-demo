from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import init_db
from routers.guestbook import router as guestbook_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    """앱 시작 시 DB 테이블 생성"""
    await init_db()
    yield


app = FastAPI(title="Guestbook API", lifespan=lifespan, redirect_slashes=False)

# CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["Content-Type"],
)

# 라우터 등록
app.include_router(guestbook_router)


@app.get("/api/health")
async def health_check():
    return {"status": "ok"}
