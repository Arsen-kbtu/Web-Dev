from django.urls import path

from . import views

urlpatterns = [
    path("companies/", views.companies),
    path("companies/<int:company_id>/", views.company),
    path("companies/<int:company_id>/vacancies/", views.company_vacancies),
    path("vacancies/", views.vacancies),
    path("vacancies/<int:vacancy_id>/", views.vacancy),
    path("vacancies/top_ten/", views.top_vacancies)
]