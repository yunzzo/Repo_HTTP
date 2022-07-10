from rest_framework import serializers
from app.models import FriendInfo


class FriendInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = FriendInfo
        fields = ('id', 'fname', 'cellNum', 'friendOf')
