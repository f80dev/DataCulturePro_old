import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../config.service";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.sass']
})
export class SplashComponent implements OnInit {

  version:any;

  constructor(public config:ConfigService,public router:Router) { }

  ngOnInit(): void {
    this.version=environment.appVersion;
    setTimeout(()=>{
      this.router.navigate(["search"]);
    },2000);
  }

}
