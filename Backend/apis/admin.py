from django.contrib import admin
from .models import SecondStock,CustomUser,FirstStock
# Register your models here.
admin.site.register(SecondStock)
admin.site.register(FirstStock)
admin.site.register(CustomUser)