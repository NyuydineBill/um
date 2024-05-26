from django.contrib import admin
from myapp.models import *
# Register your models here.
admin.site.register(BlogPost)
admin.site.register(Comment)
admin.site.register(Subscriber)
admin.site.register(Inquiry)