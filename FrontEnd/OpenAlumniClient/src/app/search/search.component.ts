import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../api.service";
import {$$, api, normaliser, showError, showMessage, translateQuery} from "../tools";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfigService} from "../config.service";
import {environment} from "../../environments/environment";
import {PromptComponent} from "../prompt/prompt.component";
import {MatDialog} from "@angular/material/dialog";
import {MatSelect} from "@angular/material/select";


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
  @ViewChild('order', {static: false}) order: MatSelect;

  constructor(public api:ApiService,
              public dialog:MatDialog,
              public toast:MatSnackBar,
              public routes:ActivatedRoute,
              public router: Router,
              public config:ConfigService) { }


  ngOnInit(): void {
    if(this.query.value=="")
      this.query.value=this.routes.snapshot.queryParamMap.get("filter") || this.routes.snapshot.queryParamMap.get("query") || "";
    this.refresh();
  }



  refresh() {
    if(this.api.token)this.perm="mail";else this.perm="";
    if(this.query.value.length>3 || this.query.value.length==0){
      let param="/";
      let prefixe="";

      if(this.searchInTitle)prefixe="works__title:"

      this.message="Chargement des profils";

      param=translateQuery(prefixe+this.query.value);
      if(this.order)param=param+"&ordering="+this.order.value;

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
          if(this.query.value.length==0){
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
    let param="";
    if(this.query.value.length>0)param="search="+this.query.value;
    let url=api("profilsdoc/",param,false,"json");
    open(url,"_blank","download");
  }


  openStats() {
    open(environment.domain_server+"/graphql","stats");
  }

  handle=null;
  searchInTitle: boolean = false;
  fields=[
    {field:"Nom",value:"lastname"},
    {field:"Prénom",value:"firstname"},
    {field:"Métier",value:"job"},
    {field:"Promo",value:"promo"}]


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

  deleteProfil(profil: any) {
     this.dialog.open(PromptComponent,{data: {
        title: 'Confirmation',
        question: 'Supprimer ce profil ?',
        onlyConfirm: true,
        canEmoji: false,
        lbl_ok: 'Oui',
        lbl_cancel: 'Non'
      }}).afterClosed().subscribe((result_code) => {
      if (result_code != 'no') {
        this.api._delete("profils/"+profil.id).subscribe(()=>{
          showMessage(this,"Profil supprimé");
          this.refresh();
        })
      }
    });
  }
}
