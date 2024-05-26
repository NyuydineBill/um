# Generated by Django 5.0.6 on 2024-05-26 00:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0003_rename_content_comment_comment_alter_blogpost_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='Subscriber',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('subscribed_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.AlterField(
            model_name='blogpost',
            name='image',
            field=models.URLField(default='https://picsum.photos/16/63'),
        ),
    ]