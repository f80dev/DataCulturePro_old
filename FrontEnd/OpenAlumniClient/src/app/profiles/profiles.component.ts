import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {ConfigService} from "../config.service";
import {checkLogin, showMessage} from "../tools";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.sass']
})
export class ProfilesComponent implements OnInit {
  showPerm: boolean=false;
  perms:any;
  profil:string;

  constructor(public api:ApiService,
              public toast:MatSnackBar,
              public _location:Location,
              public config:ConfigService,
              public router:Router) { }

  ngOnInit(): void {
    if(checkLogin(this)){
      this.api.getyaml("","perms").subscribe((r:any)=>{
        this.perms=r.perms;
        this.profil=r.id;
      })
    }
  }

  private readPerm(perm:string,sep:string=","):string {
    for(let p of this.perms){
      let rc="";
      if(p.tag==perm)rc=p.description;
      if(rc.length==0 && p.tag==perm.replace("r_",""))rc=p.description;
      if(rc.length==0 && p.tag==perm.replace("w_",""))rc=p.description+" en modification";
      if(rc.length>0)return rc+sep;
    }
    return "";
  }


  detailPerm(perm:string): string {
    if(!perm)return "";
    let rc="";
    for(let it of perm.split(" ")){
      rc=rc+this.readPerm(it)+" ";
    }
    return rc;
  }


  sel_profil(p) {
    if(p.subscription=="online"){
      this.config.user.perm=p.perm;
      this.config.user.profil_name=p.id;
      this.api.setuser(this.config.user).subscribe(()=>{
        showMessage(this,"Profil modifié");
        this._location.back();
      })
    }else{
      this.api.ask_perm(this.config.user,p.id).subscribe(()=>{
        showMessage(this,"Demande de souscription transmise");
        this.router.navigate(["search"]);
      })
    }
  }
}
