from django import forms
from .models import emp

class empForm(forms.ModelForm):
	class Meta:
		model = emp
		#fields = ['NAME','HOBBY']
		fields = '__all__'