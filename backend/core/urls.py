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

    # Події
    path('events/', views.event_list, name='event-list'),
    path('events/<int:pk>/', views.event_detail, name='event-detail'),
    path('events/upcoming/', views.upcoming_events, name='upcoming-events'),

    # Загальна інформація
    path('info/', views.info_list, name='info-list'),

]