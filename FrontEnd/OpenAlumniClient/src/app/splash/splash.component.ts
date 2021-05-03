import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../config.service";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.sass']
})
export class SplashComponent implements OnInit {

  version:any;

  constructor(public config:ConfigService,
              public routes: ActivatedRoute,
              public router:Router) { }

  ngOnInit(): void {
    this.version=environment.appVersion;
    let id=this.routes.snapshot.queryParamMap.get("id");
    let name=this.routes.snapshot.queryParamMap.get("name");

    setTimeout(()=>{
      if(id){
        let url=this.routes.snapshot.url.join("/");
        if(url.indexOf("public"))this.router.navigate(["public"],{queryParams:{id:id}});
        if(url.indexOf("works"))this.router.navigate(["works"],{queryParams:{id:id,name:name}});
      }
      else{
        this.router.navigate(["search"]);
      }
    },2000);
  }

}
