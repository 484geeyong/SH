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