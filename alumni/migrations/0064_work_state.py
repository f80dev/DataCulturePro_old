# Generated by Django 3.0.11 on 2021-01-19 16:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('alumni', '0063_work_validate'),
    ]

    operations = [
        migrations.AddField(
            model_name='work',
            name='state',
            field=models.CharField(default='A', help_text='etat du travail entre A=automatiquement creer,E=editer par le profil, D=supprimé par le profil', max_length=1),
        ),
    ]
