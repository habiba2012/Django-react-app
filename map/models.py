from django.db import models
from django.dispatch import receiver
from django.db.models.signals import post_delete
from django.utils.html import mark_safe
import uuid


class marker_category(models.Model):
    marker_type = models.CharField(max_length=100, primary_key=True)
    marker_image = models.FileField(upload_to='pins/')

    def __str__(self):
        return str(self.marker_type)

    class Meta:
        verbose_name_plural = "Marker Categories"

    def marker_image_thumb(self):
        return mark_safe('<img src="/media/%s"  height=25 />' % (self.marker_image))
    marker_image_thumb.short_description = 'Image'


class marker(models.Model):
    name = models.CharField(max_length=200)
    lat = models.FloatField()
    lng = models.FloatField()
    marker = models.ForeignKey(
    marker_category, default="sustanible", on_delete=models.SET_DEFAULT)
    adress = models.CharField(max_length=300)
    shop_domain = models.CharField(max_length=200)
    opennig_hours = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    categories = models.CharField(max_length=200)

    def __str__(self):

        return "%s %s" % (self.name, self.adress)

    def marker_img(self):
        return self.marker.marker_image.url, self.marker.marker_type

    class Meta:
        ordering = ['id']


def get_shop_name_upload_to(instance, filename):
    return "shops/{}/{}".format(instance.shop_name.name, filename)


class marker_shop_image(models.Model):
    shop_name = models.ForeignKey(
        marker, on_delete=models.CASCADE, related_name='photos')
    shop_image = models.FileField(upload_to=get_shop_name_upload_to,)

    def image_tag(self):
        return mark_safe('<img src="/media/%s"  height="150" />' % (self.shop_image))
    image_tag.short_description = 'Image'

    def image_thumb(self):
        return mark_safe('<img src="/media/%s"  height=25 />' % (self.shop_image))
    image_thumb.short_description = 'Image'

    def name(self):
        return str(self.shop_name.name)

    def adress(self):
        return str(self.shop_name.adress)

    def __str__(self):
        return str(self.shop_image.url)


@receiver(post_delete, sender=marker_shop_image)
def submission_delete(sender, instance, **kwargs):
    instance.shop_image.delete(False)
