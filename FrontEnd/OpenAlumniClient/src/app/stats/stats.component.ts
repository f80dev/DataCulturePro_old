import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {checkLogin} from "../tools";
import {ConfigService} from "../config.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.sass']
})
export class StatsComponent implements OnInit {
  query: string="";

  constructor(public _location:Location,public router:Router,public config:ConfigService) { }

  ngOnInit(): void {
    checkLogin(this);
  }

}
