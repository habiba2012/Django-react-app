from django.contrib import admin
from map.models import marker, marker_category, marker_shop_image
from import_export import resources
from import_export.admin import ImportExportModelAdmin
# Register your models here.


class MarkerCatagoryResource(resources.ModelResource):
    class Meta:
        model = marker_category


class MarkerResource(resources.ModelResource):
    class Meta:
        model = marker


class MarkerImageResource(resources.ModelResource):
    class Meta:
        model = marker_shop_image


@admin.register(marker_shop_image)
class MarkerImageAdmin(ImportExportModelAdmin):
    resource_class = MarkerImageResource
    readonly_fields = ['image_tag']
    list_display = ('name', 'adress', 'image_thumb')


@admin.register(marker)
class MarkerAdmin(ImportExportModelAdmin):
    resource_class = MarkerResource
    fields = ('name', ('lat', 'lng'), 'marker', 'adress',
              'shop_domain', 'opennig_hours', 'description', 'categories')
    list_display = ('name', 'adress', 'lat', 'lng',
                    'description', 'categories')


@admin.register(marker_category)
class MarkerCategoryAdmin(admin.ModelAdmin):
    resources_calass = MarkerCatagoryResource
    list_display = ('marker_type', 'marker_image_thumb')
