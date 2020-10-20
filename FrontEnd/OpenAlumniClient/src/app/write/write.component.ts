import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../config.service";
import {ApiService} from "../api.service";
import {ActivatedRoute} from "@angular/router";
import {ContentChange} from "ngx-quill";
import {checkLogin, showError, showMessage} from "../tools";
import {Location} from "@angular/common";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.sass']
})
export class WriteComponent implements OnInit {
  profil: any;
  text: any;

  constructor(public config:ConfigService,
              public _location:Location,
              public toast:MatSnackBar,
              public api:ApiService,
              public routes:ActivatedRoute) { }

  ngOnInit(): void {
    checkLogin(this);
    let id=this.routes.snapshot.queryParamMap.get("id");
    this.api._get("profils/"+id+"/").subscribe((p:any)=>{
      this.profil=p;
    })

  }


  send() {
    this.api.send(this.profil.id,this.config.user.user.id,this.text).subscribe(r=>{
      showMessage(this,"Message envoyé a "+this.profil.firstname+" "+this.profil.lastname);
      this._location.back();
    },(err)=>{
      showError(this,err);
    })
  }
}
