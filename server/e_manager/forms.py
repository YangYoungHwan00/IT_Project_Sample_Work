from django import forms
from .models import emp

class empForm(forms.ModelForm):
	class Meta:
		model = emp
		#fields = ['EMPNO','NAME','HOBBY','BIRTHDAY','DEPTNO','HOBBY','PAY','POSITION']
		fields = '__all__'