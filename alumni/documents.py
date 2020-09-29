#Document utilisé par elasticSearch

from django.conf import settings
from django_elasticsearch_dsl import Document, Index, fields
from elasticsearch_dsl import analyzer
from alumni.models import Profil

# INDEX = Index(settings.ELASTICSEARCH_INDEX_NAMES["search_indexes.documents.profil"])
#
# # See Elasticsearch Indices API reference for available settings
# INDEX.settings(
#     number_of_shards=1,
#     number_of_replicas=1
# )
#
# html_strip = analyzer(
#     'html_strip',
#     tokenizer="standard",
#     filter=["standard", "lowercase", "stop", "snowball"],
#     char_filter=["html_strip"]
# )
#
#
# @INDEX.doc_type
# class ProfilDocument(Document):
#     id=fields.IntegerField(attr='id')
#     name = fields.TextField(
#         analyzer=html_strip,
#         fields={'raw': fields.TextField(analyzer='keyword'),}
#     )
#
#     class Django(object):
#         model=Profil
#
