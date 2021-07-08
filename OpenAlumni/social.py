#Analyse des relations

import networkx as nx
from django.db import connection

from alumni.models import Profil

class SocialGraph:

    def __init__(self):
        self.G = nx.Graph()


    def load(self,filter=""):
        ids=[]
        degree_filter=filter.split("_")[0]
        department_filter=filter.split("_")[1]

        profils=Profil.objects.filter(department=department_filter)
        if degree_filter!="0":
            profils=Profil.objects.filter(degree_filter=int(degree_filter),department=department_filter)

        for p in profils:
            self.G.add_node(p.id,
                            label=p.firstname + " " + p.lastname,
                            formation=p.department,
                            photo=p.photo,
                            promo=str(p.promo)
                            )
            ids.append(p.id)

        if len(ids)>0:
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
                    if row[0] in ids and row[1] in ids:
                        self.G.add_edge(row[0], row[1], weight=row[2])

        return len(self.G.nodes)



    def eval(self,critere="pagerank"):
        if "pagerank" in critere:
            ranks=nx.pagerank(self.G)
            for k in ranks.keys():
                self.G.nodes[k]["pagerank"]=ranks.get(k)

        if "centrality" in critere:
            props=nx.betweenness_centrality(self.G)
            for k in props.keys():
                self.G.nodes[k]["centrality"]=props.get(k)


    #http://localhost:8000/api/social_graph/
    def export(self,format="graphml"):
        if format=="gxf":
            filename="./static/test.gefx"
            nx.write_gexf(self.G, filename,encoding="utf-8")

        if format=="graphml":
            filename="./static/femis.graphml"
            nx.write_graphml(self.G,filename,encoding="utf-8")

        if format=="json":
            nodes_with_attr = list()
            for n in self.G.nodes.data():
                n[1]["id"]=n[0]
                nodes_with_attr.append(n[1])

            edges=[]
            for edge in self.G.edges:
                edges.append({"source":edge[0],"target":edge[1]})

            rc={"nodes":nodes_with_attr,"edges":edges}
            return rc

        return filename




