from django.urls import path
from . import views

urlpatterns = [
    path('', views.e_manager, name='e_manager'),
	path('register', views.register_form, name='register_form'),
    path('delete', views.delete_row, name='delete_row'),
	path('update', views.update_data, name='update_data'),
    path('api', views.EmpList.as_view()),
    path('api?id=<int:pk>/', views.EmpDetail.as_view()),
    path('test', views.register_form),
	# path('api/hello/', views.hello_rest_api, name='hello_rest_api'),
	
]
