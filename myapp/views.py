from django.shortcuts import render, get_object_or_404,redirect
from django.http import JsonResponse
from .models import BlogPost, Comment
from .forms import CommentForm,SubscriberForm, InquiryForm

import logging
# Create your views here.
def index(request):
    return render(request, 'index.html')

from django.shortcuts import render
from django.http import HttpResponse
from .models import BlogPost

def blog_post_list(request):
    blog_posts = BlogPost.objects.all()
    blog_posts_with_delay = [(post, index * 100) for index, post in enumerate(blog_posts)]
    context = {'blog_posts': blog_posts_with_delay}
    return render(request, 'index.html', context)


def blog_post_detail(request, pk):
    blog_post = get_object_or_404(BlogPost, pk=pk)
    comments = Comment.objects.filter(blog_post=blog_post)
    print(comments)
    return render(request, 'comment.html', {'blog_post': blog_post, 'comments': comments})


from django.shortcuts import get_object_or_404

from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def like_blog_post(request, pk):
    if request.method == 'POST':
        blog_post = get_object_or_404(BlogPost, pk=pk)
        blog_post.likes += 1
        blog_post.save()

        return JsonResponse({'likes': blog_post.likes})

    return JsonResponse({'error': 'Invalid request method.'})




logger = logging.getLogger(__name__)

def add_comment(request, blog_post_id):
    if request.method == 'POST':
        logger.debug(f'Received POST request for blog post ID: {blog_post_id}')
        blog_post = get_object_or_404(BlogPost, id=blog_post_id)
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.blog_post = blog_post
            comment.save()
            logger.debug('Comment saved successfully')
            return JsonResponse({'message': 'Comment submitted successfully'})
        else:
            logger.error('Form validation failed')
            return JsonResponse({'error': 'Invalid form data'}, status=400)
    logger.error('Invalid request method')
    return JsonResponse({'error': 'Invalid request method'}, status=405)


def subscribe(request):
    if request.method == 'POST':
        form = SubscriberForm(request.POST)
        if form.is_valid():
            form.save()
            return JsonResponse({'success': True})  # Return a JSON response indicating success
        else:
            errors = form.errors.as_json()
            return JsonResponse({'success': False, 'errors': errors}, status=400)  # Return validation errors
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)  # Return error for non-POST requests
from django.contrib import messages
def contact_us(request):
    if request.method == 'POST':
        form = InquiryForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Thanks For contacting us!!!")
            return JsonResponse({'success': True})  # Return a JSON response indicating success
        else:
            errors = form.errors.as_json()
            return JsonResponse({'success': False, 'errors': errors}, status=400)  # Return validation errors
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)  # Return error for non-POST requests