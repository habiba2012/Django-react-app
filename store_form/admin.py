from django.contrib import admin
from store_form.models import add_store, correct_store
from import_export import resources
from import_export.admin import ImportExportModelAdmin

# Register your models here.
class AddStoreResource(resources.ModelResource):
    class Meta:
        model = add_store

@admin.register(add_store)
class AddStoreAdmin(ImportExportModelAdmin):
    resource_class = AddStoreResource
    fields = ('name',  'adress',
              'shop_domain', 'opennig_hours', 'categories')
    list_display = ('name', 'adress', 'categories')

class CorrectStoreResource(resources.ModelResource):
    class Meta:
        model = correct_store

@admin.register(correct_store)
class CorrectStoreAdmin(ImportExportModelAdmin):
    resource_class = CorrectStoreResource
    fields = ('name',  'adress',
              'shop_domain', 'opennig_hours', 'categories')
    list_display = ('name', 'adress', 'categories')