# Generated by Django 2.1.7 on 2019-03-29 03:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_auto_20190329_1206'),
    ]

    operations = [
        migrations.AlterField(
            model_name='howword',
            name='picture',
            field=models.ImageField(upload_to='img/', verbose_name='Картинка'),
        ),
        migrations.AlterField(
            model_name='howword',
            name='text',
            field=models.TextField(max_length=100, verbose_name='Описание'),
        ),
    ]
