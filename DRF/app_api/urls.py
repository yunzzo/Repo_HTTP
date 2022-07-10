from django.urls import path
from .views import FriendInfo, FriendsInfo

app_name = 'app_api'
urlpatterns = [
    path('<int:pk>/', FriendInfo.as_view(), name="friend"),
    path('', FriendsInfo.as_view(), name="friends"),
]
