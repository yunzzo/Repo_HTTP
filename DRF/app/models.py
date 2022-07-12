from django.db import models
from django.contrib.auth.models import User


class FriendInfo(models.Model):
    fname = models.CharField(max_length=20)
    how2call = models.CharField(max_length=10, null=True, blank=True)
    group = models.CharField(max_length=10, null=True, blank=True)
    birthday = models.CharField(max_length=12, null=True, blank=True)
    cellNum = models.CharField(max_length=11, null=True, blank=True)
    MBTI = models.CharField(max_length=4, null=True, blank=True)
    friendOf = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='my_friends')

    class Meta:
        ordering = ('fname',)

    def __str__(self):
        return self.fname


class Taste(models.Model):
    TasteOf = models.ForeignKey(
        FriendInfo, on_delete=models.CASCADE, related_name='friend')
    category = models.CharField(max_length=10)
    contents = models.TextField(null=True, blank=True)

    class Meta:
        ordering = ('id',)

    def __str__(self):
        return self.category
