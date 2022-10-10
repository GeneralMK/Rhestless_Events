from rest_framework import generics, permissions,pagination, viewsets
from . import serializers
from . import models

# Create your views here.
class HostList(generics.ListCreateAPIView):
    queryset = models.Host.objects.all()
    serializer_class=serializers.HostSerializer

class HostDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Host.objects.all()
    serializer_class=serializers.HostDetailSerializer    

class EventList(generics.ListCreateAPIView):
    queryset = models.AddEvent.objects.all()
    serializer_class=serializers.EventSerializer
    pagination_class=pagination.LimitOffsetPagination

class EventDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.AddEvent.objects.all()
    serializer_class=serializers.EventDetailsSerializer      

#Customer
class ParticipantsList(generics.ListCreateAPIView):
    queryset = models.Participants.objects.all()
    serializer_class=serializers.ParticipantsSerializer

class ParticantDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Participants.objects.all()
    serializer_class=serializers.ParticantDetailSerializer 

class OrderList(generics.ListCreateAPIView):
    queryset = models.Order.objects.all()
    serializer_class=serializers.OrderSerializer

    

class OrderDetails(generics.ListAPIView):
    # queryset = models.OrderItems.objects.all()
    serializer_class=serializers.OrderDetailSerializer   

    def get_queryset(self):
        order_id= self.kwargs['pk']
        order= models.Order.objects.get(id=order_id)
        order_items=models.OrderItems.objects.filter(order=order)
        return order_items

class ParticipantAddressViewSet(viewsets.ModelViewSet):
    serializer_class=serializers.ParticipantAddressSerializer   
    queryset = models.ParticipantAddress.objects.all()
         
#Category

class CategoryList(generics.ListCreateAPIView):
    queryset = models.EventCategotry.objects.all()
    serializer_class=serializers.CategorySerializer

class CategoryDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Host.objects.all()
    serializer_class=serializers.CategoryDetailSerializer   
