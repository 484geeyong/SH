from django.shortcuts import render
from django import forms
from .forms import LocationPost
from django.http import HttpResponse

import csv

from .models import Clean

def index(request):
    return render(request, 'index.html')

def locationpost(request):
    if request.method =='POST':
            form = LocationPost(request.POST)
            if form.is_valid():
                post = form.save(commit=False)
                post.pub_date=timezone.now()
                post.save()
                #return redirect('index')
                return render(request,'new.html',{'form':form})
    else:
        form = LocationPost()
        return render(request,'new.html',{'form':form})
    
def selectarea(request):
    cty1=request.POST['cty1']
    cty2=request.POST['cty2']
    
    if cty2=="수원시":
        cty3=request.POST['cty3']
        areaname=cty1+" "+cty2+" "+cty3
        
    else:
        areaname=cty1+" "+cty2
    
    cleans=Clean.objects
    pick=Clean.objects.get(CTY_NM=areaname)
    
    #print('cty1:'+cty1+', cty2:'+cty2)
    
    return render(request, 'result.html', {'areaname': areaname, 'cleans': cleans, 'pick': pick})