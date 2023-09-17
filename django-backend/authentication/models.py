from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib import admin


class User(AbstractUser):
    username = models.CharField(max_length=255, blank=True)
    email = models.EmailField(max_length=255, unique=True)
    password = models.CharField(max_length=255, blank=True)
    phone_number = models.CharField(max_length=50, blank=True)
    profile_photo_url = models.ImageField(upload_to='profile_pictures/', null=True)
    resume_url = models.FileField(upload_to='resumes/', null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS =  ['username']

    def __str__(self):
        return self.email
    

    @property
    def is_anonymous(self):
        # Always return False. This is a way of comparing User objects to anonymous users.
        return False

    @property
    def is_authenticated(self):
        return True


admin.site.register(User)