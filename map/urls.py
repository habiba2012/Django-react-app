from rest_framework import routers
from .api import MarkerViewSet
from django.contrib import admin
admin.site.site_header = 'Conscious Sweater Admin Panel'
admin.site.site_title = 'Conscious Sweater'

router = routers.DefaultRouter()
router.register('api/markers', MarkerViewSet, 'markers')

urlpatterns = router.urls
