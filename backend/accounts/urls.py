from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token
from django.urls import path, include

urlpatterns = [
   
    path('auth/', include('rest_auth.urls')),
    path('auth/login/', obtain_jwt_token),
    path('auth/signup/', include('rest_auth.registration.urls')),
    path('auth/refresh-token/', refresh_jwt_token),
]

