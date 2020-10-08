import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {Router} from "@angular/router";
import {showError} from "../tools";

@Component({
  selector: 'app-pows',
  templateUrl: './pows.component.html',
  styleUrls: ['./pows.component.sass']
})
export class PowsComponent implements OnInit {
  pows: any[]=[];
  query: any={value:""};

  constructor(public api:ApiService,public router:Router) { }

  ngOnInit(): void {
    this.refresh();
  }

  open_search(name: string) {
    this.router.navigate(["search"],{queryParams:{filter:name}});
  }

  clearQuery() {
    this.query.value='';
    this.refresh();
  }

  handle:any;
  onQuery($event: KeyboardEvent) {
    clearTimeout(this.handle);
    this.handle=setTimeout(()=>{
      this.refresh();
    },1000);
  }

  private refresh() {
    let param="";
    if(this.query.value.length>0)param="search="+this.query.value;
    this.api._get("powsdoc",param).subscribe((r:any)=>{
      this.pows=[];
      for(let i of r.results){
        let tmp=[];
        if(i.hasOwnProperty("works")){
        for(let w of i.works){
          while(w.indexOf("'")>-1){
            w=w.replace("'","\"");
          }
          tmp.push(JSON.parse(w));
        }
        }
        i.works=tmp;
        this.pows.push(i);
      }
    },(err)=>{
      showError(this,err);
    });
  }
}
