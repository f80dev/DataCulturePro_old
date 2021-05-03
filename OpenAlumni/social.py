#Analyse des relations

import networkx as nx
from django.db import connection

from alumni.models import Profil

#http://localhost:8000/api/social_graph/
def create_graph(format="graphml"):
    G = nx.Graph()

    for p in Profil.objects.all():
        name=p.firstname + " " + p.lastname
        # G.add_node(p.id,
        #            label=str(bytes(name,encoding="utf-8"),encoding="iso8859"),
        #            formation=str(bytes(p.department,encoding="utf-8"),encoding="iso8859"),
        #            promo=p.promo
        #            )
        G.add_node(p.id,
                   label=name,
                   formation=p.department,
                   promo=str(p.promo)
                   )

    with connection.cursor() as cursor:
        cursor.execute("DROP TABLE IF EXISTS social_matrix")
        cursor.execute("""
               CREATE TABLE Social_Matrix AS
               SELECT alumni_work.profil_id AS Profil1, alumni_work1.profil_id AS Profil2, Count(alumni_work.pow_id) AS CountOfFilm
               FROM alumni_work INNER JOIN alumni_work AS alumni_work1 ON alumni_work.pow_id = alumni_work1.pow_id
               GROUP BY alumni_work.profil_id, alumni_work1.profil_id
               HAVING (((alumni_work.profil_id)<>alumni_work1.profil_id));
           """)

        cursor.execute("SELECT * FROM Social_Matrix")
        for row in cursor.fetchall():
            G.add_edge(row[0],row[1],weight=row[2])

        if format=="gxf":
            filename="./static/test.gefx"
            nx.write_gexf(G, filename,encoding="utf-8")

        if format=="graphml":
            filename="./static/femis.graphml"
            nx.write_graphml(G,filename,encoding="utf-8")

    return filename




