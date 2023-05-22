from django.db import migrations, models
from django.conf import settings
import os


def update_image_urls(apps, schema_editor):
    Product = apps.get_model('base', 'Product')
    for product in Product.objects.all():
        image_name = os.path.basename(product.image.name)
        image_url = f'{settings.MEDIA_URL}images/{image_name}'
        product.image_url = image_url
        product.save()


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_alter_product_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image_url',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.RunPython(update_image_urls),
    ]
