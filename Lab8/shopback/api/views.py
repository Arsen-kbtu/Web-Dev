from api.models import Product, Category
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
@csrf_exempt
def products(request):
    if request.method=="GET":return JsonResponse(list(Product.objects.values()), safe=False)
    elif request.method=="POST":
        data = json.loads(request.body)
        product = Product.objects.create(name=data["name"], price=data["price"], description=data["description"], count=data["count"], is_active=data["is_active"], category=data["category"])
        JsonResponse(product.to_json())

def product_by_id(request, product_id):
    return JsonResponse(list(Product.objects.filter(id=product_id).values()), safe=False)
@csrf_exempt
def categories(request):
    if request.method=="GET":return JsonResponse(list(Category.objects.values()), safe=False)
    elif request.method=="POST":
        data = json.loads(request.body)
        category = Category.objects.create(name=data["name"])
        JsonResponse(category.to_json())

def category_by_id(request, category_id):
    return JsonResponse(list(Category.objects.filter(id=category_id).values()), safe=False)

def category_products(request, category_id):

    return JsonResponse(list(Product.objects.filter(category=category_id).values()), safe=False)

