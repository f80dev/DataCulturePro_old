import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {showError, showMessage} from "../tools";
import {Router} from "@angular/router";
import {ConfigService} from "../config.service";
import {environment} from "../../environments/environment";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  message: string;

  constructor(private api:ApiService,public router:Router,public toast:MatSnackBar) { }

  ngOnInit(): void {
  }

  raz(table:string) {
    this.message="Effacement de la base de données";
    this.api._get("raz/","tables="+table,200).subscribe(()=>{
      showMessage(this,"Base de données effacée");
      this.message="";
      this.initdb();
      this.router.navigate(["import"]);
    },(err)=>{
      showError(this,"Echec d'effacement de la base");
    })
  }

  openQuery() {
    open(environment.domain_server+"/graphql","admin");
  }

  openDjangoAdmin() {
    open(environment.domain_server+"/admin/","admin");
  }

  openHelloWorld() {
    this.api.hello_world().subscribe((r:any)=>{
      showMessage(this,r.message);
    })
  }

  send_update(){
    this.api._get("ask_for_update").subscribe((r:any)=>{
      showMessage(this,r.message);
    })
  }

  initdb() {
    this.api._get("initdb").subscribe(()=>{
      showMessage(this,"Base initialisée")
    });
  }

  batch() {
    this.api._get("batch/").subscribe(()=>{
      showMessage(this,"traitement terminé")
    })
  }

  update_index() {
    this.api._get("rebuild_index","name=profils").subscribe((r:any)=>{
      showMessage(this,r.message);
    });
  }
}
