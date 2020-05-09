from django.urls import path, include
from .views import ListUser, RegisterUser, LoginUser, UpdateUser
from knox import views as knox_views

urlpatterns = [
    path('', include('knox.urls')),
    path('registerUser', RegisterUser.as_view()),
    path('listUser', ListUser.as_view()),
    path('login', LoginUser.as_view()),
    path('updateUser/<int:pk>', UpdateUser.as_view())
    

]

