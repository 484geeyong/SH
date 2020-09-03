import os
import django
import csv

os.environ.setdefault('DJANGO_SETTINGS_MODULE',  'Shinhan.settings')
django.setup()

from service.models import Clean

Clean.objects.all().delete()
result = []

with open('/workspace/Shinhan/service/static/csv/SeoulClean.csv', mode='r') as clean_lists:
    reader = csv.reader(clean_lists)

    for list in reader:
        result.append(list)
        
    print(result[0])
            
    instances=[]
    for li in result[1:]:
        instances.append(Clean(CTY_NM="서울"+" "+li[1], CTY_IMG=li[5], USE_CUS_CNT=li[2], CORONA_CNT=li[3], CLEAN=li[4]))
            
    Clean.objects.bulk_create(instances)