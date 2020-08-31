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
            
    instances=[]
    for (CTY_NM_2, USE_CUS_CNT, CORONA_CNT, CLEAN) in result[1:]:
        instances.append(Clean(CTY_NM="서울"+" "+CTY_NM_2, CTY_IMG="/static/images/area/seoul/gangnam.png", USE_CUS_CNT=USE_CUS_CNT, CORONA_CNT=CORONA_CNT, CLEAN=CLEAN))
            
    Clean.objects.bulk_create(instances)