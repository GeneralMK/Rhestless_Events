
from django.db import reset_queries
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')