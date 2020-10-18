from rest_framework import serializers
from .models import add_store, correct_store

class AddStoreSerializer(serializers.ModelSerializer):

    class Meta:
        model = add_store
        fields = ['id','name','adress', 'shop_domain', 'opennig_hours', 'categories']

class CorrectStoreSerializer(serializers.ModelSerializer):

    class Meta:
        model = correct_store
        fields = ['id','name','adress', 'shop_domain', 'opennig_hours', 'categories']
