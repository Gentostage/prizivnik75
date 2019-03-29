from django.db import models

# Create your models here.
class Howword(models.Model):
    text = models.TextField(max_length=100, verbose_name=u"Описание")
    picture = models.ImageField(upload_to='img/',height_field=None, width_field=None, max_length=100, verbose_name=u"Картинка")

    class Meta:
        verbose_name = u"Как мы работаем"
        verbose_name_plural = u"Как мы работаем"

    def __str__(self):
        return self.text

class Trust(models.Model):
    titel = models.CharField(max_length=100)
    text = models.CharField(max_length=250)
    picture = models.ImageField(upload_to='img/', height_field=None, width_field=None, max_length=100)

    class Meta:
        verbose_name = u"Нам доверяют"
        verbose_name_plural = u"Нам доверяют"

    def __str__(self):
        return self.text

class Content(models.Model):
    text = models.CharField(max_length=100)
    picture = models.ImageField(upload_to='img/', height_field=None, width_field=None, max_length=100)
    class Meta:
        verbose_name = u"Услуги"
        verbose_name_plural = u"Услуги"

    def __str__(self):
        return self.text

class Violations(models.Model):
    text = models.CharField(max_length=100)
    class Meta:
        verbose_name = u"Нарушения"
        verbose_name_plural = u"Нарушения"

    def __str__(self):
        return self.text

class FAQ(models.Model):
    questions = models.CharField(max_length=100)
    asked = models.CharField(max_length=1000)
    class Meta:
        verbose_name = u"Вопрос ответ"
        verbose_name_plural = u"Вопрос ответ"
    def __str__(self):
        return self.questions
