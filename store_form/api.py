from store_form.models import add_store, correct_store
from rest_framework import viewsets
from .serializers import AddStoreSerializer, CorrectStoreSerializer

class AddStoreViewSet(viewsets.ModelViewSet):
    queryset = add_store.objects.all()
    serializer_class = AddStoreSerializer

class CorrectStoreViewSet(viewsets.ModelViewSet):
    queryset = correct_store.objects.all()
    serializer_class = CorrectStoreSerializer
