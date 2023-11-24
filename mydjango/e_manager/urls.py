from django.urls import path
from . import views

urlpatterns = [
	path('', views.e_manager, name='e_manager'),
	path('register', views.register_form, name='register_form'),
]
