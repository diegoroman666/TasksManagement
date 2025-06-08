# aqui se crean las rutas que necesita el frontend CONSULTAR        
 #path forma de definir las rutas , estas rutas reciben 3 parametros diferentes

from django.urls import path, include
# from rest_framework.documentation import include_docs_urls
from rest_framework import routers   #este router va a tomar todas esa vista y va a generar todas las urls 
from tasks import views


router = routers.DefaultRouter()     #creo un router que viene desde defaultouter
router.register(r'tasks', views.TaskViews, 'tasks')


#versionado de api
urlpatterns = [
    path("api/v1/", include(router.urls)) ,
    # path('docs/' , include_docs_urls(title="Tasks API"))
]
 
 