
from django.contrib import admin
from django.urls import path, re_path, include
from rest_framework_simplejwt import views as jwt_views
from main.admin import event_admin_site
from django.views.generic import TemplateView
urlpatterns = [
    path('admin/', admin.site.urls),
    #re_path("",TemplateView.as_view(template_name="index.html")),
    path('host-portal/', event_admin_site.urls),
    path('api/',include('main.urls')),
    path('api/token/',jwt_views.TokenObtainPairView.as_view(),name='toke_obtain_pair'),
    path('api/token/refresh/',jwt_views.TokenRefreshView.as_view(),name='toke_refresh'),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    # path('auth/', include('djoser.urls')),
    # path('auth/', include('djoser.urls.jwt')),
    # path('auth/', include('djoser.social.urls')), 

]
