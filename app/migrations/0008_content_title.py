# Generated by Django 2.1.7 on 2019-03-31 03:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_auto_20190331_1213'),
    ]

    operations = [
        migrations.AddField(
            model_name='content',
            name='title',
            field=models.CharField(default='', max_length=100, verbose_name='Заголовок'),
            preserve_default=False,
        ),
    ]
