from rest_framework import serializers
from .models import emp

class EmpSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = emp
    
    def to_internal_value(self, data):
        if data.get('PAY') == '':
            data['PAY'] = None
        if data.get('PEMPNO') == '':
            data['PEMPNO'] = None
        if data.get('BIRTHDAY') == '':
            data['BIRTHDAY'] = None
        return super().to_internal_value(data)