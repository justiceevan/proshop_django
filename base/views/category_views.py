from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser

from base.models import Category, SubCategory
from base.serializer import CategorySerializer, SubCategorySerializer


@api_view(['GET'])
def getCategories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getCategory(request, pk):
    category = Category.objects.get(_id=pk)
    serializer = CategorySerializer(category, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getSubCategories(request):
    subCategories = SubCategory.objects.all()
    serializer = SubCategorySerializer(subCategories, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getSubCategory(request, pk):
    subCategory = SubCategory.objects.get(_id=pk)
    serializer = SubCategorySerializer(subCategory, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createCategory(request):
    category = Category.objects.create(
        name='Sample Name',
        slug='sample-slug')
    serializer = CategorySerializer(category, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateCategory(request, pk):
    data = request.data
    category = Category.objects.get(_id=pk)

    category.name = data['name']
    category.slug = data['slug']

    category.save()

    serializer = CategorySerializer(category, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteCategory(request, pk):
    category = Category.objects.get(_id=pk)
    category.delete()
    return Response('Category Deleted')


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createSubCategory(request):
    subCategory = SubCategory.objects.create(
        name='Sample Name',
        slug='sample-slug')
    serializer = SubCategorySerializer(subCategory, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateSubCategory(request, pk):
    data = request.data

    category = Category.objects.get(_id=data['categoryId'])

    subCategory = SubCategory.objects.get(_id=pk)

    subCategory.category = category
    subCategory.name = data['name']
    subCategory.slug = data['slug']

    subCategory.save()

    serializer = SubCategorySerializer(subCategory, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteSubCategory(request, pk):
    subCategory = SubCategory.objects.get(_id=pk)
    subCategory.delete()
    return Response('SubCategory Deleted')
