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
  constructor(public api:ApiService,
              public toast:MatSnackBar,
              public _location:Location,
              public config:ConfigService,
              public router:Router) { }

  ngOnInit(): void {
    checkLogin(this);
  }

  sel_profil(p) {
    this.config.user.perm=p.perm;
    this.api.setuser(this.config.user).subscribe(()=>{
      showMessage(this,"Profil modifié");
      this._location.back();
    })
  }
}
