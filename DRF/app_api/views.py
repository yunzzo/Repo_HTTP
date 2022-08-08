import code
from rest_framework import generics
from app.models import FriendInfo, Taste
from .serializers import FriendInfoSerializer, TasteSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import redirect
from rest_framework import status
import requests
import json


KAKAO_REST_API_KEY= "42fc419b3e4a3a02d4a5e0686e76b844"
KAKAO_REDIRECT_URI= "http://localhost:3000/InfoCollect"

kakao_login_uri = "https://kauth.kakao.com/oauth/authorize"
kakao_token_uri = "https://kauth.kakao.com/oauth/token"


class FriendsInfo(generics.ListCreateAPIView):
    queryset = FriendInfo.objects.all()
    serializer_class = FriendInfoSerializer


class FriendInfo(generics.RetrieveDestroyAPIView):
    queryset = FriendInfo.objects.all()
    serializer_class = FriendInfoSerializer


class Taste(generics.ListCreateAPIView):
    queryset = Taste.objects.all()
    serializer_class = TasteSerializer

class KakaoLoginView(APIView):
    def get(self, request):
        # data ={
        #     "grant_type" :"authorization_code",
        #     "cliend_id": KAKAO_REST_API_KEY,
        #     "redirection_uri":"http://localhost:3000/KakaoLogin",
        #     "code": request.GET["code"]
        # }
        CODE= request.GET["code"]
       
        token_uri=f'https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id={KAKAO_REST_API_KEY}&redirect_uri={KAKAO_REDIRECT_URI}&code={CODE}'
        access_token = requests.get(token_uri).json()
        access_token_json=access_token.get("access_token")
        print(access_token)
        print("hi")
        print(access_token_json)
        response = Response(status=status.HTTP_200_OK)
        # response.data = data
        return response
