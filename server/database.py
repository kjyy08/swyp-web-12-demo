from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession
from sqlalchemy.orm import DeclarativeBase

# SQLite 비동기 엔진
DATABASE_URL = "sqlite+aiosqlite:///./data/guestbook.db"

engine = create_async_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False},
)

# 비동기 세션 팩토리
AsyncSessionLocal = async_sessionmaker(engine, expire_on_commit=False)


class Base(DeclarativeBase):
    pass


async def init_db():
    """DB 테이블 생성"""
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)


async def get_db() -> AsyncSession:
    """비동기 DB 세션 의존성"""
    async with AsyncSessionLocal() as session:
        yield session
