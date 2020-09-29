import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {$$, showMessage} from "../tools";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ConfigService} from "../config.service";
import {ApiService} from "../api.service";
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

const reg_url = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

@Component({
  selector: 'app-addpow',
  templateUrl: './addpow.component.html',
  styleUrls: ['./addpow.component.sass']
})
export class AddpowComponent implements OnInit {

  pows: any[]=[];
  showDetail=false;
  pow: any={title:"",url:"http://",text_url:"plus d'info"};

  constructor(public _location:Location,
              public routes:ActivatedRoute,
              public router:Router,
              public api:ApiService,
              public config:ConfigService,
              public toast:MatSnackBar) { }

  ngOnInit(): void {
    this.pow.owner=this.routes.snapshot.queryParamMap.get("owner");
  }


  quit(bSave=true) {
    if(bSave){
      let id_work=this.routes.snapshot.queryParamMap.get("id");
      if(this.pow.hasOwnProperty('id')){
        if(this.routes.snapshot.queryParamMap.get("redirect")=="addwork") {
          $$("Le titre est déjà dans la base on retourne à l'ajout d'expérience");
          this.router.navigate(["edit"], {
            queryParams:
              {
                id: id_work,
                add: this.pow.id,
                title: this.pow.title
              }
          });
          debugger
        }
      } else {
        $$("Le titre n'est pas dans la base, on l'enregistre")
        this.api.addpow(this.pow).subscribe((r:any)=>{
          showMessage(this,"Enregistré");
          if(this.routes.snapshot.queryParamMap.get("redirect")=="addwork"){
            this.router.navigate(["edit"],{queryParams:
                {
                  id:id_work,
                  add:r.id,
                  title:r.title
                },
              replaceUrl:true
            });
          }
        });
      }
    } else {
      this._location.back();
    }

  }

  changeTitle(evt: any) {
    if(evt.length>3){
      this.api.searchPOW(evt).subscribe((r:any)=>{
        this.pows=r.results;
      })
    } else {
      this.pows=[];
    }

  }

  add_title() {
    this.showDetail=true;
  }

  select_title(pow:any) {
    this.pow=pow;
    this.quit(true);
  }
}
