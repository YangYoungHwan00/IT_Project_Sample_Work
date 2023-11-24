from django.shortcuts import render
from django.http import HttpResponse
from .forms import empForm
from .models import emp

def e_manager(request):
	form = empForm()
	context = {'form' : form}
	return render(request, 'e_manager/main.html',context)