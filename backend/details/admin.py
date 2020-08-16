from django.contrib import admin
from .models import Criteria, Teacher, Group, Evaluation, Student
# Register your models here.
admin.site.register(Evaluation)
admin.site.register(Criteria)
admin.site.register(Group)
admin.site.register(Teacher)
admin.site.register(Student)