# Generated by Django 4.0.2 on 2022-02-07 07:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apis', '0003_firststock'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='picture',
            field=models.ImageField(blank=True, upload_to='profile_pics'),
        ),
    ]