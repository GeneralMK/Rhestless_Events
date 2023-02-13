
from django.contrib import admin
from rest_framework import permissions

from django.urls import path, re_path, include
from rest_framework_simplejwt import views as jwt_views
#from main.admin import event_admin_site
from django.views.generic import TemplateView
from drf_yasg import openapi
from drf_yasg.views import get_schema_view as swagger_get_schema_view
schema_view = swagger_get_schema_view(
    openapi.Info(
         title='Rhestless Events Management API',
         default_version='1.0.0',
         description='API DOCUMENTATION FOR RHESTLESS',
    ),
    public= True,
    permission_classes={permissions.AllowAny}
)

urlpatterns = [
    path('admin/', admin.site.urls),
    #re_path("",TemplateView.as_view(template_name="index.html")),
    # path('host-portal/', event_admin_site.urls),
    path('api/',include('main.urls')),
    path('api/token/',jwt_views.TokenObtainPairView.as_view(),name='toke_obtain_pair'),
    path('api/token/refresh/',jwt_views.TokenRefreshView.as_view(),name='toke_refresh'),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
     path('accounts/', include('allauth.urls')),
     path('auth/', include('djoser.social.urls')), 
     path('swagger/schema/', schema_view.with_ui('swagger', cache_timeout=0), name='swagger-schema'),
     path('social_auth/', include(('social_django.urls', 'social_auth'),namespace= 'social')),


]
urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]

