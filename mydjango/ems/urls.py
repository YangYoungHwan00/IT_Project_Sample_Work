from django.urls import path
from . import views

urlpatterns = [
		path('', views.ems, name='ems'),
]
