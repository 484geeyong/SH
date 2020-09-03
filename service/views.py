from django.shortcuts import render
from django import forms
from .forms import LocationPost
from django.http import HttpResponse
from .fusioncharts import FusionCharts

import csv

from .models import Clean
from .models import Corona
from .models import Upjong

def index(request):
    return render(request, 'index.html')

#def locationpost(request):
#    if request.method =='POST':
#            form = LocationPost(request.POST)
#            if form.is_valid():
#                post = form.save(commit=False)
#                post.pub_date=timezone.now()
#                post.save()
#                #return redirect('index')
#                return render(request,'new.html',{'form':form})
#    else:
#        form = LocationPost()
#        return render(request,'new.html',{'form':form})
    
def selectarea(request):
    cty1=request.POST['cty1']
    cty2=request.POST['cty2']
    
    if (cty2=="수원시") | (cty2=='천안시'):
        cty3=request.POST['cty3']
        areaname=cty1+" "+cty2+" "+cty3
        up_area=cty1+" "+cty2+" "+cty3
        
    else:
        areaname=cty1+" "+cty2
        up_area=cty1+" "+cty2+" "+"."
    
    cleans=Clean.objects
    corona=Corona.objects.get(CTY_NM=areaname)
    pick=Clean.objects.get(CTY_NM=areaname)
    
    if pick.CLEAN>0.9816292071666667:
        level=1
    elif pick.CLEAN>0.9663571073333334:
        level=2
    elif pick.CLEAN>0.9510850075:
        level=3
    elif pick.CLEAN>0.9358129076666667:
        level=4
    elif pick.CLEAN>0.9205408078333334:
        level=5
    elif pick.CLEAN>0.905268708:
        level=6
    elif pick.CLEAN>0.8899966081666667:
        level=7
    elif pick.CLEAN>0.8747245083333334:
        level=8
    elif pick.CLEAN>0.8594524085:
        level=9
    elif pick.CLEAN>0.8441803086666667:
        level=10
    elif pick.CLEAN>0.8289082088333334:
        level=11
    else:
        level=12
        
    upjong_pick=Upjong.objects.filter(CTY_NM=up_area)
    
    
    ##################################################################################
    # Create an object for the angualar gauge using the FusionCharts class constructor
    angularGauge = FusionCharts("angulargauge", "ex1" , "450", "270", "chart-1", "json",
        # The data is passed as a string in the `dataSource` as parameter.
        """{
            "chart": {
                "caption": "의 8월 코로나 청정 지수",
                "lowerLimit": "0",
                "upperLimit": "12",
                "showValue": "1",
                "numberSuffix": "등급",
                "theme": "fusion",
                "showToolTip": "0"
            },
            "colorRange": {
                "color": [{
                    "minValue": "0",
                    "maxValue": "3",
                    "code": "#62B58F"
                }, {
                    "minValue": "3",
                    "maxValue": "6",
                    "code": "#FFC533"
                }, {
                    "minValue": "6",
                    "maxValue": "12",
                    "code": "#F2726F"
                }]
            },
            "dials": {
                "dial": [{
                    "value": {{level}}
                }]
            }
        }""")
    
    return render(request, 'result.html', {'areaname': areaname, 'cleans': cleans, 'pick': pick, 'corona': corona, 'upjong_pick': upjong_pick, 'output' : angularGauge.render(),'chartTitle': str(level)+'등급', 'level': level})
    