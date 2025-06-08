#funciones que responden consultas a los cliente
from rest_framework import viewsets
from .models import Task
from .serializer import TaskSerializer

class TaskViews(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
