from datetime import datetime
from typing import Literal, Optional

from pydantic import BaseModel, Field


class GuestbookCreate(BaseModel):
    nickname: str = Field(max_length=20)
    role: Literal["PM", "Designer", "Developer", "Other"]
    message: str = Field(max_length=200)


class GuestbookUpdate(BaseModel):
    nickname: Optional[str] = Field(None, max_length=20)
    role: Optional[Literal["PM", "Designer", "Developer", "Other"]] = None
    message: Optional[str] = Field(None, max_length=200)


class GuestbookResponse(BaseModel):
    id: int
    nickname: str
    role: str
    message: str
    created_at: datetime

    model_config = {"from_attributes": True}
