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

  raz() {
    this.message="Effacement de la base de données";
    this.api._get("raz/").subscribe(()=>{
      showMessage(this,"Base de données effacée");
      this.message="";
      this.initdb();
      this.router.navigate(["import"]);
    },(err)=>{
      showError(this,err);
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

  initdb() {
    this.api._get("initdb").subscribe(()=>{
      showMessage(this,"Base initialisée")
    });
  }
}
