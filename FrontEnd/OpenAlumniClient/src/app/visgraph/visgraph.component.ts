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
  name:string="";

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

    //voir https://github.com/d3/d3-selection#modifying-elements

    var link = svg
      .selectAll("line")
      .data(data.edges)
      .enter()
      .append("line")
      .style("stroke", "#aaa")

    // Initialize the nodes
    var nodeEnter = svg
      .selectAll("circle")
      .data(data.nodes)
      .enter()
      .append("svg:g")
      .attr("class", "node")
      .property("name",function(d) { return d.name;})
      .on("mouseover", this.mouseover)

    var node = nodeEnter.append("svg:image")
        .attr("xlink:href",  function(d) { return d.photo;})
        .attr("x", function(d) { return -25;})
        .attr("y", function(d) { return -25;})
        .attr("height", 50)
        .attr("width", 50)

    nodeEnter.append("svg:text")
      .text(function(d) { return d.name;})

    var simulation = d3.forceSimulation(data.nodes)
      .force("link", d3.forceLink().id(function(d:any) { return d.id; }).links(data.edges))
      .force("charge", d3.forceManyBody().strength(-80))
      .force("center", d3.forceCenter(this.width / 2, this.height / 2))
      .on("end",()=>{
        link
          .attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });

        node
          .attr("x", function (d) { return d.x+6; })
          .attr("y", function(d) { return d.y-6; });
      });

  }



  mouseover(d){
    this.name=d.target.name;
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
