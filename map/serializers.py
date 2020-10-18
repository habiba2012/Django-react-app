from rest_framework import serializers
from .models import marker, marker_category


class MarkerSerializer(serializers.ModelSerializer):
    photos = serializers.StringRelatedField(many=True)

    class Meta:
        model = marker
        fields = ['id', 'name', 'marker_img', 'lat', 'lng',
                  'adress', 'shop_domain', 'opennig_hours', 'description', 'categories', 'photos']
