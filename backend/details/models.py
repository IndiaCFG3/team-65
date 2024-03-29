from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Teacher(models.Model):
    teacher_name= models.CharField(max_length=100)
    class_number= models.IntegerField(max_length=2)
    user=models.ForeignKey(User,on_delete=models.CASCADE)

    def __str__(self):
        return self.teacher_name

class Student(models.Model):
    teacher=models.ForeignKey(User, on_delete=models.CASCADE)
    student_name= models.CharField(max_length=100)
    gender=models.CharField(max_length=10)
    phone_number=models.IntegerField(max_length=10)
    roll_no=models.IntegerField(max_length=10)

    def __str__(self):
        return self.student_name

class Evaluation(models.Model):
    student=models.ForeignKey(Student,on_delete=models.CASCADE)
    pub_date=models.DateTimeField(auto_now=True)

   

class Group(models.Model):
    evaluation=models.ForeignKey(Evaluation,on_delete=models.CASCADE)
    group_name= models.CharField(max_length=100)
    pub_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.group_name

class Criteria(models.Model): 
    group = models.ForeignKey(Group,on_delete=models.CASCADE)
    criteria_name= models.CharField(max_length=100)
    selected= models.BooleanField(default=False)
    description=models.CharField(max_length=200)

    def __str__(self):
        return self.criteria_name

