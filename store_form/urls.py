from rest_framework import routers
from .api import AddStoreViewSet, CorrectStoreViewSet

router = routers.DefaultRouter()
router.register('api/add_store', AddStoreViewSet, 'store form')
router.register('api/correct_store', CorrectStoreViewSet, 'store form')

urlpatterns = router.urls