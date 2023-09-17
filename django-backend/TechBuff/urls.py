"""
URL configuration for TechBuff project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from django.urls import path
from authentication import views as auth_views
from employee import views as emp_views

from django.conf import settings
from django.conf.urls.static import static
from rest_framework.authtoken.views import obtain_auth_token
from django.views.decorators.csrf import csrf_exempt



urlpatterns = [
    
    # Auth
    path('auth/hello', auth_views.HelloView.as_view()),
    path('auth/hello_no_auth', auth_views.HelloViewNoAuth.as_view()),
    
    path('auth/register',auth_views.register.as_view(), name="auth_register"),
    path('auth/login', auth_views.login.as_view(), name="auth_login"),
    
    # Employee
    path('employee/get_profile', auth_views.get_profile.as_view(), name='get_profile'),
    path('employee/update_profile', auth_views.update_profile.as_view(), name='upload_profile_pic'),
    path('employee/update_work_prefs', auth_views.update_work_prefs.as_view()),
    path('employee/get_jobs', emp_views.get_jobs.as_view(), name='get_jobs'),
    path('employee/apply_for_job', emp_views.apply_for_job.as_view(), name='apply_for_job'),


    # Employer
    path('employer/get_projects', emp_views.get_projects.as_view(), name='get_projects'),
    path('employer/create_project', emp_views.create_project.as_view(), name='create_project'),
    path('employer/update_project', emp_views.update_project.as_view(), name='update_project'),
    # path('employer/is_project_ready', emp_views.is_project_ready.as_view(), name='is_project_ready'), # is ready or not
    path('employer/create_job', emp_views.create_job.as_view(), name='create_job'),
    path('employer/get_project_details/<int:pk>', emp_views.get_project_details.as_view(), name='get_project_details'),
    path('employer/get_jobs_applications', emp_views.get_jobs_applications.as_view(), name='get_jobs_applications'),



]
