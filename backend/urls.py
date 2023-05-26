from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('api/auth/', include('djoser.urls')),  # third party
    path('api/auth/', include('djoser.urls.jwt')),  # third party
    path('api/auth/', include('djoser.social.urls')),  # third party

    path('api/users/', include('users.urls')),

    path('api/products/', include('base.urls.product_urls')),
    path('api/orders/', include('base.urls.order_urls')),
    path('api/categories/', include('base.urls.category_urls')),


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
