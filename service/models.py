from django.db import models

# Create your models here.
class Clean(models.Model):
    #CTY_NM_2, USE_CUS_CNT, TA_YM, CLEAN
    CTY_NM=models.CharField(max_length=100, default='cty2')
    CTY_IMG=models.CharField(max_length=200, default='img')
    #CTY_IMG=models.CharField(max_length=200)
    USE_CUS_CNT=models.FloatField()
    CORONA_CNT=models.FloatField()
    CLEAN=models.FloatField()
    
class Corona(models.Model):
    CTY_NM=models.CharField(max_length=100, default='cty2')
    CO2=models.FloatField()
    CO3=models.FloatField()
    CO4=models.FloatField()
    CO5=models.FloatField()
    CO6=models.FloatField()
    CO7=models.FloatField()
    CO8=models.FloatField()
    
class Upjong(models.Model):
    CTY_NM=models.CharField(max_length=100, default='cty2')
    WEAK_UPJONG=models.CharField(max_length=100)
    