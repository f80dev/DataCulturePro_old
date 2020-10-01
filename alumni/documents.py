#Document utilisé par elasticSearch

from django.conf import settings
from django_elasticsearch_dsl import Document, Index, fields
from django_elasticsearch_dsl.registries import registry
from elasticsearch_dsl import analyzer
from alumni.models import Profil, Work

#
# See Elasticsearch Indices API reference for available settings

html_strip = analyzer(
    'html_strip',
    tokenizer="standard",
    filter=["standard", "lowercase", "stop", "snowball"],
    char_filter=["html_strip"]
)


@registry.register_document
class ProfilDocument(Document):
    name = fields.TextField(fielddata=True,attr='lastname',fields={'suggest': fields.Completion(),})
    works= fields.NestedField(properties={
        "job":fields.TextField(),
        "title":fields.TextField()
    })
    class Index:
        name='profils'
        settings={
            "number_of_shards":1,
            "number_of_replicas":0
        }

    class Django(object):
        model=Profil
        fields=["id","firstname","lastname","email","department","cp","mobile","photo","address"]

    def get_queryset(self):
        return super().get_queryset().select_related('extrauser')




@registry.register_document
class WorkDocument(Document):
    profil = fields.ObjectField(properties={
        'lastname': fields.TextField(),
        'email': fields.TextField(),
    })
    pow=fields.ObjectField(properties={
        'title':fields.TextField(),
    })

    class Index:
        name='works'
        settings={"number_of_shards":1,"number_of_replicas":0}

    class Django(object):
        model=Work
        fields=["id","job"]
