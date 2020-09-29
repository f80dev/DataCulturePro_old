import {Component, OnInit, ViewChild} from '@angular/core';
import {ConfigService} from "./config.service";
import {ApiService} from "./api.service";
import {$$} from "./tools";
import {Router} from "@angular/router";
import {environment} from "../environments/environment";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'OpenAlumniClient';
  message: string="";
  appVersion: any;
  @ViewChild('drawer', {static: false}) drawer: MatSidenav;

    constructor(public config: ConfigService,public api:ApiService,public router:Router){
      this.appVersion=environment.appVersion;
      config.init(() => {
        this.config.init_user(()=>{
          //this.router.navigate(["search"]);
        },()=>{
          //this.router.navigate(["search"]);
        });
      });
    }


    closeMenu(){
    this.drawer.close();
  }

  logout() {
    this.api.logout();
    this.config.raz_user();
  }


}

