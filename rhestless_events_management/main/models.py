from itertools import product
from pyexpat import model
import re
from tkinter import CASCADE
from unicodedata import category
from django.db import models
from django.core import serializers
# from django.contrib.auth.models import User
# create your models
class Host(models.Model):
    name= models.CharField(max_length=100, null=True)
    last_name= models.CharField(max_length=100, null=True)
    email=models.CharField(max_length=100, null=True)
    password=models.CharField(max_length=100, null=True)
    address=models.TextField(null=True)

    def __str__(self):
        return str(self.name)
    class Meta:
    		verbose_name_plural="1. Hosts"
           

class EventCategotry(models.Model):
    title=models.CharField(max_length=100)
    details =models.TextField(null=True)

    def __str__(self):
        return  self.title 
    class Meta:
        verbose_name_plural="2. Event Category"        

class AddEvent(models.Model):
    host=models.ForeignKey(Host, on_delete=models.CASCADE,null=True)
    category=models.ForeignKey(EventCategotry, on_delete=models.CASCADE,null=True, related_name='category_products')
    event_name=models.CharField(max_length=150)
    TYPE=(
        ("Private","Private"),
        ("Public", "Public")
    )
    type= models.CharField(max_length=200, null=True, choices=TYPE)
    details=models.TextField(null= True)
    venue=models.CharField(max_length=100)
    price=models.FloatField(default=0.00) 
    featured_img=models.ImageField(upload_to='event_images/',null=True)  
     

    def __str__(self):
        return str(self.event_name)

    class Meta:
        	verbose_name_plural="3. Add Events"    



# participants model
class Participants(models.Model):
   name= models.CharField(max_length=100,  null=True)
   last_name= models.CharField(max_length=100,  null=True)
   email=models.CharField(max_length=100, default="example@gmail.com", null=True)
   password=models.CharField(max_length=100, default="pass",  null=True)
   address=models.TextField(null=True)
   mobile_no=models.PositiveBigIntegerField()
   
   def __str__(self):
        return str(self.name)
   class Meta:
        verbose_name_plural="4. Participants"    

#Order models

class Order(models.Model):
    customer = models.ForeignKey(Participants, on_delete=models.CASCADE, related_name='customer_orders')
    order_time =models.DateTimeField(auto_now_add=True)  

    def __unicode__(self):
        return '%s' %(self.order_time)
    class Meta:
        	verbose_name_plural="5. Orders"    
    

class OrderItems(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='order_items')
    event  = models.ForeignKey(AddEvent, on_delete=models.CASCADE) 

    
    def __str__(self):
        return self.event.title 

    class Meta:
        verbose_name_plural="6. Order Items"

class ParticipantAddress(models.Model):
    customer=models.ForeignKey(Participants, on_delete=models.CASCADE, related_name='customer_addresses')
    address=models.TextField(null=True)
    default_address= models.BooleanField(default=False)

    def __str__(self):
        return self.address

    class Meta:
        verbose_name_plural="7. Participant Address"    

