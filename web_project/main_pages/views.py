from django.shortcuts import render

# Create your views here.

def home_view(request):
	return render(request, 'home.html')		

def project_view(request):
	return render(request, 'projects.html')

def playground_view(request):
	return render(request, 'playground.html')