import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-visgraph',
  templateUrl: './visgraph.component.html',
  styleUrls: ['./visgraph.component.sass']
})
export class VisgraphComponent implements OnInit {

  private svg;
  private margin = 50;
  private width = screen.availWidth - (this.margin * 2);
  private height = screen.availHeight - (this.margin * 2);

  constructor(
    public api:ApiService
  ) { }

  private createSvg(): any {
    return d3.select("figure#graph")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }


  draw(data:any,svg:any) {

      var link = svg
        .selectAll("line")
        .data(data.edges)
        .enter()
        .append("line")
        .style("stroke", "#aaa")

      // Initialize the nodes
      var node = svg
        .selectAll("g.nodes")
        .data(data.nodes, (d)=>{ return d.id; });


      var nodeEnter=node.enter().append("svg:g").attr("class","node");

      nodeEnter
        .append("svg:circle")
        .attr("r", 10)
        .style("fill", "#d01111");


      nodeEnter.append("text")
      .attr("class", "nodetext")
      .attr("x", 20)
      .attr("y", 20 +15)
      .attr("fill", "#130C0E")
      .text((d)=> { return d.name; });



  }



  ngOnInit(): void {
    this.svg=this.createSvg();
    this.api._get("social_graph/json/","",120,"").subscribe((data:any)=>{
      let result={nodes:data.nodes,edges:[]};
      for(let e of data.edges)
        result.edges.push({source:e[0],target:e[1]});

      this.draw(result,this.svg);
    });

    // d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_network.json").then((data:any)=>{
    //   this.draw(data,this.svg);
    // });
  }

}
