# Generated by Django 3.0.8 on 2020-10-08 07:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('alumni', '0029_pieceofwork_year'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pieceofwork',
            name='year',
            field=models.CharField(help_text='Année de sortie', max_length=4, null=True),
        ),
    ]
