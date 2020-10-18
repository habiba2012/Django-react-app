from django.db import models

class add_store(models.Model):
    name = models.CharField(max_length=35)
    adress = models.CharField(max_length=300)
    shop_domain = models.CharField(max_length=200)
    opennig_hours = models.CharField(max_length=200, default='', blank=True)
    categories = models.CharField(max_length=200)

    def __str__(self):
        return "%s %s" % (self.name, self.adress)

    class Meta:
        ordering = ['id']

class correct_store(models.Model):
    name = models.CharField(max_length=35)
    adress = models.CharField(max_length=300)
    shop_domain = models.CharField(max_length=200)
    opennig_hours = models.CharField(max_length=200, default='', blank=True)
    categories = models.CharField(max_length=200)

    def __str__(self):
        return "%s %s" % (self.name, self.adress)

    class Meta:
        ordering = ['id']
