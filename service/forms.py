from django import forms

class LocationPost(forms.Form):
    keyword = forms.CharField(label='keyword', max_length=30)