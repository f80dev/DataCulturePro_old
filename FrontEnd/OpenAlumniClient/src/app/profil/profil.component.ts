import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {showMessage} from "../tools";
import {NgNavigatorShareService} from "ng-navigator-share";
import {ClipboardService} from "ngx-clipboard";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {ConfigService} from "../config.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.sass']
})
export class ProfilComponent implements OnInit,OnChanges {

  @Input("profil") profil:any={};
  @Input("level") level:number=1;
  @Input("pows") pows:number=1;
  @Input("showAction") showAction:boolean=true;
  @Input("writeAccess") writeAccess:boolean=false;
  @Input("backgroundColor") backgroundColor:string="x404040";
  @Input("width") width="300px";


  constructor(public toast:MatSnackBar,
              public router:Router,
              public config:ConfigService,
              public ngNavigatorShareService:NgNavigatorShareService,
              public _clipboardService:ClipboardService) { }

  ngOnInit(): void {
  }

  share(profil:any){
    showMessage(this,"Lien du profil disponible dans le presse-papier");
    this.ngNavigatorShareService.share({
      title: profil.firstname+" "+profil.lastname,
      text: "Profil de l'annuaire de la FEMIS",
      url: profil.public_url
    })
      .then( (response) => {console.log(response);},()=>{
        this._clipboardService.copyFromContent(profil.public_url);
      })
      .catch( (error) => {
        this._clipboardService.copyFromContent(profil.public_url);
      });
  }

  openWebSite(url: string) {
    open(url,"_blank");
  }

  openWork(profil: any) {
    this.router.navigate(['works'],{queryParams:{id:profil.id}});
  }

  editProfil(profil:any) {
    this.router.navigate(['edit'],{queryParams:{id:profil.id}})
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  write(profil:any) {
    this.router.navigate(["write"],{queryParams:{id:profil.id}})
  }
}

