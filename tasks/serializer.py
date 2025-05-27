from rest_framework import serializers #funcion transforma los tipos de datos de python a json
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        #fields = ('id','title','description', 'done')
        fields = '__all__'
        model = Task

        
            
            
            
