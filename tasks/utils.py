from enum import IntEnum

class PriorityTypes(IntEnum):
  HIGH = 1
  MEDIUM = 2
  LOW = 3
  
  @classmethod
  def choices(cls):
    return [(key.value, key.name) for key in cls]