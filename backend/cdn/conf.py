import os
import storages

AWS_ACCESS_KEY_ID = os.environ.get('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = os.environ.get('AWS_SECRET_ACCESS_KEY')
AWS_STORAGE_BUCKET_NAME = "proshop"
AWS_S3_ENDPOINT_URL = "https://proshop.nyc3.digitaloceanspaces.com"

AWS_S3_OBJECT_PARAMETERS = {
    'CacheControl': 'max-age=86400',
}

AWS_DEFAULT_ACL = 'public-read'
AWS_QUERYSTRING_AUTH = False

DEFAULT_FILE_STORAGE = "backend.cdn.backends.MediaStorageS3Boto3Storage"
