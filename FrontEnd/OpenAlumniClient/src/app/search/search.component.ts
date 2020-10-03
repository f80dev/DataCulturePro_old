import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {$$, api, normaliser, showError, showMessage} from "../tools";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfigService} from "../config.service";
import {environment} from "../../environments/environment";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  profils:any[]=[];
  query:any={value:""};
  message: string="";
  perm: string="";
  dtLastSearch: number=0;

  constructor(public api:ApiService,
              public toast:MatSnackBar,
              public routes:ActivatedRoute,
              private router: Router,
              public config:ConfigService) { }


  ngOnInit(): void {
    if(this.query.value=="")this.query.value=this.routes.snapshot.queryParamMap.get("filter") || "";
    this.refresh();
  }

  private translate(text:string):string {
    let dict={
      "nom":"lastname",
      "prenom":"firstname",
      "prénom":"firstname",
      "ville":"town",
      "code postal":"cp",
      "film":"works__title",
      "promotion":"promo",
      "titre":"works__title",
      "job":"works__job"
    }
    for(let k in dict){
      text=text.replace(k+":",dict[k]+":");
    }
    return text;
  }


  refresh() {
    if(this.api.token)this.perm="mail";else this.perm="";
    if(this.query.value.length>3 || this.query.value.length==0){
      let param="/";
      let prefixe="";
      let q=this.translate(this.query.value);
      debugger
      if(this.searchInTitle)prefixe="works__title:"

      if(q.length>0)param="search="+prefixe+q;
      this.message="Chargement des profils";

      this.api._get("profilsdoc",param).subscribe((r:any) =>{
        this.message="";
        this.profils=[];
        for(let item of r.results){
          item.filter_tag=normaliser("nom:"+item.lastname+" pre:"+item.firstname+" dep:"+item.department+" promo:"+item.degree_year+" cp:"+item.cp);
          for(let _work of item.works){
            item.filter_tag=normaliser(item.filter_tag+"titre:"+_work.title+" ");
          }
          this.profils.push(item);
        }
        if(this.profils.length==0){
          if(q.length==0){
            $$("La base des profils est vide, on propose l'importation")
            this.router.navigate(["import"]);
          }

        }
      },(err)=>{
        showError(this,err);
      });
    }
  }

  export_result() {
    let param="filter{lastname.icontains}="+this.query.value
    let url=api("profils/",param,false,"csv");
    open(url);
  }


  openStats() {
    //router.navigate(['stats'])
    open(environment.domain_server+"/graphql","stats");
  }

  handle=null;
  searchInTitle: boolean = false;
  onQuery($event: KeyboardEvent) {
    clearTimeout(this.handle);
    this.handle=setTimeout(()=>{
      this.refresh();
    },1000);

  }

  clearQuery() {
    this.query.value='';
    this.refresh();
  }
}
