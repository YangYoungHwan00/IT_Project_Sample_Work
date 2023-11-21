from django.conf import settings
from django.db import models
from django.utils import timezone

class emp(models.Model):
	NAME = models.TextField(blank=True, null=True, default='')
	BIRTHDAY = models.DateTimeField (null=True, default='2000-01-01')
	DEPTNO = models.CharField(max_length=6, null=True, default='')
	EMP_TYPE = models.CharField(max_length=30, null=True, default='')
	TEL = models.CharField(max_length=15, null=True, default='')
	HOBBY = models.CharField(max_length=30, null=True, default='')
	PAY = models.IntegerField(blank=True, null=True, default=0)
	POSITION = models.CharField(max_length=30, null=True, default='')
	PEMPNO = models.IntegerField(blank=True, null=True, default=0)
