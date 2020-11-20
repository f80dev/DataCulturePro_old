import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../api.service";
import {showError, showMessage} from "../tools";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.sass']
})
export class WorksComponent implements OnInit {
  works:any;
  message: any;
  categories: any[]=[];
  cat_filter: any;
  name: any;

  constructor(public _location:Location,public toast:MatSnackBar,
              public routes:ActivatedRoute,
              public api:ApiService) { }

  ngOnInit(): void {
    this.name=this.routes.snapshot.queryParamMap.get("name");
    let id=this.routes.snapshot.queryParamMap.get("id");
    this.message="Chargement des expériences ...";
    this.api.getworks(id).subscribe((r:any)=>{
      this.message="";
      if(r.results.length==0){
        showMessage(this,"Aucune production référencée pour ce profil");
        this._location.back();
      }else{
        this.works=[];
        for(let w of r.results){
          w.filter=w.pow.nature;
          if(!this.cat_filter)this.cat_filter=w.filter;
          if(this.categories.indexOf(w.pow.nature)==-1)this.categories.push(w.pow.nature);
          w.pow.short_desc=w.pow.description.substr(0,Math.min(200,w.pow.description.length));
          this.works.push(w);
        }

      }
    },(err)=>{
      showError(this,err);
    });
  }

}
