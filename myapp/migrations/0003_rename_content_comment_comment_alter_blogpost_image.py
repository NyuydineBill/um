# Generated by Django 5.0.6 on 2024-05-25 21:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0002_blogpost_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='content',
            new_name='comment',
        ),
        migrations.AlterField(
            model_name='blogpost',
            name='image',
            field=models.URLField(default='https://picsum.photos/6/55'),
        ),
    ]