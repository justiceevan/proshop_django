from django.urls import path
from base.views import category_views as views

urlpatterns = [
    path('', views.getCategories, name='categories'),
    path('create/', views.createCategory, name='category-create'),
    path('sub/', views.getSubCategories, name='sub-categories'),
    path('upload/', views.uploadImage, name='image-upload'),
    path('sub/create/', views.createSubCategory, name='sub-category-create'),
    path('<str:pk>/', views.getCategory, name='category'),
    path('<str:pk>/update/', views.updateCategory, name='category-update'),
    path('<str:pk>/delete/', views.deleteCategory, name='category-delete'),
    path('sub/<str:pk>/', views.getSubCategory, name='sub-category'),
    path('sub/<str:pk>/update/',
         views.updateSubCategory, name='sub-category-update'),
    path('sub/<str:pk>/delete/',
         views.deleteSubCategory, name='sub-category-delete'),
]
