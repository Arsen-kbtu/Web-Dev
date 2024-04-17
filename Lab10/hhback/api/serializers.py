from rest_framework import serializers
from .models import Company, Vacancy


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['id', 'name', 'description', 'city', 'address']


class VacancySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    salary = serializers.FloatField()
    company = CompanySerializer()

    def create(self, validated_data):
        company_data = validated_data.pop('company')
        company = Company.objects.create(**company_data)
        vacancy = Vacancy.objects.create(company=company, **validated_data)
        return vacancy

    def update(self, instance, validated_data):
        company_data = validated_data.pop('company')
        company = instance.company
        company.name = company_data.get('name', company.name)
        company.description = company_data.get('description', company.description)
        company.city = company_data.get('city', company.city)
        company.address = company_data.get('address', company.address)
        company.save()

        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.salary = validated_data.get('salary', instance.salary)
        instance.save()
        return instance