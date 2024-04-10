from django.shortcuts import render
from django.http import JsonResponse
from api.models import Company, Vacancy
from django.views.decorators.csrf import csrf_exempt
import json
from api.serializers import CompanySerializer, VacancySerializer

@csrf_exempt
def companies(request):
    if request.method == "POST":
        data = json.loads(request.body)
        serializer = CompanySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
    elif request.method == "GET":
        return JsonResponse([company.to_json() for company in Company.objects.all()], safe=False)

def company(request, company_id):
    if request.method == "GET":
        if Company.objects.filter(id=company_id).exists():
            serializer=CompanySerializer(Company.objects.get(id=company_id))
            return JsonResponse(serializer.data, safe=False)
        else:
            return JsonResponse({"error": "company not found"})
    

def company_vacancies(request, company_id):
    if not (Company.objects.filter(id=company_id).exists()):
        return JsonResponse({"error": "company not found"}, safe=False)
    vacancies = Vacancy.objects.filter(company=company_id)
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def vacancies(request):
    if request.method == "POST":
        data = json.loads(request.body)
        serializer = VacancySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
    elif request.method == "GET":
        serializer=VacancySerializer(Vacancy.objects.all(), many=True)
        return JsonResponse(serializer.data, safe=False)

def vacancy(request, vacancy_id):
    if request.method == "GET":
        if Vacancy.objects.filter(id=vacancy_id).exists():
            serializer=VacancySerializer(Vacancy.objects.get(id=vacancy_id))
            return JsonResponse(serializer.data, safe=False)
        else:
            return JsonResponse({"error": "vacancy not found"})

def top_vacancies(request):
    if request.method == "GET":
        serializer=VacancySerializer(Vacancy.objects.order_by('-salary')[:10], many=True)
    return JsonResponse(serializer.data ,safe=False)
# Create your views here.
