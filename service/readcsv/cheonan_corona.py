import os
import django
import csv

os.environ.setdefault('DJANGO_SETTINGS_MODULE',  'Shinhan.settings')
django.setup()

from service.models import Corona

#Corona.objects.all().delete()
result = []

with open('/workspace/Shinhan/service/static/csv/CheonanCorona.csv', mode='r') as corona_lists:
    reader = csv.reader(corona_lists)

    for list in reader:
        result.append(list)
        
    print(result[0])
            
    instances=[]
    
    for li in result[1:]:
        instances.append(Corona(CTY_NM="충남"+" "+li[1]+" "+li[2], CO2=li[4], CO3=li[5], CO4=li[6], CO5=li[7], CO6=li[8], CO7=li[9], CO8=li[10]))   
            
    Corona.objects.bulk_create(instances)