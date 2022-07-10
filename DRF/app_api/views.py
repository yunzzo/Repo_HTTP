from rest_framework import generics
from app.models import FriendInfo
from .serializers import FriendInfoSerializer


class FriendsInfo(generics.ListCreateAPIView):
    queryset = FriendInfo.objects.all()
    serializer_class = FriendInfoSerializer


class FriendInfo(generics.RetrieveDestroyAPIView):
    queryset = FriendInfo.objects.all()
    serializer_class = FriendInfoSerializer
