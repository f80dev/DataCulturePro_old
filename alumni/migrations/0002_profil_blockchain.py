# Generated by Django 3.2 on 2021-06-05 15:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('alumni', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profil',
            name='blockchain',
            field=models.TextField(help_text='Adresse elrond du profil', max_length=50, null=True),
        ),
    ]
