from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from database import get_db
from models import Guestbook
from schemas import GuestbookCreate, GuestbookUpdate, GuestbookResponse

router = APIRouter(prefix="/api/guestbook", tags=["guestbook"])


@router.get("", response_model=list[GuestbookResponse])
async def get_guestbooks(db: AsyncSession = Depends(get_db)):
    """방명록 목록 조회 (최신순)"""
    result = await db.execute(
        select(Guestbook).order_by(Guestbook.created_at.desc())
    )
    return result.scalars().all()


@router.post("", response_model=GuestbookResponse, status_code=201)
async def create_guestbook(data: GuestbookCreate, db: AsyncSession = Depends(get_db)):
    """방명록 등록"""
    entry = Guestbook(**data.model_dump())
    db.add(entry)
    await db.commit()
    await db.refresh(entry)
    return entry


@router.put("/{entry_id}", response_model=GuestbookResponse)
async def update_guestbook(
    entry_id: int, data: GuestbookUpdate, db: AsyncSession = Depends(get_db)
):
    """방명록 수정"""
    entry = await db.get(Guestbook, entry_id)
    if not entry:
        raise HTTPException(status_code=404, detail="방명록을 찾을 수 없습니다")

    for key, value in data.model_dump(exclude_unset=True).items():
        setattr(entry, key, value)

    await db.commit()
    await db.refresh(entry)
    return entry


@router.delete("/{entry_id}", status_code=204)
async def delete_guestbook(entry_id: int, db: AsyncSession = Depends(get_db)):
    """방명록 삭제"""
    entry = await db.get(Guestbook, entry_id)
    if not entry:
        raise HTTPException(status_code=404, detail="방명록을 찾을 수 없습니다")

    await db.delete(entry)
    await db.commit()
