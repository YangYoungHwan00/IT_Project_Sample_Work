from django.shortcuts import render

def ems(request):
	return render(request, 'ems/main.html',{})

