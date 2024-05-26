from django.urls import path

from myapp.views import *

urlpatterns = [
    path('', blog_post_list, name='blog_post_list'),
    path('post/<int:pk>/', blog_post_detail, name='blog_post_detail'),
    path('like/<int:pk>/', like_blog_post, name='like_blog_post'),
    path('comment/<int:blog_post_id>/', add_comment, name='add_comment'),
    path('subscribe/', subscribe, name='subscribe'),
    path('contact-us/', contact_us, name='contact_us'),
]
