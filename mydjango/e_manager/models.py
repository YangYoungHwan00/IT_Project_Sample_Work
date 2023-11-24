from django.conf import settings
from django.db import models
from django.utils import timezone

class emp(models.Model):
	EMPNO = models.CharField(blank=True, max_length=8, null=True, default=None)
	NAME = models.CharField(blank=True,max_length=50, null=True, default=None)
	BIRTHDAY = models.DateField (blank=True, null=True, default=None)
	DEPTNO = models.CharField(blank=True, max_length=6, null=True, default=None)
	EMP_TYPE = models.CharField(blank=True, max_length=30, null=True, default=None)
	TEL = models.CharField(blank=True, max_length=15, null=True, default=None)
	HOBBY = models.CharField(blank=True, max_length=30, null=True, default=None)
	PAY = models.IntegerField(blank=True, null=True, default=None)
	POSITION = models.CharField(blank=True, max_length=30, null=True, default=None)
	PEMPNO = models.IntegerField(blank=True, null=True, default=None)

	def __str__(self):
		return self.NAME
