from rest_framework import serializers
from .models import JobPosting, Project

class JobPostingSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobPosting
        fields = ['id', 'headline', 'description', 'employer_name', 'employer_email']

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id','name','idea','is_ready','content','user']


class ProjectCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['name','idea','content']

    def create(self, validated_data):
        user = Project.objects.create_user(**validated_data)
        return user



class UpdateProjecteSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ['id','name','idea','is_ready','content','user']
        model = Project

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.idea = validated_data.get('idea', instance.idea)
        instance.is_ready = validated_data.get('is_ready', instance.is_ready)
        instance.content = validated_data.get('content', instance.content)
        instance.save()
        return instance