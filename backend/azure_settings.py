# flake8: noqa
from .settings import *

DEBUG = False

ALLOWED_HOSTS = ['proshop-eshop.azurewebsites.net']

MEDIA_ROOT = ''
MEDIA_URL = 'https://proshopstorage.blob.core.windows.net/proshopcontainer/images/'


STATICFILES_STORAGE = 'storages.backends.azure_storage.AzureStorage'
DEFAULT_FILE_STORAGE = 'storages.backends.azure_storage.AzureStorage'

AZURE_ACCOUNT_NAME = os.environ.get('AZ_STORAGE_ACCOUNT_NAME')
AZURE_CONTAINER = os.environ.get('AZ_STORAGE_CONTAINER')
AZURE_ACCOUNT_KEY = os.environ.get('AZ_STORAGE_KEY')

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.environ.get('APP_DB_NAME'),
        'USER': os.environ.get('POSTGRES_ADMIN_USER'),
        'PASSWORD': os.environ.get('POSTGRES_ADMIN_PASSWORD'),
        'HOST': os.environ.get('POSTGRES_HOST'),
        'PORT': '5432',
        'OPTIONS': {'sslmode': 'require'},
    }
}
