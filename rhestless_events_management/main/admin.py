from django.contrib import admin
from django.contrib.admin import AdminSite
from . import models



# Register your models here.
admin.site.register(models.AddEvent)
admin.site.register(models.Host)
admin.site.register(models.EventCategotry)
admin.site.register(models.Participants)
admin.site.register(models.Order)
admin.site.register(models.OrderItems)
admin.site.register(models.ParticipantAddress)
class EventAdminSite(AdminSite):
    
    site_header='Host Event Portal'
    site_title ='Welcome To The Event Host Portal'
    index_title='Welcome To The Event Host Portal'

event_admin_site= EventAdminSite(name='event_admin')
event_admin_site.register(models.AddEvent)   
event_admin_site.register(models.EventCategotry)  
event_admin_site.register(models.Order)
event_admin_site.register(models.OrderItems)