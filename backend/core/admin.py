from django.contrib import admin
from .models import Event, Info, Movie, MenuItem

admin.site.register(Event)
admin.site.register(Info)
admin.site.register(Movie)
admin.site.register(MenuItem)