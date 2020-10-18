from map.models import marker
from rest_framework import viewsets
from .serializers import MarkerSerializer

# marker ViewSet


class MarkerViewSet(viewsets.ModelViewSet):
    queryset = marker.objects.all()
    serializer_class = MarkerSerializer
