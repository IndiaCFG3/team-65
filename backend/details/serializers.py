from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Criteria, Teacher, Group, Evaluation, Student



class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = "__all__"

class CriteriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Criteria
        fields = "__all__"

class EvaluationSerializer(serializers.ModelSerializer):
    
   
    class Meta:
        model = Evaluation
        fields = "__all__"

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = "__all__"        