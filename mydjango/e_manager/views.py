from django.shortcuts import render
from django.shortcuts import redirect
from django.http import HttpResponse
from .forms import empForm
from .models import emp

def e_manager(request):
	form = empForm()
	empdata = emp.objects.all()
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
		#item = emp.objects.get('EMPNO' == 1)
		#item.delete()
		return redirect('http://127.0.0.1:8000/')	
	else:
		return render(request, 'e_manager/test.html')