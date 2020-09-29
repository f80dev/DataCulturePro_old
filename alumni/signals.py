from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver

from django_elasticsearch_dsl.registries import registry

# @receiver(post_save)
# def update_document(sender, **kwargs):
#     app_label = sender._meta.app_label
#     model_name = sender._meta.model_name
#     instance = kwargs['instance']
#
#     if app_label == 'OpenAlumni':
#         # If it is `books.Publisher` that is being updated.
#         if model_name == 'profil':
#             instances = instance.books.all()
#             for _instance in instances:
#                 registry.update(_instance)