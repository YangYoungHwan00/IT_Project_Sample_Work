from django.shortcuts import render
from django.shortcuts import redirect
from .forms import empForm
from .models import emp
from rest_framework.decorators import api_view
from .serializers import EmpSerializer
from rest_framework import generics


def e_manager(request):
	form = empForm()
	empdata = emp.objects.all().order_by('id')
	context = {'form' : form,
			'empdata' : empdata }
	return render(request, 'e_manager/main.html',context)

def register_form(request):
	if request.method == 'POST':
		data = empForm(request.POST)
		if data.is_valid():
			data.save()
			return redirect('http://127.0.0.1:8000/')
		else:
			return render(request,'e_manager/test.html')
	else:
		data = empForm()
		context = {'data' : data }
		return render(request, 'e_manager/test.html', context)

def delete_row(request):
	if request.method == 'POST':
		empdata = emp.objects.all()
		empdata.last().delete()
		return redirect('http://127.0.0.1:8000/')

def update_data(request):
	if request.method == 'POST':
		qd = request.POST.get('np')
		qd = int(qd)
		print(qd)
		item = emp.objects.filter(EMPNO=qd)
		item.delete()
		return redirect('http://127.0.0.1:8000/')	
	else:
		return render(request, 'e_manager/test.html')

# @api_view(['GET'])
# def hello_rest_api(requeset):
# 	data = {'message': 'Hello, REST API!'}
# 	return Response(data)

class EmpList(generics.ListCreateAPIView):
	queryset = emp.objects.all().order_by('id')
	serializer_class = EmpSerializer

class EmpDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = emp.objects
	#lookup_field = 'EMPNO'
	serializer_class = EmpSerializer

	


