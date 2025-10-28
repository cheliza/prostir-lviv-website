from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from .models import Event, Movie, MenuItem, Info
import json
from datetime import date

def movie_list(request):
    """Список всіх фільмів"""
    movies = Movie.objects.filter(is_visible=True)
    movies_data = []
    for movie in movies:
        movies_data.append({
            'id': movie.id,
            'title': movie.title,
            'date': movie.date.isoformat(),
            'time': movie.time.isoformat() if movie.time else None,
            'description': movie.description,
            'image': movie.image.url if movie.image else None,
            'location': movie.location,
        })
    return JsonResponse({
        'count': len(movies_data),
        'movies': movies_data
        })


def movie_detail(request, pk):
    """Деталі конкретного фільму"""
    movie = get_object_or_404(Movie, pk=pk, is_visible=True)
    movie_data = {
        'id': movie.id,
        'title': movie.title,
        'date': movie.date.isoformat(),
        'time': movie.time.isoformat() if movie.time else None,
        'description': movie.description,
        'image': movie.image.url if movie.image else None,
        'location': movie.location,
    }
    return JsonResponse(movie_data)


def upcoming_movies(request):
    """Список майбутніх фільмів"""
    today = date.today()
    movies = Movie.objects.filter(date__gte=today, is_visible=True).order_by('date', 'time')
    movies_data = []
    for movie in movies:
        movies_data.append({
            'id': movie.id,
            'title': movie.title,
            'date': movie.date.isoformat(),
            'time': movie.time.isoformat() if movie.time else None,
            'description': movie.description,
            'image': movie.image.url if movie.image else None,
            'location': movie.location,
        })
    return JsonResponse({
        'count': len(movies_data),
        'movies': movies_data
        })

def current_movies(request):
    """Список фільмів на сьогодні"""
    today = date.today()
    movies = Movie.objects.filter(date=today, is_visible=True).order_by('time')
    movies_data = []
    for movie in movies:
        movies_data.append({
            'id': movie.id,
            'title': movie.title,
            'date': movie.date.isoformat(),
            'time': movie.time.isoformat() if movie.time else None,
            'description': movie.description,
            'image': movie.image.url if movie.image else None,
            'location': movie.location,
        })
    return JsonResponse({
        'count': len(movies_data),
        'movies': movies_data
        })

def movies_by_date(request, date):
    """Список фільмів за конкретною датою"""
    movies = Movie.objects.filter(date=date, is_visible=True).order_by('time')
    movies_data = []
    for movie in movies:
        movies_data.append({
            'id': movie.id,
            'title': movie.title,
            'date': movie.date.isoformat(),
            'time': movie.time.isoformat() if movie.time else None,
            'description': movie.description,
            'image': movie.image.url if movie.image else None,
            'location': movie.location,
        })
    return JsonResponse({
        'count': len(movies_data),
        'movies': movies_data
        })

def movie_by_title(request, title):
    """Пошук фільму за назвою"""
    movies = Movie.objects.filter(title__icontains=title, is_visible=True)
    movies_data = []
    for movie in movies:
        movies_data.append({
            'id': movie.id,
            'title': movie.title,
            'date': movie.date.isoformat(),
            'time': movie.time.isoformat() if movie.time else None,
            'description': movie.description,
            'image': movie.image.url if movie.image else None,
            'location': movie.location,
        })
    return JsonResponse({
        'count': len(movies_data),
        'movies': movies_data
        })