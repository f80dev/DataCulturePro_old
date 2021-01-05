import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../api.service";
import {ConfigService} from "../config.service";
import {$$, checkLogin, extract_id, showError, showMessage, stringDistance} from "../tools";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {PromptComponent} from "../prompt/prompt.component";
import {ImageSelectorComponent} from "../image-selector/image-selector.component";
import {FormControl} from "@angular/forms";

export interface Movie {
    title: string;
    url: number;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit  {

  profil: any=null;
  works: any[]=[];
  add_work:any;
  mustSave=false;
  showAddWork=-1;
  socials:any[]=[];
  projects: any[];

   constructor(public _location:Location,
              public routes:ActivatedRoute,
               public dialog:MatDialog,
              public config:ConfigService,
              public router:Router,
              public api:ApiService) {
     this.api.getyaml("","social").subscribe((r:any)=>{
       this.socials=r.services;
     })
   }


  displayedColumns: string[] = ["title","dtStart","sel"];
  dataSource: MatTableDataSource<Movie>=null;

  dtStart:Date=new Date();
  dtEnd:Date=new Date(new Date().getTime()+1000*3600*24*5);
  duration=5*8;
  job:string="";
  comment="";
  pow:any;
  earning: any;
  acceptSponsor:boolean;
  message:string="";

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.config.init_user(()=>{
      if(checkLogin(this,null,null,"login")){
        this.message="Chargement de votre profil";
        this.loadProfil(()=>{
          this.showAddWork=0;
          this.message="";
          this.autoAddMovie();
        });
      }
    })
  }

  refresh(){
    $$("Rafraichir les expériences");
    this.loadMovies((data:any[])=>{
        this.dataSource = new MatTableDataSource<Movie>(data);
        this.autoAddMovie();
      });
  }

  autoAddMovie(){
    let add=this.routes.snapshot.queryParamMap.get("add");
    let title=this.routes.snapshot.queryParamMap.get("title");
    if(add){
      this.select({title:title,id:add});
    }
  }

  refresh_works(){
    let id=this.routes.snapshot.queryParamMap.get("id")
    this.message="Récupération des expériences";
    this.api._get("extraworks","profil__id="+id).subscribe((r:any)=>{
        $$("Travaux chargés");
        this.message="";
        this.works=r.results;
      });
  }



  loadProfil(func=null){
      let id=this.routes.snapshot.queryParamMap.get("id")
      $$("Chargement du profil & des travaux");
      this.api._get("profils/"+id+"/","").subscribe((p:any)=>{
        $$("Profil chargé ",p);
        if(p){
          this.profil=p;
          let d_min=1e9;
          for(let j of this.config.jobs){
            let d=stringDistance(p.department,j.value);
            if(d<d_min){
              d_min=d;
              this.job=j.value;
            }
          }
        }
        if(func)func();
      });

      this.refresh_works();
  }



  loadMovies(func) {
    let rc=[];
    this.api.getPOW().subscribe((r:any)=>{
      for(let i of r.results){
        if(i.owner=="public" || this.config.user==null || this.config.user.user==null || i.owner==this.config.user.user.id){
          i["sel"]="";
          rc.push(i);
        }
      }
      func(rc);
      });
  }



  select(element: any) {
    this.add_work={
      movie:element.title,
      movie_id:element.id
    };
    this.showAddWork=2;
  }


  save_newwork() {
    this.add_work={
      profil:this.profil.id,
      pow:this.add_work.movie_id,
      job:this.job,
      earning:this.earning,
      comment:this.comment,
      dtStart:this.dtStart.toISOString().split("T")[0],
      dtEnd:this.dtEnd.toISOString().split("T")[0],
      duration:this.duration,
      source:"man_"+this.config.user.id,
    };
    $$("Insertion de ",this.add_work);
    this.api._post("works/","",this.add_work).subscribe((rany)=>{
      this.showAddWork=0;
      this.loadProfil();
      this.router.navigate(["edit"],{queryParams:{id:this.profil.id},replaceUrl:true});
      showMessage(this,"Travail enregistré");
    })
  }

  quit(bSave=true) {
    if(bSave){
      // for(let soc of this.socials){
      //   this.profil[soc.name]=soc.value;
      // }

      this.profil.dtLastUpdate=new Date().toISOString();
      this.api.setprofil(this.profil).subscribe(()=>{
        showMessage(this,"Profil enregistré");
      },(err)=>{
        showError(this,err);
      });
      this.save_user();
    }
    this.router.navigate(["search"],{replaceUrl:true});
  }

  del_work(wrk:any) {
    this.dialog.open(PromptComponent,{data: {
        title: 'Confirmation',
        question: 'Supprimer cette expérience',
        onlyConfirm: true,
        canEmoji: false,
        lbl_ok: 'Oui',
        lbl_cancel: 'Non'
      }}).afterClosed().subscribe((result_code) => {
      if (result_code != 'no') {
        this.api._delete("works/" + wrk.id + "/").subscribe(() => {
          this.loadProfil();
        });
      }
    });
  }

  change_photo() {
    this.dialog.open(ImageSelectorComponent, {position:
        {left: '5vw', top: '5vh'},
      maxWidth: 400, maxHeight: 700, width: '90vw', height: '90vh', data:
                {
                  result: this.profil.photo,
                  checkCode: true,
                  width: 200,
                  height: 200,
                  emoji: false,
                  internet: false,
                  ratio: 1,
                  quality:0.7
                }
            }).afterClosed().subscribe((result) => {
      if (result) {
        this.profil.photo= result;
      }
    });

  }

  add_pow() {
    if(this.config.user.user){
    this.router.navigate(['addpow'],
      {queryParams:{
          redirect:'addwork',
          id:this.profil.id,
          owner:this.config.user.user.id}
      })
    }

  }

  save_user(evt=null) {
    if(evt!=null){
      let prop=Object.keys(evt)[0];
      this.config.user.user[prop]=evt[prop].checked;
    }
    this.api.setuser(this.config.user.user).subscribe(()=>{});
  }

  _private(work: any) {
    work.public=!work.public;
    this.api._patch("works/"+work.id+"/","", {"public":work.public}).subscribe(()=>{
    });
  }

  analyse() {
    this.message="Analyse en cours";
    this.api._get("batch/","filter="+this.profil.id).subscribe(()=>{
      this.message="";
      this.refresh_works();
    });
  }

  reset_works() {
    let total=this.works.length;
    for(let w of this.works){
      if(!w.source.startsWith("man")){
        this.api._delete("works/"+w.id+"/").subscribe(()=>{
          total=total-1;
          this.works.splice(this.works.indexOf(w),1);
        });
      }
    }
  }


  check_format(social: any) {
    if(this.profil[social.name].length>0){
      if(!this.profil[social.name].startsWith("http"))this.profil[social.name]="https://"+this.profil[social.name];
      if(!this.profil[social.name].startsWith(social.format))
        social.message="Format incorrect, l'url doit commencer par "+social.format;
      else
        social.message="";
    } else
      social.message="";
  }
}

