# Generated by Django 3.0.8 on 2020-10-03 14:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('alumni', '0020_profil_dtlastupdate'),
    ]

    operations = [
        migrations.AddField(
            model_name='extrauser',
            name='level',
            field=models.IntegerField(default=0, help_text="Niveau de l'utilisateur"),
        ),
    ]