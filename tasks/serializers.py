from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task 
        fields = ('pk','title', 'description', 'reminderDate', 'priority','frequency', 'createdAt')
        read_only_fields = ('createdAt',)