from rest_framework import serializers
from app.models import FriendInfo, Taste


class FriendInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = FriendInfo
        fields = ('id', 'fname', 'how2call', 'group',
                  'birthday', 'cellNum', 'MBTI', 'friendOf')


class TasteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Taste
        fields = ('id', 'TasteOf', 'category', 'contents')
