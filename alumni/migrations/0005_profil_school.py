# Generated by Django 3.2 on 2021-06-15 15:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('alumni', '0004_alter_profil_blockchain'),
    ]

    operations = [
        migrations.AddField(
            model_name='profil',
            name='school',
            field=models.CharField(blank=True, default='FEMIS', help_text='Ecole', max_length=30, null=True),
        ),
    ]