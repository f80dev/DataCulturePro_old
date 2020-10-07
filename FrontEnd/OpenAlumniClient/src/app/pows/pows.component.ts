import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pows',
  templateUrl: './pows.component.html',
  styleUrls: ['./pows.component.sass']
})
export class PowsComponent implements OnInit {
  pows: any[]=[];

  constructor(public api:ApiService,public router:Router) { }

  ngOnInit(): void {
    this.api._get("pows/").subscribe((r:any)=>{
      this.pows=[];
      for(let i of r.results){
        let tmp=[];
        for(let w of i.works){
          while(w.indexOf("'")>-1){
            w=w.replace("'","\"");
          }
          tmp.push(JSON.parse(w));
        }
        i.works=tmp;
        this.pows.push(i);
      }
    });
  }

  open_search(name: string) {
    this.router.navigate(["search"],{queryParams:{filter:name}});
  }
}
