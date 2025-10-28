from django.urls import path
from . import views

urlpatterns = [
    # Події
    # Інформація

    # Фільми
    path('movies/', views.movie_list, name='movie-list'),
    path('movies/<int:pk>/', views.movie_detail, name='movie-detail'),
    path('movies/upcoming/', views.upcoming_movies, name='upcoming-movies'),
    path('movies/current/', views.current_movies, name='current-movies'),    # Сьогоднішні
    path('movies/date/<str:date>/', views.movies_by_date, name='movies-by-date'), # По даті
    path('movies/title/<str:title>/', views.movie_by_title, name='movie-by-title'),
    
    # Меню
    path('menu/', views.menu_list, name='menu-list'),                        # Все меню
    path('menu/categories/', views.menu_categories, name='menu-categories'), # Список категорій
    path('menu/<str:category>/', views.menu_by_category, name='menu-category'), # По категорії
    path('menu/<str:category>/<str:subcategory>/', views.menu_by_subcategory, name='menu-subcategory'), # По підкатегорії
]