import os
import django
import csv

os.environ.setdefault('DJANGO_SETTINGS_MODULE',  'Shinhan.settings')
django.setup()

from service.models import Corona

Corona.objects.all().delete()
result = []

with open('/workspace/Shinhan/service/static/csv/SeoulCorona.csv', mode='r') as corona_lists:
    reader = csv.reader(corona_lists)

    for list in reader:
        result.append(list)
        
    print(result[0])
            
    instances=[]
    # for (CTY_NM_2, one, two, three, four, five, six, seven, eight) in result[1:]:
    #     instances.append(Corona(CTY_NM="서울"+" "+CTY_NM_2, CO2=two, CO3=three, CO4=four, CO5=five, CO6=six, CO7=seven, CO8=eight))
    
    for li in result[1:]:
        instances.append(Corona(CTY_NM="서울"+" "+li[1], CO2=li[3], CO3=li[4], CO4=li[5], CO5=li[6], CO6=li[7], CO7=li[8], CO8=li[9]))   
            
    Corona.objects.bulk_create(instances)