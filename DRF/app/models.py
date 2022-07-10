from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class FriendInfo(models.Model):
    fname = models.CharField(max_length=20)
    cellNum = models.CharField(max_length=11)
    friendOf = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='my_friends')

    class Meta:
        ordering = ('fname',)

    def __str__(self):
        return self.fname
