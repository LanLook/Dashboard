from typing import Optional

from pydantic import BaseModel, Field
from pydantic.types import PositiveInt


class CoreModel(BaseModel):
    """
    Any common logic to be shared by all models goes here
    """

    pass


class CountBase(CoreModel):
    count: int = Field(..., example="1")


class NameBase(CoreModel):
    name: str = Field(..., example="value")


class NameCountBase(NameBase, CountBase):
    pass


class IDModelBase(BaseModel):
    id: Optional[PositiveInt] = Field(None, example=1)


class IDModelMixin(BaseModel):
    id: PositiveInt = Field(..., example=1)
