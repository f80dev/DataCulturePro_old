import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {ApiService} from "../api.service";
import {extract_id, showMessage} from "../tools";
import {ConfigService} from "../config.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {environment} from "../../environments/environment";
import {PromptComponent} from "../prompt/prompt.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-loginbar',
  templateUrl: './loginbar.component.html',
  styleUrls: ['./loginbar.component.sass']
})
export class LoginbarComponent implements OnInit,OnChanges {

  @Input("user") user:any;
  @Output('logout') onlogout: EventEmitter<any>=new EventEmitter();

  constructor(public router:Router,
              public dialog:MatDialog,
              public toast:MatSnackBar,
              public _location:Location,
              public config:ConfigService,
              public api:ApiService) { }

  ngOnInit(): void {

  }

  logout() {
    this.onlogout.emit();
  }



  ngOnChanges(changes: SimpleChanges): void {

  }

  help() {
    debugger
  }

  del_user() {
    this.dialog.open(PromptComponent,{data: {
        title: 'Confirmation',
        question: 'Supprimer votre compte ?',
        onlyConfirm: true,
        canEmoji: false,
        lbl_ok: 'Oui',
        lbl_cancel: 'Non'
      }}).afterClosed().subscribe((result_code) => {
      if (result_code != 'no') {
        this.api._delete("users/"+this.config.user.id+"/","").subscribe(()=>{
              showMessage(this,"Votre compte est effacé");
              this.api.logout();
              window.location.reload();
            })
      }
    });

  }
}

