from rest_framework.views import APIView
from authentication.serializers import UserSerializer
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView
from .models import JobPosting, Project
from .serializers import JobPostingSerializer, ProjectSerializer, ProjectCreateSerializer, UpdateProjecteSerializer
from authentication.views import auth_current_user
from authentication.serializers import UserSerializer
from rest_framework.parsers import MultiPartParser, FormParser

import os
import openai

openai.organization = "org-hmLTnmUwpQ26fR7nqDqxWwVq"
openai.api_key = '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'
prefix = "Act like a venture coach and give me 8 actionable steps in json format which includes the step number, category, multiple elaborated tasks, team positions, multiple resources that can help at each step like organizations, to help me in each step located around Niagara Falls, Buffalo (provide website links if possible) for my startup. Start up idea is: "

# Create your views here.

# employees
class get_jobs(ListAPIView):
    model = JobPosting
    serializer_class = JobPostingSerializer
    queryset = JobPosting.objects.all()


class create_job(CreateAPIView):
    def post(self, request, *args, **kwargs):
        current_user = auth_current_user(self.request)
        headline = request.POST['headline']
        description = request.POST['description']
        employer_name = current_user.name
        employer_email = current_user.email
        JobPosting.objects.create(headline=headline, description=description, employer_name=employer_name, employer_email=employer_email)
        return JsonResponse({'msg': 'Job Posted'}, status=201)


class apply_for_job(APIView):
    def post(self, request, *args, **kwargs):
        try:
            job_posting_id = request.POST['job_posting_id']

            job_posting = JobPosting.objects.filter(id=job_posting_id).first()
            current_user = auth_current_user(request)
            job_posting.applicants.add(current_user)

            return JsonResponse({'msg': 'Applied Successfully'}, status=201)
        except:
            return JsonResponse({'msg': 'Error in Application'}, status=400)


class get_projects(ListAPIView):
    serializer_class = ProjectSerializer

    def get_queryset(self, *args, **kwargs):
        current_user = auth_current_user(self.request)
        return Project.objects.filter(user=current_user)


class create_project(APIView):
    def post(self, request, *args, **kwargs):
        current_user = auth_current_user(self.request)
        name = request.POST['name']
        idea = request.POST['idea']
        is_ready = True
        content = generate_content(idea)
        
        Project.objects.create(name=name, idea=idea, content=content, user=current_user, is_ready=is_ready)
        return JsonResponse({'msg': 'Project Created'}, status=201)



class update_project(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        current_user = auth_current_user(request)
        if current_user is None:
            return JsonResponse({'msg': 'Please login first.'}, status=401)
        
        project = Project.objects.filter(id=request.POST['id']).first()
        serializer = UpdateProjecteSerializer(data=request.data)   
        try:
            serializer.update(project, request.data)
            return JsonResponse({'msg': 'Update successful'}, status=201)
        except Exception as e:
            print('error', e)
            return JsonResponse({'msg': 'Update failed'}, status=400)



class get_project_details(RetrieveAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectCreateSerializer


class get_jobs_applications(ListAPIView):
    
    serializer_class = UserSerializer

    def get_queryset(self, *args, **kwargs):
        current_user = auth_current_user(self.request)
        jobpostings = JobPosting.objects.filter(employer_email=current_user.email)
        applicants = []
        for posting in jobpostings:
            applicants += posting.applicants
        
        return applicants



def generate_content(prompt):
    print(prompt)     
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo-16k",
        messages=[
            {"role": "user", "content": prefix+prompt}
        ]
    )
    plan_json = response['choices'][0]['message']['content']
    plan_str = str(plan_json)
    # plan_str = plan_str.
    return plan_str