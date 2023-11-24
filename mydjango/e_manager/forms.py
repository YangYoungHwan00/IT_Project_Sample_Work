from django import forms
from .models import emp

class empForm(forms.ModelForm):
	class Meta:
		model = emp
		#fields = ['id','NAME','DEPTNO','EMP_TYPE','TEL','HOBBY','PAY','POSITION','PEMPNO']
		fields = '__all__'