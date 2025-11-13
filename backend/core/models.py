from django.db import models
import cloudinary
import cloudinary.models

class Event(models.Model):
    title = models.CharField(max_length=200, verbose_name="Назва події")
    description = models.TextField(verbose_name="Опис події")
    date = models.DateField(verbose_name="Дата проведення")
    time = models.TimeField(blank=True, null=True, verbose_name="Час проведення")
    location = models.CharField(max_length=200, verbose_name="Локація")
    image = models.ImageField(upload_to='events/', blank=True, null=True, verbose_name="Зображення")
    is_published = models.BooleanField(default=True, verbose_name="Опубліковано")

    def __str__(self):
        return f"{self.title} ({self.date})"

    class Meta:
        verbose_name = "Подія"
        verbose_name_plural = "Події"
        ordering = ["-date"]


class Info(models.Model):
    title = models.CharField(max_length=200, verbose_name="Назва організації")
    description = models.TextField(verbose_name="Опис")
    address = models.CharField(max_length=255, verbose_name="Адреса", blank=True, null=True)
    phone = models.CharField(max_length=50, verbose_name="Телефон", blank=True, null=True)
    email = models.EmailField(verbose_name="Email", blank=True, null=True)
    instagram = models.URLField(verbose_name="Instagram", blank=True, null=True)
    image = models.ImageField(upload_to='info/', blank=True, null=True, verbose_name="Логотип")
    is_published = models.BooleanField(default=True, verbose_name="Показувати на сайті")

    class Meta:
        verbose_name = "Загальна інформація"
        verbose_name_plural = "Загальна інформація"

    def __str__(self):
        return self.title


class Movie(models.Model):
    title = models.CharField(max_length=255, verbose_name="Назва фільму")
    date = models.DateField(verbose_name="Дата показу")
    time = models.TimeField(blank=True, null=True, verbose_name="Час початку показу")
    description = models.TextField(verbose_name="Опис", blank=True, null=True)
    image = cloudinary.models.CloudinaryField(
        'image', 
        folder='prostir/movies', 
        blank=True, 
        null=True, 
        verbose_name="Зображення"
    )   
    location = models.CharField(max_length=255, verbose_name="Локація", blank=True, null=True)
    is_visible = models.BooleanField(default=True, verbose_name="Показувати на сайті")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Фільм"
        verbose_name_plural = "Фільми"
        ordering = ['-date', '-time']


class MenuItem(models.Model):
    CATEGORY_CHOICES = [
        ('food', 'Їжа'),
        ('drink', 'Напій'),
    ]
    
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, verbose_name="Категорія")
    subcategory = models.CharField(max_length=100, verbose_name="Підкатегорія (напр. 'Кава', 'Бургери')", blank=True, null=True)
    name = models.CharField(max_length=255, verbose_name="Назва")
    description = models.TextField(verbose_name="Опис", blank=True, null=True)
    weight_grams = models.IntegerField(verbose_name="Вага (грами)", blank=True, null=True)
    volume_ml = models.IntegerField(verbose_name="Об'єм (мл)", blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Ціна")

    def __str__(self):
        return f"{self.name} ({self.category})"

    class Meta:
        verbose_name = "Позиція меню"
        verbose_name_plural = "Меню"
        ordering = ['category', 'name']