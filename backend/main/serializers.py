from rest_framework import serializers
from djoser.serializers import UserCreateSerializer
from . import models
from django.contrib.auth import get_user_model
User = get_user_model()


class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields ='__all__'

class HostDashboardSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Host
        fields=['total_host_events']
class HostSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Host
        fields= '__all__'
    def __init__(self, *args, **kwargs):
        super(HostSerializer, self).__init__(*args, **kwargs) 
        # self.Meta.depth=1

class HostDashboardSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Host
        fields='__all__'
        
class HostDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Host
        fields= "__all__"
    def __init__(self, *args, **kwargs):
        super(HostDetailSerializer, self).__init__(*args, **kwargs) 
        # self.Meta.depth=1        

class EventDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.AddEvent
        fields= "__all__"
    def __init__(self, *args, **kwargs):
        super(EventDetailsSerializer, self).__init__(*args, **kwargs) 
        # self.Meta.depth=1 

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.AddEvent
        fields= "__all__"
    def __init__(self, *args, **kwargs):
        super(EventSerializer, self).__init__(*args, **kwargs) 
        # self.Meta.depth=1                


class ParticipantsSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Participants
        fields= '__all__'
    def __init__(self, *args, **kwargs):
        super(ParticipantsSerializer, self).__init__(*args, **kwargs) 
        self.Meta.depth=1   

class ParticantDetailSerializer(UserCreateSerializer):
    class Meta:
        model=models.Participants
        fields= '__all__'
    def __init__(self, *args, **kwargs):
        super(ParticantDetailSerializer, self).__init__(*args, **kwargs) 
        # self.Meta.depth=1        

#Order
# 
class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Order
        fields= '__all__'
    def __init__(self, *args, **kwargs):
        super(OrderSerializer, self).__init__(*args, **kwargs) 
        self.Meta.depth=1   

class OrderDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.OrderItems
        fields= '__all__'
    def __init__(self, *args, **kwargs):
        super(OrderDetailSerializer, self).__init__(*args, **kwargs) 
        self.Meta.depth=1           

class ParticipantAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.ParticipantAddress
        fields= '__all__'
    def __init__(self, *args, **kwargs):
        super(ParticipantAddressSerializer, self).__init__(*args, **kwargs) 
        self.Meta.depth=1  

# categories
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=models.EventCategotry
        fields= '__all__'
    def __init__(self, *args, **kwargs):
        super(CategorySerializer, self).__init__(*args, **kwargs) 
        # self.Meta.depth=1

class CategoryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.EventCategotry
        fields= '__all__'
    def __init__(self, *args, **kwargs):
        super(CategoryDetailSerializer, self).__init__(*args, **kwargs) 
        # self.Meta.depth=1        
         
