from django.shortcuts import render
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.views import APIView
from authentication.serializers import UserSerializer
from django.http import JsonResponse, HttpResponse
from authentication.models import User
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.exceptions import AuthenticationFailed
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from rest_framework.parsers import MultiPartParser, FormParser
from authentication.serializers import UpdateProfileSerializer, ReadUserSerializer
from rest_framework.generics import ListAPIView
import json
import os



class register(APIView):
    permission_classes = ()

    def post(self, request):
        user_data = request.POST
        user_serializer = UserSerializer(data=user_data)
        

        if user_serializer.is_valid():
            user = User.objects.create(
                name = user_data['name'], 
                email = user_data['email'],
                password = make_password(user_data['password']),
            )
            user.save()
            
            return JsonResponse({"msg": "Sign up successful"}, status=201)

        else:
            print(user_serializer.errors)	
        return JsonResponse(user_serializer.errors, status=400)
    

class login(APIView):
    permission_classes = ()

    def post(self, request):
        data = request.POST
        print("login data",data)
        try:
            # email_val = data['email']
            user = User.objects.filter(email= data['email']).first()
            print("User",user)
            if user == None:
                return JsonResponse({'msg':'User not found'}, status=401)
                
            if(check_password(data['password'], user.password)):
                
                tokens = Token.objects.filter(user=user)
                if tokens == None or len(tokens) == 0:
                    token = Token.objects.create(user=user)
                    tokens = [token]
                print(str(tokens[0]) + "created. login success")
                return JsonResponse({'msg':'login success','token': str(tokens[0].key)}, status=200)

            else:
                return JsonResponse({'msg':'login failure'}, status=401)

        except User.DoesNotExist:
            return JsonResponse({'msg':'user not registered'}, status=status.HTTP_404_NOT_FOUND)


# Testing APIs
class HelloView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        auth_header = request.headers.get('Authorization')
        if auth_header:
            token = auth_header.split(' ')[1]

            # Authenticate the token
            try:
                user, token = TokenAuthentication().authenticate_credentials(token)
            except AuthenticationFailed:
                # If authentication fails, return an error response
                return Response({'error': 'Invalid token'}, status=status.HTTP_401_UNAUTHORIZED)

            current_user = User.objects.get(name=user.name)
            content = {'message': 'Hello, ' + user.name}
        else:
            content = {'message': 'Hello, World! Username not found' }
        return Response(content)


class HelloViewNoAuth(APIView):
    permission_classes = ()

    def get(self, request):
        content = {'message': 'Hello '}
        return Response(content)
    


class get_profile(APIView):
    serializer_class = ReadUserSerializer

    def get(self, request, *args, **kwargs):
        serializer = ReadUserSerializer(auth_current_user(request))
        return JsonResponse(serializer.data, status=200)


class update_profile(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        current_user = auth_current_user(request)
        if current_user is None:
            return JsonResponse({'msg': 'Please login first.'}, status=401)
        
        serializer = UpdateProfileSerializer(data=request.data)   
        try:
            serializer.update(current_user, request.data)
            return JsonResponse({'msg': 'Update successful'}, status=201)
        except Exception as e:
            print('error', e)
            return JsonResponse({'msg': 'Update failed'}, status=400)


class update_work_prefs(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        current_user = auth_current_user(request)
        if current_user is None:
            return JsonResponse({'msg': 'Please login first.'}, status=401)
        
        serializer = UpdateProfileSerializer(data=request.data)   
        try:
            serializer.update(current_user, request.data)
            return JsonResponse({'msg': 'Update successful'}, status=201)
        except Exception as e:
            print('error', e)
            return JsonResponse({'msg': 'Update failed'}, status=400)


# class get_user_details(ListAPIView):
#     model = User
#     serializer_class = UpdateProfileSerializer
    
#     def get_queryset(self, *args, **kwargs):
#         current_user = auth_current_user(self.request)
#         return User.objects.filter(email=current_user.email).first()
    


def auth_current_user(request):
    auth_header = request.headers.get('Authorization')
    if auth_header:
        token = auth_header.split(' ')[1]
        user = None
        try:
            user, token = TokenAuthentication().authenticate_credentials(token)
        except AuthenticationFailed:
            return None
        
        return User.objects.get(name=user.name)