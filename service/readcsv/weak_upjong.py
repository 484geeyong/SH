import os
import django
import csv

os.environ.setdefault('DJANGO_SETTINGS_MODULE',  'Shinhan.settings')
django.setup()

from service.models import Upjong

Upjong.objects.all().delete()
result = []

with open('/workspace/Shinhan/service/static/csv/mct_web.csv', mode='r') as upjong_lists:
    reader = csv.reader(upjong_lists)

    for list in reader:
        result.append(list)
        
    print(result[0])
            
    instances=[]
    for li in result[1:]:
        instances.append(Upjong(CTY_NM=li[1]+" "+li[2]+" "+li[3], WEAK_UPJONG=li[6]))

    Upjong.objects.bulk_create(instances)