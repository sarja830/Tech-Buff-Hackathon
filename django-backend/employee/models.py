from django.db import models
from authentication.models import User
from django.contrib import admin

# Create your models here.
class WorkPref(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)

# class WorkPrefTag(models.Model):
#     id = models.AutoField(primary_key=True)
#     user = models.ForeignKey(User, on_delete=models.DO_NOTHING, related_name='tag_user')
#     pref = models.ForeignKey(WorkPref, on_delete=models.CASCADE, related_name='tag_pref')
    

class JobPosting(models.Model):
    id = models.AutoField(primary_key=True)
    headline = models.CharField(max_length=255)
    description = models.CharField(max_length=300)
    employer_name = models.CharField(max_length=255)
    employer_email = models.CharField(max_length=255)
    applicants = models.ManyToManyField(User)


class Project(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    idea = models.TextField()
    is_ready = models.BooleanField(default=False)
    content = models.TextField()
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)


admin.site.register(WorkPref)
admin.site.register(JobPosting)
admin.site.register(Project)