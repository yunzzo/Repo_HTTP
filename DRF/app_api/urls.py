from django.urls import path
from .views import FriendInfo, FriendsInfo, Taste

app_name = 'app_api'
urlpatterns = [
    path('friends/<int:pk>/', FriendInfo.as_view(), name="friend"),
    path('friends', FriendsInfo.as_view(), name="friends"),
    path('tastes', Taste.as_view(), name="taste"),

]
