import os
import django
import csv

os.environ.setdefault('DJANGO_SETTINGS_MODULE',  'Shinhan.settings')
django.setup()

from service.models import Clean

#Clean.objects.all().delete()
result = []

with open('/workspace/Shinhan/service/static/csv/DaeguClean.csv', mode='r') as clean_lists:
    reader = csv.reader(clean_lists)

    for list in reader:
        result.append(list)
        
    print(result[0])
            
    instances=[]
    for li in result[1:]:
        instances.append(Clean(CTY_NM="대구"+" "+li[2], CTY_IMG=li[6], USE_CUS_CNT=li[3], CORONA_CNT=li[4], CLEAN=li[5]))
            
    Clean.objects.bulk_create(instances)