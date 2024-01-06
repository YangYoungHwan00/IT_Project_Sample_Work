from rest_framework import serializers
from .models import emp

class EmpSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = emp