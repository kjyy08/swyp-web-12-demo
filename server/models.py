from datetime import datetime, timezone

from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from database import Base


class Guestbook(Base):
    __tablename__ = "guestbook"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    nickname: Mapped[str] = mapped_column(String(20))
    role: Mapped[str] = mapped_column(String(20))
    message: Mapped[str] = mapped_column(String(200))
    created_at: Mapped[datetime] = mapped_column(default=lambda: datetime.now(timezone.utc))
