from itertools import product
from pyexpat import model
import re

from django.db import models
from django.core import serializers
from django.contrib.auth.models import(PermissionsMixin, AbstractBaseUser, BaseUserManager) 

# create your models

class UserManager(BaseUserManager):
    # def create_user(self, email, password=None,is_active=True, is_staff=False, is_admin=False):
    #     if not email:
    #         raise ValueError("User must have an email address!")
    #     if not password:
    #         raise ValueError("User must have an password!")    
    #     user_obj= self.model(
    #         email = self.normalize_email(email)
    #     )   
    #     user_obj.set_password(password)
    #     user_obj.save(self._db) 
    #     user_obj.staff=is_staff
    #     user_obj.is_active=is_active
    #     user_obj.admin=is_admin

    #     return user_obj
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)

        user.set_password(password)
        user.save()

        return user
    def create_staffuser(self, email, password=None):

        user = self.create_user(
            email,
            password=password,
            is_staff= True
        
        )
        return user

    def create_superuser(self, email, password=None,  **kwargs):
    
        user = self.create_user(
            email,
            password,
            is_admin=True,
            is_staff=True,
            **kwargs
        )
        user.is_superuser =True 
        user.save(using=self._db)
        
        return user    

class MyUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def get_full_name(self):
        return self.first_name

    def get_short_name(self):
        return self.first_name
    
    def __str__(self):
        return self.first_name     

          

class Host(models.Model):
    user = models.ForeignKey(MyUser, on_delete=models.CASCADE,default='none', blank=True)
    username= models.CharField(max_length=255)
    name= models.CharField(max_length=100, null=True)
    last_name= models.CharField(max_length=100, null=True)
    email=models.CharField(max_length=255, unique=True)
    password=models.CharField(max_length=100, null=True)
   
    def __str__(self):
            return self.name
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

