from django.urls import path
from . import views

urlpatterns = [
	path('', views.e_manager, name='e_manager'),
	path('', views.empForm, name='empForms')
]
