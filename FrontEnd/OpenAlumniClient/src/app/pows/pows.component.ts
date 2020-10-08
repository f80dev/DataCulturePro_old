import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {showError, showMessage} from "../tools";
import {ConfigService} from "../config.service";
import {NgNavigatorShareService} from "ng-navigator-share";
import {ClipboardService} from "ngx-clipboard";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-pows',
  templateUrl: './pows.component.html',
  styleUrls: ['./pows.component.sass']
})
export class PowsComponent implements OnInit {
  pows: any[]=[];
  query: any={value:""};

  constructor(public api:ApiService,
              public ngNavigatorShareService:NgNavigatorShareService,
              public _clipboardService:ClipboardService,
              public router:Router,
              public routes:ActivatedRoute,
              public config:ConfigService) { }

  ngOnInit(): void {
    if(this.routes.snapshot.queryParamMap.has("filter"))
      this.query.value=this.routes.snapshot.queryParamMap.get("filter");
    this.refresh();
  }

  open_search(name: string) {
    this.router.navigate(["search"],{queryParams:{filter:name}});
  }

  clearQuery() {
    this.query.value='';
    this.refresh();
  }

  handle:any;
  onQuery($event: KeyboardEvent) {
    clearTimeout(this.handle);
    this.handle=setTimeout(()=>{
      this.refresh();
    },1000);
  }



  private refresh() {
    let param="";
    if(this.query.value.length>0)param="search="+this.query.value;
    this.api._get("powsdoc",param).subscribe((r:any)=>{
      this.pows=[];
      for(let i of r.results){
        let tmp=[];
        if(i.hasOwnProperty("works")){
        for(let w of i.works){
          while(w.indexOf("'")>-1){
            w=w.replace("'","\"");
          }
          tmp.push(JSON.parse(w));
        }
        }
        i.works=tmp;
        this.pows.push(i);
      }
    },(err)=>{
      showError(this,err);
    });
  }

  add_experience(pow: any) {
    this.router.navigate(["edit"],{queryParams:{id:this.config.user.profil,add:pow.id,title:pow.title}})
  }

  share(pow: any) {
    let public_url=environment.domain_appli+"/pows?filter="+pow.title;
    showMessage(this,"Lien du profil disponible dans le presse-papier");
    this.ngNavigatorShareService.share({
      title: pow.title,
      text: "Retrouver les films de la femis",
      url: public_url
    })
      .then( (response) => {console.log(response);},()=>{
        this._clipboardService.copyFromContent(public_url);
      })
      .catch( (error) => {
        this._clipboardService.copyFromContent(public_url);
      });

  }

  get_pow(pow: any) {
    let index=this.pows.indexOf(pow);
    if(!this.pows[index].hasOwnProperty("links")){
      this.api.getPOW(pow.id).subscribe((r:any)=>{
        let rc=[];
        for(let w of r.works){
          let json_str=w.replace(/\'/gi,"\"").replace("\xa0","");;
          try {
            rc.push(JSON.parse(json_str));
          } catch (e) {}
        }
        r.works=rc;
        r.expanded=true;
        this.pows[index]=r;
      });
    }
  }
}
