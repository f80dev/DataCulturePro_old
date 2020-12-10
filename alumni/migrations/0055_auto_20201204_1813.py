# Generated by Django 3.0.8 on 2020-12-04 17:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('alumni', '0054_auto_20201124_1520'),
    ]

    operations = [
        migrations.AddField(
            model_name='work',
            name='creator',
            field=models.CharField(default='auto', help_text="Désigne qui est le dernier auteur de l'enregistrement", max_length=5),
        ),
        migrations.AddField(
            model_name='work',
            name='public',
            field=models.BooleanField(default=True),
        ),
    ]
