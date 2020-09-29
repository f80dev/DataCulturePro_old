import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../api.service";
import {ConfigService} from "../config.service";
import {$$, checkLogin, extract_id, showMessage, stringDistance} from "../tools";
import {MatTableDataSource} from "@angular/material/table";
import {environment} from "../../environments/environment";
import {MatDialog} from "@angular/material/dialog";
import {PromptComponent} from "../prompt/prompt.component";
import {ImageSelectorComponent} from "../image-selector/image-selector.component";

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
  showAddWork=0;
  private projects: any[];

   constructor(public _location:Location,
              public routes:ActivatedRoute,
               public dialog:MatDialog,
              public config:ConfigService,
              public router:Router,
              public api:ApiService) { }

  displayedColumns: string[] = ["title","dtStart","sel"];
  dataSource: MatTableDataSource<Movie>=null;

  dtStart:Date=new Date();
  dtEnd:Date=new Date(new Date().getTime()+1000*3600*24*5);
  duration=5*8;
  job:string="";
  comment="";
  pow:any;
  earning: any;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    if(checkLogin(this)){
      this.loadProfil();
      this.refresh();
    }
  }

  refresh(){
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

  loadProfil(){
      let id=this.routes.snapshot.queryParamMap.get("id")
      this.api._get("profils/"+id+"/","").subscribe((p:any)=>{
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
      });
      this.api._get("extraworks","search="+id).subscribe((r:any)=>{
        this.works=r.results;
      });
  }

  loadMovies(func) {
    let rc=[];
    this.api.getPOW().subscribe((r:any)=>{
      for(let i of r.results){
        if(i.owner=="public" || this.config.user.user==null || i.owner==this.config.user.user.id){
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
      duration:this.duration
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
      this.api.setprofil(this.profil).subscribe(()=>{});
      this.api.setuser(this.config.user.user).subscribe(()=>{});
    }
    this._location.back();
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
}

