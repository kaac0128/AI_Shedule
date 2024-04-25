from django.db import models
from .utils import PriorityTypes

# Create your models here.
class Task(models.Model):
    title = models.CharField("First name", max_length=255)
    description = models.CharField("Last name", max_length=255)
    reminderDate = models.DateTimeField("Reminder Date")
    priority =  models.IntegerField(choices=PriorityTypes.choices(), default=PriorityTypes.LOW)
    frequency = models.CharField("Frequency", max_length=255)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
	
    def __str__(self):
    	return self.title