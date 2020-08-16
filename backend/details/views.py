from django.shortcuts import render

# Create your views here.
from django.contrib.auth.models import User, Group

from rest_framework import permissions
from details.serializers import EvaluationSerializer, GroupSerializer, CriteriaSerializer
from .models import Evaluation, Group, Criteria

from rest_framework.views import APIView
from .serializers import *
from rest_framework.response import Response
import datetime
from rest_framework import status
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login

from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

# class EvaluationView(APIView):
#     def get(self, request):
          
#         userdata= request.user

#         students = Student.objects.filter(teacher__user = userdata )

#         studentdata = {}
#         for x in students:
#         # movie_id= request.query_params.get('id')
          
            
#             evaluations = Evaluation.objects.filter(student=x)
#             lseval = {}
#             for y in evaluations:
#                 id1 = y.id
#                 groupdata = Group.objects.filter(evaluation=id1)
#                 ls = {}
#                 for i in groupdata:
#                     temp = Criteria.objects.filter(group = i.id)
#                     ser4 = CriteriaSerializer(temp, many=True)
#                     text = "group_" + str(i.id)
#                     ls[text] = ser4.data
                
                
#                 ser2 = GroupSerializer(groupdata, many=True)
#                 ser = EvaluationSerializer(y, many=True)
#                 ls["Group"]=ser2.data
#                 txt = "eval_"+str(y.id)
#                 lseval[txt] = ls 
#                 print(lseval)
#                 # data= { "Evaluations": ser.data, "Group": ser2.data}
#                 # ls["Evaluations"]=ser.data
#                 # ls["Group"] = ser2.data
#             # print(lseval)
#             studentdata[x.student_name] = lseval

            
#         return Response(studentdata)
class StudentCreationView(APIView):
    def get(self, request):
        studentname = request.POST['studentname']
        gender = request.POST['gender']
        phonenumber = request.POST['phonenumber']
        rollno = request.POST['rollno']

        Student.objects.create(student_name = studentname, gender = gender, phone_number = phonenumber, roll_no = rollno)
        
        return Response({"Success":"Student Created Successfully"})

class EvaluationView(APIView):
    def get(self, request):
          
        userdata= request.user

        students = Student.objects.filter(teacher = userdata )

        studentdata = {}
        for x in students:
        # movie_id= request.query_params.get('id')
          
            
            evaluations = Evaluation.objects.filter(student=x)
            lseval = {}
            for y in evaluations:
                id1 = y.id
                groupdata = Group.objects.filter(evaluation=id1)
                ls = {}
                for i in groupdata:
                    temp = Criteria.objects.filter(group = i.id)
                    ser4 = CriteriaSerializer(temp, many=True)
                    text = "group_" + str(i.id)
                    ls[text] = ser4.data
                
                
                ser2 = GroupSerializer(groupdata, many=True)
                ser = EvaluationSerializer(y, many=True)
                ls["Group"]=ser2.data
                txt = "eval_"+str(y.id)
                groupscorelist=[]
                for i in groupdata:
                    temp = Criteria.objects.filter(group = i.id)
                    sel = 0
                    total = 0
                    for criteria in temp:
                        if criteria.selected == True:
                            sel= sel+1
                        total = total + 1
                    per = (sel/total)*100
                    # text = "Group_score_"+ str(i.id)
                    score = { i.group_name: per}
                    groupscorelist.append(score)    
                    # ls[i.group_name] = per
                ls["groupscores"] = groupscorelist   
                lseval[txt] = ls 

                

                # print(lseval)
                # data= { "Evaluations": ser.data, "Group": ser2.data}
                # ls["Evaluations"]=ser.data
                # ls["Group"] = ser2.data
            # print(lseval)
            studentdata[x.student_name] = lseval

            
        return Response(studentdata)

    