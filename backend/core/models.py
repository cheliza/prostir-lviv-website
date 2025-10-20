from django.db import models

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
