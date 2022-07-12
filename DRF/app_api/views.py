from rest_framework import generics
from app.models import FriendInfo, Taste
from .serializers import FriendInfoSerializer, TasteSerializer


class FriendsInfo(generics.ListCreateAPIView):
    queryset = FriendInfo.objects.all()
    serializer_class = FriendInfoSerializer


class FriendInfo(generics.RetrieveDestroyAPIView):
    queryset = FriendInfo.objects.all()
    serializer_class = FriendInfoSerializer


class Taste(generics.ListCreateAPIView):
    queryset = Taste.objects.all()
    serializer_class = TasteSerializer
