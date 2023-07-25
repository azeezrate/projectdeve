from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    user_id = models.CharField(max_length=100, blank=True)
    picture = models.ImageField(upload_to='profile_pics', blank=True)

class FirstStock(models.Model):
    user=models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    form_data=models.JSONField(null=True)
    response_data=models.JSONField(null=True)

class SecondStock(models.Model):
    user=models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    form_data=models.JSONField(null=True)
    response_data=models.JSONField(null=True)
    
    
    
