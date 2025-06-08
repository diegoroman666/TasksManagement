#funciones que responden consultas a los cliente
from rest_framework import viewsets
from .models import Task
from .serializer import TaskSerializer

<<<<<<< HEAD
=======
# Aqui se crea todo el CRUD  que vamos a necesitar.

>>>>>>> 0325d6e351d0f8afd8141d3e15c954cbd6afbdcf
class TaskViews(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
