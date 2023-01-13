from itertools import product
from pyexpat import model
import re

from django.db import models
from django.core import serializers
from django.contrib.auth.models import(PermissionsMixin, AbstractBaseUser, BaseUserManager) 

# create your models

class UserManager(BaseUserManager):
    def create_user(self, email, password=None,is_active=True, is_staff=False, is_admin=False):
        if not email:
            raise ValueError("User must have an email address!")
        if not password:
            raise ValueError("User must have an password!")    
        user_obj= self.model(
            email = self.normalize_email(email)
        )   
        user_obj.set_password(password)
        user_obj.save(self._db) 
        user_obj.staff=is_staff
        user_obj.active=is_active
        user_obj.admin=is_admin

        return user_obj
    def create_staffuser(self, email, password=None):

        user = self.create_user(
            email,
            password=password,
            is_staff= True
        )
        return user

    def create_superuser(self, email, password=None):
    
        user = self.create_user(
            email,
            password,
            is_admin= True,
            is_staff=True
        )
        
        user.save(using=self._db)
        return user    

class User(AbstractBaseUser, PermissionsMixin):
    email=models.EmailField(max_length=255, unique=True)
    first_name =models.CharField(max_length=255)
    last_name=models.CharField(max_length=255)
    password=models.CharField(max_length=100, null=True)
    staff = models.BooleanField(default=False)
    active = models.BooleanField(default=True)
    admin = models.BooleanField(default=False)

    USERNAME_FIELD = "email"

    REQUIRED_FIELDS =['first_name', 'last_name']

    objects = UserManager()

    def __str__(self):
        return str(self.first_name)

    def get_full_name(self):
        return self.first_name

    def get_short_name(self):
        return  self.email

    @property
    def  is_staff(self):
        return self.staff
    @property
    def  is_active(self):
         return self.active  
    @property
    def  is_admin(self):
        return self.admin       

    class Meta:
    		verbose_name_plural="1. User"      

class Host(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,default='none', blank=True)
    username= models.CharField(max_length=255)
    name= models.CharField(max_length=100, null=True)
    last_name= models.CharField(max_length=100, null=True)
    email=models.CharField(max_length=255, unique=True)
    password=models.CharField(max_length=100, null=True)
   

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

