from rest_framework import serializers
from authentication.models import User
from django.contrib.auth import get_user_model


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        User = get_user_model()
        model =  User
        fields = ('username', 'email', 'password' )
    
    def create(self, validated_data):
        User = get_user_model()
        user = User.objects.create_user(**validated_data)
        return user


class ReadUserSerializer(serializers.ModelSerializer):
    class Meta:
        model =  User
        fields = (
            'username',
            'email',
            'profile_photo_url',
            'phone_number',
            'resume_url'
        )


class UpdateProfileSerializer(serializers.ModelSerializer):

    class Meta:
        fields = (
            'username',
            'email',
            'profile_photo_url',
            'phone_number',
            'resume_url'
        )
        model = User

    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        instance.profile_photo_url = validated_data.get('profile_photo_url', instance.profile_photo_url)
        instance.phone_number = validated_data.get('phone_number', instance.phone_number)
        instance.resume_url = validated_data.get('resume_url', instance.resume_url)
        instance.save()
        return instance
    