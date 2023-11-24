from django.shortcuts import render
from django.shortcuts import redirect
from django.http import HttpResponse
from .forms import empForm

def e_manager(request):
	form = empForm()
	context = {'form' : form}
	return render(request, 'e_manager/main.html',context)

def register_form(request):
	if request.method == 'POST':
		form = empForm()
		data = empForm(request.POST)
		if data.is_valid():
			data.save()
			return render(request,'e_manager/main.html', {'form' : form })
		else:
			return render(request,'e_manager/test.html')
	else:
		data = empForm()
		context = {'data' : data }
		return render(request, 'e_manager/test.html', context)
			
			