# home view

from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view, permission_classes


@permission_classes([AllowAny])
def home(request):
    return render(request, 'home.html')
