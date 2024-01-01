from rest_framework import serializers
from .models import emp

class EmpSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'EMPNO',
            'NAME',
            'BIRTHDAY',
            'DEPTNO',
            'EMP_TYPE',
            'TEL',
            'HOBBY',
            'PAY',
            'POSITION',
            'PEMPNO'
        )

        model = emp