import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {checkLogin} from "../tools";
import {ConfigService} from "../config.service";
import {Router} from "@angular/router";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.sass']
})
export class StatsComponent implements OnInit {
  query: string="";
  reports: any[]=[];
  sel_report: any={}
  showGraphQL: boolean=false;

  constructor(public _location:Location,
              public api:ApiService,
              public router:Router,public config:ConfigService) { }

  ngOnInit(): void {
    checkLogin(this);
    this.api._get("getyaml","name=stat_reports").subscribe((r:any)=>{
      this.reports=r["Reports"];
    });
  }

  openStats(){
    open(this.sel_report,"statistiques");
  }



}
