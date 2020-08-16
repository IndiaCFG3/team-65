from django.db import models
from details.models import Evaluation

# Create your models here.
class cumulativeCriteria(models.Model):
    title=models.CharField(max_length=200)
    count=models.IntegerField(default=0)
    criteria = models.ForeignKey(Evaluation,on_delete=models.CASCADE)

    def __str__(self):
        return self.title


