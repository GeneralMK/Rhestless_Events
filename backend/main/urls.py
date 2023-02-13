from atexit import register
from django.urls import path
from . import views

from rest_framework import routers

router=routers.DefaultRouter()
# router.register('address', views.ParticipantAddressViewSet)
urlpatterns = [
   
    path('hosts/',views.HostList.as_view()),
    path('host/<int:pk>',views.HostDetails.as_view()),
    path('host/dashboard/<int:pk>/', views.HostDashboard.as_view()),
    path('host-login',views.host_login),
    path('Events/',views.EventList.as_view()),
    path('Event/<int:pk>',views.EventDetails.as_view()),
    path('customers/',views.ParticipantsList.as_view()),
    path('customer/<int:pk>',views.ParticantDetails.as_view()),
    path('Categories/',views.CategoryList.as_view()),
    path('Category/<int:pk>',views.CategoryDetails.as_view()),
    path('Orders/',views.OrderList.as_view()),
    path('Order-details/<int:pk>',views.OrderDetails.as_view()),
    
]
urlpatterns+=router.urls