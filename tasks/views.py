#funciones que responden consultas a los cliente
from rest_framework import viewsets
from .models import Task
from .serializer import TaskSerializer

# Aqui se crea todo el CRUD  que vamos a necesitar.

class TaskViews(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
