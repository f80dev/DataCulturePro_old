#Analyse des relations

import networkx as nx
from django.db import connection

from alumni.models import Profil

#http://localhost:8000/api/social_graph/
def create_graph(format="graphml"):
    G = nx.Graph()

    for p in Profil.objects.all():
        G.add_node(p.id,
                   label=p.firstname + " " + p.lastname,
                   formation=p.department,
                   photo=p.photo,
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

        if format=="json":
            nodes_with_attr = list()
            for n in G.nodes.data():
                n[1]["id"]=n[0]
                nodes_with_attr.append(n[1])
            rc={"nodes":nodes_with_attr,"edges":list(G.edges)}
            return rc

    return filename




