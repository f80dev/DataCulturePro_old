(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mainform\" *ngIf=\"config.values\">\r\n\r\n  <br>\r\n  <h2>{{config.values.appname}}</h2>\r\n  <div style=\"width: 100%;text-align: center;font-size: small;margin-top:5px;\">\r\n    <div *ngIf=\"config.values.logo?.length>0\">\r\n      <img\r\n        [src]=\"config.values.logo\"\r\n        [ngStyle]=\"{'width':200,'margin':'15px'}\">\r\n      <br>\r\n    </div>\r\n    <small>Version:</small>\r\n    <br>{{appVersion}}<br><br><br>\r\n    <table style=\"display: inline-block;\">\r\n      <tr>\r\n        <td style=\"width: 50%;text-align: right;\">Réalisation</td>\r\n        <td style=\"width: 50%;text-align: left;\">\r\n          <a style=\"color:lightgray;font-variant: normal;font-weight: normal;\" [href]=\"config.values.editor?.link_author\" target=\"_blank\">\r\n            {{config.values.editor?.author}}\r\n          </a>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"width: 50%;text-align: right;\">Edition</td>\r\n        <td style=\"width: 50%;text-align: left;\">\r\n          <a style=\"color:lightgray;font-variant: normal;font-style: normal;font-weight: normal;\" [href]=\"config.values.editor?.website\" target=\"_blank\">\r\n            <strong>{{config.values.editor?.name}}</strong>\r\n          </a>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"width: 50%;text-align: right;\">Conditions générales</td>\r\n        <td style=\"width: 50%;text-align: left;\">\r\n          <a style=\"color:lightgray;font-variant: normal;font-style: normal;font-weight: normal;\" title=\"Conditions d'utilisation\" mat-list-item routerLink=\"cgu\" id=\"cmdCGU\">\r\n            CGU\r\n          </a>\r\n        </td>\r\n      </tr>\r\n      <tr><td><br></td></tr>\r\n\r\n    </table>\r\n    <br><br>\r\n    <div style=\"width: 100%;text-align: center;font-size: medium;\">\r\n\r\n    <button class=\"icon-button\" mat-icon-button mat-raised-button\r\n            (click)=\"openMail(config.values.support?.email)\">\r\n        <mat-icon>mail</mat-icon>\r\n    </button>\r\n\r\n    &nbsp;\r\n    <button class=\"icon-button\" mat-icon-button mat-raised-button\r\n            (click)=\"openFrame(config.values.support?.forum)\">\r\n      <mat-icon class=\"big-icon\">persons</mat-icon>\r\n    </button>\r\n    &nbsp;\r\n    <button class=\"icon-button\"\r\n            mat-icon-button mat-raised-button\r\n            (click)=\"openFrame(config.values.support?.faq)\">\r\n      <mat-icon >help</mat-icon>\r\n    </button>\r\n&nbsp;\r\n    <button class=\"icon-button\" mat-icon-button mat-raised-button\r\n            (click)=\"openFrame(config.values.support?.facebook)\">\r\n      <img style=\"width:40px;opacity: 0.5;\" src=\"./assets/icons/facebook.png\">\r\n    </button>\r\n&nbsp;\r\n    <button class=\"icon-button\" mat-icon-button mat-raised-button\r\n            (click)=\"openFrame(config.values.support?.website)\"\r\n           >\r\n      <mat-icon >home</mat-icon>\r\n    </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/addpow/addpow.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addpow/addpow.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mainform\">\n  <app-hourglass [message]=\"message\"></app-hourglass>\n  <div class=\"h-zone\" *ngIf=\"!showDetail\">Insérer un nouveau film</div>\n  <div style=\"min-width:350px;max-width: 500px;text-align: left;display: inline-block;\">\n    <mat-form-field appearance=\"fill\" class=\"app-field\" *ngIf=\"!showDetail\">\n      <mat-label>Titre du film</mat-label>\n      <input matInput placeholder=\"mon titre\"\n             (ngModelChange)=\"changeTitle($event)\"\n             type=\"text\" max=\"300\" [(ngModel)]=\"pow.title\"\n             required autofocus>\n    </mat-form-field>\n\n    <div *ngIf=\"showDetail\" class=\"h-zone\" style=\"margin: 10px;\">\n      \"{{pow.title}}\"\n    </div>\n\n    <div style=\"display: inline-block\" *ngIf=\"!showDetail\">\n      <span *ngIf=\"pows.length>0\">Sélectionner dans la liste ou </span>\n\n      <button class=\"app-button login-button\"\n              *ngIf=\"pow.title?.length>2\"\n              mat-button mat-raised-button\n              (click)=\"add_title()\">\n        Ajouter ce titre\n      </button>\n    </div>\n\n\n    <mat-selection-list #items *ngIf=\"!showDetail\"\n                        (selectionChange)=\"select_title(items.selectedOptions.selected[0].value)\"\n                        [multiple]=\"false\">\n      <mat-list-option *ngFor=\"let item of pows\" [value]=\"item\">\n        <mat-icon mat-list-icon>videocam</mat-icon>\n        <div mat-line>{{item.title}} ({{item.year}})</div>\n      </mat-list-option>\n    </mat-selection-list>\n\n\n\n    <div *ngIf=\"showDetail\">\n\n      <mat-accordion [multi]=\"false\" style=\"text-align: left;\">\n        <mat-expansion-panel class=\"app-panel\" [expanded]=\"true\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Informations générales\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n\n         <div style=\"width: 100%;text-align: center\">\n         <img [src]=\"pow.visual\"\n              *ngIf=\"pow.visual.length>0\"\n              style=\"width:150px;\"\n              (click)=\"change_visual()\">\n          <button class=\"app-button login-button\" color=\"primary\"\n                  *ngIf=\"pow.visual.length==0\"\n                  mat-button mat-raised-button\n                  (click)=\"change_visual()\">\n            Ajouter un visuel\n          </button>\n         <br>\n           <br>\n\n         </div>\n\n\n      <mat-form-field  appearance=\"fill\" class=\"app-field\">\n        <mat-label>Synopsis</mat-label>\n        <input matInput\n               type=\"text\" max=\"3000\"\n               [(ngModel)]=\"pow.description\">\n        <mat-hint>Synopsis de l'oeuvre</mat-hint>\n      </mat-form-field> <br>\n\n\n      <mat-form-field  appearance=\"fill\" class=\"app-field\" style=\"max-width: 100px\">\n        <mat-label>Année de sortie</mat-label>\n        <input matInput required\n               type=\"number\" min=\"1900\" max=\"2030\"\n               [(ngModel)]=\"pow.year\">\n      </mat-form-field>\n\n      <mat-form-field  appearance=\"fill\" class=\"app-field\" style=\"max-width: 200px\">\n        <mat-label>Budget</mat-label>\n        <input matInput\n               type=\"number\" min=\"0\"\n               [(ngModel)]=\"pow.budget\">\n        <span matSuffix>€</span>\n      </mat-form-field>\n\n\n\n         <br>\n\n\n\n\n\n       </mat-expansion-panel>\n        <mat-expansion-panel class=\"app-panel\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Ajouter des hyperliens\n          </mat-panel-title>\n          <mat-panel-description class=\"app-mat-panel-description\">\n            Description, Youtube\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <div *ngFor=\"let link of pow.links\" style=\"width: 80%;display: inline-block;text-align: left;font-size: small;font-weight: lighter;\">\n          <mat-icon (click)=\"remove(link)\" style=\"font-size: small;cursor: pointer;\">cancel</mat-icon>\n          <a href=\"{{link.url}}\" target=\"_blank\">{{link.text}}</a>\n          <br>\n        </div>\n\n        <mat-form-field  appearance=\"fill\" class=\"app-field\">\n          <mat-label>Lien internet</mat-label>\n          <input matInput placeholder=\"https://\"\n                 title=\"Peut être un lien vers une plateforme vidéo, la fiche wikipedia\"\n                 type=\"text\" max=\"300\"\n                 [(ngModel)]=\"link.url\">\n          <mat-hint>Adresse internet associé à l'oeuvre</mat-hint>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"fill\" class=\"app-field\">\n          <mat-label>Libellé du lien</mat-label>\n          <input matInput type=\"text\" max=\"300\"\n                 [(ngModel)]=\"link.text\">\n        </mat-form-field>\n\n\n        <mat-action-row>\n          <button class=\"app-button login-button\"\n                  *ngIf=\"pow.title.length>0 && link.url.length>0\"\n                  mat-button mat-raised-button\n                  (click)=\"add_link()\">\n            Ajouter\n          </button>\n        </mat-action-row>\n\n      </mat-expansion-panel>\n      </mat-accordion>\n    </div>\n\n  </div>\n\n  <div class=\"bottom-bar\">\n    <br><hr>\n\n    <input #csvInput hidden=\"true\"\n       type=\"file\" onclick=\"this.value=null\"\n       (change)=\"import($event)\"\n       accept=\".csv\"/>\n\n    <button class=\"app-button login-button\"\n            mat-button mat-raised-button\n            (click)=\"csvInput.click()\">\n      Importer\n    </button>\n\n    <button class=\"app-button login-button\"\n            mat-button mat-raised-button\n            (click)=\"quit(true)\">\n      Enregistrer\n    </button>\n\n    <button class=\"app-button login-button\"\n            mat-button mat-raised-button\n            (click)=\"quit(false)\">\n      Annuler\n    </button>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\r\n<div class=\"h-zone\">Commandes disponibles</div>\r\n<br>\r\n\r\n<button mat-raised-button mat-button class=\"app-button\" (click)=\"raz()\">Raz</button>\r\n&nbsp;\r\n<button mat-raised-button mat-button class=\"app-button\" (click)=\"router.navigate(['import'])\">Importation</button>\r\n&nbsp;\r\n<button mat-raised-button mat-button class=\"app-button\" (click)=\"router.navigate(['search'])\">Recherche</button>\r\n\r\n<button mat-raised-button mat-button class=\"app-button\" (click)=\"openQuery()\">Extraction</button>\r\n\r\n<button mat-raised-button mat-button class=\"app-button\" (click)=\"openDjangoAdmin()\">Admin Serveur</button>\r\n\r\n<button mat-raised-button mat-button class=\"app-button\" (click)=\"initdb()\">Initialisation</button>\r\n\r\n<button mat-raised-button mat-button class=\"app-button\" (click)=\"openHelloWorld()\">Hello world</button>\r\n\r\n\r\n<br><br>\r\n<app-hourglass [message]=\"message\"></app-hourglass>\r\n<br>\r\n&nbsp;\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <mat-toolbar class=\"mat-elevation-z2 toolbar-app\"\n               (mousedown)=\"closeMenu()\">\n    <mat-icon\n      id=\"cmdMenu\"\n      (click)=\"drawer.toggle()\"\n      style=\"cursor: pointer;\">\n      menu\n    </mat-icon>\n\n    &nbsp;\n    <!--    <img src=\"./assets/icons/icon-72x72.png\"-->\n    <!--         *ngIf=\"config.width_screen>800\"-->\n    <!--         style=\"width:30px;display: inline;\">-->\n    &nbsp;\n\n    <span>\n    {{config.values?.appname}}\n  </span>\n\n\n    &nbsp;\n    <span class=\"fill-remaining-space\"></span>\n    <div style=\"font-size: x-small;display: inline\" routerLink=\"about\">&nbsp;v{{appVersion}}</div>\n\n    <!--    <mat-icon -->\n    <!--              title=\"Se déconnecter de l'application\"-->\n    <!--              (click)=\"logout()\" style=\"cursor: pointer;\">exit_to_app-->\n    <!--    </mat-icon>-->\n  </mat-toolbar>\n\n  <mat-drawer-container class=\"container\" autosize>\n    <mat-drawer #drawer class=\"sidenav\" mode=\"over\">\n      <app-loginbar (click)=\"closeMenu()\" (logout)=\"logout()\">\n      </app-loginbar>\n    </mat-drawer>\n\n    <mat-drawer-content style=\"overflow: scroll\">\n      <div class=\"sidenav-content\"\n           (mousedown)=\"closeMenu()\">\n        <router-outlet style=\"width:100%;\" *ngIf=\"message.length==0\" ></router-outlet>\n      </div>\n    </mat-drawer-content>\n\n  </mat-drawer-container>\n\n  <!--<br>-->\n  <!--<div style=\"width: 100%;text-align: center;color:white;\">-->\n  <!---->\n  <!--</div>-->\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mainform\"\n     style=\"text-align: center;\">\n\n  <app-hourglass [message]=\"message\"></app-hourglass>\n\n  <div *ngIf=\"showAddWork==0 && profil\">\n    <mat-accordion style=\"display: inline-block;width:98%;\">\n      <!--      Civilité -->\n      <mat-expansion-panel class=\"app-panel\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Civilité\n          </mat-panel-title>\n          <mat-panel-description class=\"app-mat-panel-description\">\n            Noms, adresse & coordonnées\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <img [src]=\"profil.photo\"\n             mat-card-avatar\n             class=\"image-photo\"\n             style=\"width:100px;height: 100px;margin:15px;\"\n             (click)=\"change_photo()\">\n        <br>\n\n        <mat-form-field appearance=\"fill\" class=\"app-field\" style=\"max-width: 150px;\">\n          <mat-label>Prénom</mat-label>\n          <input matInput type=\"text\" max=\"50\" [(ngModel)]=\"profil.firstname\">\n        </mat-form-field>\n\n        <mat-form-field appearance=\"fill\" class=\"app-field\" style=\"max-width: 150px;\">\n          <mat-label>Nom</mat-label>\n          <input matInput type=\"text\" max=\"50\" [(ngModel)]=\"profil.lastname\">\n        </mat-form-field>\n\n        <br>\n\n        <mat-form-field appearance=\"fill\" class=\"app-field\">\n          <mat-label>Mobile</mat-label>\n          <input matInput type=\"text\" max=\"50\" [(ngModel)]=\"profil.mobile\">\n        </mat-form-field>\n\n        <br>\n        <br>\n\n         <mat-form-field appearance=\"fill\" class=\"app-field\">\n          <mat-label>Adresse</mat-label>\n          <input matInput type=\"text\"  [(ngModel)]=\"profil.address\">\n        </mat-form-field>\n        <br>\n\n        <mat-form-field appearance=\"fill\" class=\"app-field\" style=\"max-width: 80px\">\n          <mat-label>Code postal</mat-label>\n          <input matInput type=\"text\" max=\"5\" [(ngModel)]=\"profil.cp\">\n        </mat-form-field>\n        &nbsp;\n        <mat-form-field appearance=\"fill\" class=\"app-field\" style=\"max-width: 220px\">\n          <mat-label>Ville</mat-label>\n          <input matInput type=\"text\" [(ngModel)]=\"profil.town\">\n        </mat-form-field>\n\n\n        <mat-action-row>\n          <button color=\"primary\" class=\"icon-button\" mat-button mat-icon-button mat-raised-button (click)=\"quit(true)\">\n            <mat-icon>save</mat-icon>\n          </button>\n        </mat-action-row>\n\n      </mat-expansion-panel>\n\n      <!--      Mentorat-->\n      <mat-expansion-panel class=\"app-panel\" style=\"text-align: left;\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Tutorat\n          </mat-panel-title>\n          <mat-panel-description class=\"app-mat-panel-description\">\n            Assister les nouveaux élèves\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <mat-checkbox *ngIf=\"config.user?.user\"\n                      (change)=\"save_user({acceptSponsor:$event})\"\n                      [checked]=\"config.user?.acceptSponsor\">\n          Accepte d'être tuteur\n        </mat-checkbox>\n      </mat-expansion-panel>\n\n<!--      Expérience -->\n      <mat-expansion-panel class=\"app-panel\" [expanded]=\"true\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Expériences\n          </mat-panel-title>\n          <mat-panel-description class=\"app-mat-panel-description\">\n            Vos réalisations\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <table style=\"width: 100%\">\n          <tr *ngFor=\"let work of works\" style=\"width:100%;text-align: left;\">\n            <td>-</td>\n            <td style=\"line-height: 100%;\">\n              {{work.job}} sur \"{{work.pow?.title}}\" <br>\n              <small>en {{work.dtEnd | date:'yyyy'}}</small>\n              <br>\n            </td>\n             <td style=\"text-align: right;width:10%;\">\n              <mat-icon style=\"cursor: pointer;font-size: medium\" (click)=\"del_work(work)\">\n                cancel\n              </mat-icon>\n            </td>\n\n          </tr>\n        </table>\n\n        <mat-action-row>\n          <button class=\"app-button\" mat-button mat-raised-button\n                  color=\"accent\"Conso\n                  (click)=\"add_pow()\">\n            Ajouter une expérience\n          </button>\n        </mat-action-row>\n\n\n      </mat-expansion-panel>\n    </mat-accordion>\n\n    <br><br>\n    <p style=\"font-size: small\">\n      Mise a jour le, {{profil.dtLastUpdate | date:\"dd/MM/yy\"}}\n    </p>\n  </div>\n\n\n  <!--  -->\n  <!--  <div *ngIf=\"showAddWork==1\" style=\"text-align: left;\">-->\n  <!--    <hr>-->\n  <!--    <h3>Sélectionner le film à ajouter</h3>-->\n  <!--    <div  style=\"width: 92%;margin-left: 4%;\">-->\n  <!--      <mat-form-field>-->\n  <!--        <mat-label>Filter</mat-label>-->\n  <!--        <input matInput (keyup)=\"applyFilter($event)\" -->\n  <!--               placeholder=\"titre\" #input>-->\n  <!--      </mat-form-field>-->\n\n  <!--      <table mat-table-->\n  <!--             [dataSource]=\"dataSource\"-->\n  <!--             class=\"mat-elevation-z2\"-->\n  <!--             style=\"width: 100%;text-align: left;\">-->\n\n  <!--        &lt;!&ndash; Position Column &ndash;&gt;-->\n  <!--        <ng-container matColumnDef=\"title\">-->\n  <!--          <th mat-header-cell *matHeaderCellDef>Titre</th>-->\n  <!--          <td mat-cell *matCellDef=\"let element\"> {{element?.title}} </td>-->\n  <!--        </ng-container>-->\n\n  <!--        <ng-container matColumnDef=\"dtStart\">-->\n  <!--          <th mat-header-cell *matHeaderCellDef>Réalisé le</th>-->\n  <!--          <td mat-cell *matCellDef=\"let element\"> {{element?.dtStart | date:\"YYYY\"}} </td>-->\n  <!--        </ng-container>-->\n\n  <!--        <ng-container matColumnDef=\"sel\">-->\n  <!--          <th mat-header-cell *matHeaderCellDef>Sélectionner</th>-->\n  <!--          <td mat-cell *matCellDef=\"let element\">-->\n  <!--            <button class=\"icon-button\"-->\n  <!--                    mat-button mat-raised-button mat-icon-button-->\n  <!--                    (click)=\"select(element)\">-->\n  <!--              <mat-icon>checkmark</mat-icon>-->\n  <!--            </button>-->\n  <!--          </td>-->\n  <!--        </ng-container>-->\n\n  <!--        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>-->\n  <!--        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>-->\n\n  <!--        &lt;!&ndash; Row shown when there is no matching data. &ndash;&gt;-->\n  <!--        <tr class=\"mat-row\" *matNoDataRow>-->\n  <!--          <td class=\"mat-cell\" colspan=\"4\">Aucune donnée ne répond au filtre \"{{input.value}}\"</td>-->\n  <!--        </tr>-->\n  <!--      </table>-->\n\n  <!--      <br>-->\n  <!--      <button class=\"app-button\" mat-button mat-raised-button-->\n  <!--              (click)=\"add_pow()\">-->\n  <!--        Nouveau film-->\n  <!--      </button>-->\n  <!--    </div>-->\n  <!--  </div>-->\n\n  <div *ngIf=\"showAddWork==2\" style=\"width:100%;text-align: center;\">\n    <hr>\n    <h3>Ajouter le Projet \"{{add_work.movie}}\"</h3>\n    <br>\n    <br>\n\n    <mat-form-field class=\"app-field\">\n      <mat-label>Fonction</mat-label>\n      <mat-select  [(ngModel)]=\"job\">\n        <mat-option *ngFor=\"let job of config.jobs\" [value]=\"job.value\">{{job.label}}</mat-option>\n      </mat-select>\n      <mat-hint>Sélectionner le poste que vous aviez sur le projet</mat-hint>\n    </mat-form-field>\n    <br>\n\n    <br>\n\n    <mat-form-field appearance=\"fill\" class=\"app-field\" style=\"max-width: 200px\">\n      <mat-label>Date de début</mat-label>\n      <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"dtStart\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n      <mat-hint>Premier jour de travail</mat-hint>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"fill\" class=\"app-field\" style=\"max-width: 200px\">\n      <mat-label>Date de fin</mat-label>\n      <input matInput [matDatepicker]=\"picker2\" [(ngModel)]=\"dtEnd\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n      <mat-datepicker #picker2></mat-datepicker>\n      <mat-hint>Dernier jour de travail</mat-hint>\n    </mat-form-field>\n    <br><br>\n\n    <mat-form-field appearance=\"fill\" class=\"app-field\" style=\"max-width: 200px\">\n      <mat-label>Heures travaillées</mat-label>\n      <input matInput type=\"number\" value=\"8\" [(value)]=\"duration\">\n      <span matSuffix>Hrs</span>\n      <mat-hint>Nombre d'heures de travail réalisé sur le projet <mat-icon>help</mat-icon></mat-hint>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"fill\" class=\"app-field\" style=\"max-width: 200px\">\n      <mat-label>Revenu total</mat-label>\n      <input matInput type=\"number\" value=\"\" [(value)]=\"earning\">\n      <span matSuffix>€</span>\n      <mat-hint>\n        Revenu brut pour toute la durée\n        <mat-icon title=\"Donnée anonymisée uniquement utilisée sous forme de moyenne pour les statistiques\">help</mat-icon>\n      </mat-hint>\n    </mat-form-field>\n    <br><br>\n\n\n    <mat-form-field appearance=\"fill\" class=\"app-field\" style=\"width:100%;\">\n      <mat-label>Commentaires</mat-label>\n      <input matInput max=\"200\" type=\"text\"\n             title=\"Détailler l'expérience, difficultés rencontrées, bénéfices\"\n             value=\"Décrire l'expérience\" [(ngModel)]=\"comment\">\n    </mat-form-field>\n    <br>\n\n    <button class=\"app-button\"\n            mat-button mat-raised-button\n            title=\"Ajouter ce projet à votre expérience\"\n            (click)=\"save_newwork()\">\n      Ajouter ce projet\n    </button>\n\n  </div>\n\n  <div class=\"bottom-bar\">\n    <hr>\n    <button class=\"app-button\" mat-button mat-raised-button (click)=\"quit(false)\">\n      Retour\n    </button>\n\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/faqs/faqs.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faqs/faqs.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mainform\">\n  <br>\n  <button  class=\"app-button\"\n           mat-button mat-raised-button\n           (click)=\"_location.back()\">\n    Retour\n  </button>\n  <br>\n\n  <mat-expansion-panel [expanded]=\"faq.visible\"\n                       *ngFor=\"let faq of faqs\"\n                       name=\"faq\"\n                       style=\"width:96%;margin:3%;border:none;text-align: left;\">\n\n    <mat-expansion-panel-header collapsedHeight=\"60px\" expandedHeight=\"60px\">\n      <span *ngIf=\"!faq.visible\">\n        {{faq.title}}\n      </span>\n      <span *ngIf=\"faq.visible\" style=\"color:blue\">\n        {{faq.title}}\n      </span>\n    </mat-expansion-panel-header>\n\n    <div style=\"height:auto;\">\n      <div style=\"font-size: small\"\n           class=\"faq-content\"\n           *ngIf=\"!faq.content.endsWith('html') && faq.format!='html'\">\n        {{faq.content}}\n      </div>\n\n      <iframe style=\"border:none;width:100%;\"\n              *ngIf=\"faq.content.endsWith('html')\"\n              [src]=\"faq.content | safe\">\n      </iframe>\n\n      <div [innerHTML]=\"faq.content\"\n           class=\"faq-content\"\n           *ngIf=\"faq.format=='html'\">\n      </div>\n    </div>\n\n\n  </mat-expansion-panel>\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hourglass/hourglass.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hourglass/hourglass.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"message?.length>0\" [ngStyle]=\"{maxwidth:maxwidth,display:'inline-block'}\">\n  <table style=\"width:100%;\">\n    <tr>\n      <td>\n        <mat-spinner [diameter]=\"diameter\"></mat-spinner>\n      </td>\n      <td [ngStyle]=\"{'text-align': 'left','font-size':fontsize}\">\n        {{message}}\n      </td>\n\n      <td *ngIf=\"canCancel\" style=\"text-align: right;cursor: pointer;\">\n        <mat-icon (click)=\"oncancel.emit()\">cancel</mat-icon>\n      </td>\n      <td *ngIf=\"faq?.length>0\" style=\"text-align: right;cursor: pointer;\">\n        <app-faq-link [faq]=\"faq\"></app-faq-link>\n      </td>\n    </tr>\n  </table>\n</div>\n<br>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/image-selector/image-selector.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/image-selector/image-selector.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>{{data.title}}</h2>\n\n<mat-dialog-content style=\"overflow: hidden;\">\n\n  <div style=\"width: 100%;text-align: center;margin-bottom: 5px;\">\n    <button mat-flat-button mat-button\n            *ngIf=\"data.internet\"\n            (click)=\"addUrl()\">\n      Internet\n    </button>\n\n    <button mat-flat-button mat-button\n            id=\"cmdShowEmoji\"\n            *ngIf=\"data.emoji\"\n            (click)=\"showEmoji=!showEmoji\">Emojis</button>\n\n\n    <button mat-flat-button mat-button\n            id=\"cmdFile\"\n            style=\"width:70px;text-align: center;\">\n      <label for=\"file\">Photos</label>\n      <input type=\"file\" id=\"file\" style=\"opacity: 0;\"\n             (change)=\"onSelectFile($event)\"\n             accept=\"image/gif,image/jpeg,image/png\" />\n    </button>\n\n  </div>\n\n\n  <emoji-mart\n    *ngIf=\"showEmoji\"\n    set=\"google\"\n    style=\"margin-top:5px;\"\n    [showPreview]=\"false\"\n    [emojiSize]=\"48\"\n    (emojiSelect)=\"selectEmoji($event)\"\n    [style]=\"{ display: 'inline-block', bottom: '20px', right: '20px',width:'95%'}\"\n    [emojiTooltip]=\"true\"\n    emoji=\"point_up\">\n  </emoji-mart>\n\n\n  <mat-grid-list *ngIf=\"pictures?.length>0 && imageBase64==null\" style=\"width:100%;\" cols=\"3\" rowHeight=\"16:9\">\n    <mat-grid-tile *ngFor=\"let tile of pictures\">\n      <img [src]=\"tile\" style=\"width:25vmin;height:25vmin;\" (click)=\"selPicture(tile)\">\n    </mat-grid-tile>\n  </mat-grid-list>\n\n  <div *ngIf=\"showIcons\" style=\"width:100%;\">\n    <img *ngFor=\"let icon of icons\"\n         [src]=\"icon.photo\"\n         style=\"width:30px;display: inline-block;\"\n         (click)=\"selIcon(icon)\">\n  </div>\n  <div style=\"width: 100%;min-height:300px;text-align: center;\">\n    <div *ngIf=\"imageBase64 && !showEmoji\"\n         style=\"display: inline-block;width:80%;max-width: 300px;\">\n      <image-cropper\n        [imageBase64]=\"imageBase64\"\n        [maintainAspectRatio]=\"true\"\n        [aspectRatio]=\"ratio\"\n        [resizeToWidth]=\"200\"\n        format=\"png\"\n        (imageCropped)=\"imageCropped($event)\"\n        (imageLoaded)=\"imageLoaded()\"\n        (cropperReady)=\"cropperReady()\"\n        (loadImageFailed)=\"loadImageFailed()\"\n      >\n      </image-cropper>\n    </div>\n  </div>\n\n</mat-dialog-content>\n<hr>\n<mat-dialog-actions style=\"text-align: center;width:100%;\">\n\n  <button id=\"cmdTurn\" mat-button mat-raised-button mat-icon-button\n          title=\"Permet de faire tourner la photo de 90 degrés\"\n          *ngIf=\"data.square && data.result.startsWith('data')\"\n          (click)=\"rotatePhoto()\">\n    <mat-icon>refresh</mat-icon>\n  </button>\n\n  <button id=\"cmdCancel\" mat-button mat-raised-button (click)=\"onNoClick()\">Annuler</button>\n  <button id=\"cmdValide\" mat-button mat-raised-button [mat-dialog-close]=\"data.result\" >Ok</button>\n</mat-dialog-actions>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/import/import.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/import/import.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-hourglass [message]=\"message\"></app-hourglass>\n<input #csvInput hidden=\"true\"\n       type=\"file\" onclick=\"this.value=null\"\n       (change)=\"import($event)\"\n       accept=\".csv\"/>\n\n<button mat-raised-button\n        mat-button class=\"app-button\"\n        (click)=\"csvInput.click()\">\n  Importer depuis OASIS\n</button>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mainform\" style=\"text-align: center;\">\r\n  <br>\r\n  <span *ngIf=\"message && messageCode.length==0\">\r\n    {{message}}\r\n    <app-faq-link faq=\"authent\"></app-faq-link>\r\n  </span>\r\n\r\n  <br><br>\r\n  <app-hourglass maxwidth=\"300px\" [message]=\"wait_message\" faq=\"authent\"></app-hourglass>\r\n\r\n  <div *ngIf=\"config.user?.email?.length==0 && wait_message.length==0\">\r\n    <div style=\"width: 100%;text-align: center;\">\r\n      <div *ngIf=\"messageCode.length==0\">\r\n        <button class=\"app-button login-button\"\r\n                id=\"cmdGoogle\"\r\n                mat-button mat-raised-button\r\n                (click)=\"socialSignIn('google')\">\r\n          Google\r\n        </button>\r\n        <br><br>\r\n        <button class=\"app-button login-button\"\r\n                mat-button mat-raised-button\r\n                id=\"cmdFacebook\"\r\n                (click)=\"socialSignIn('facebook')\">\r\n          Facebook\r\n        </button>\r\n        <br>\r\n      </div>\r\n      <br><br>\r\n      <button class=\"app-button login-button\"\r\n              *ngIf=\"messageCode.length==0\"\r\n              mat-button mat-raised-button\r\n              id=\"cmdEmail\"\r\n              (click)=\"email_login()\">\r\n        Email\r\n      </button>\r\n      <br>\r\n\r\n      <div *ngIf=\"messageCode.length>0\">\r\n        <br>\r\n        {{messageCode}}<br>\r\n        <br><br>\r\n\r\n        <mat-form-field class=\"form-field-style\" style=\"width: 150px !important;text-align: center;font-size: large;\" >\r\n          <mat-label>Code d'accès</mat-label>\r\n          <input type=\"number\"\r\n                 matInput\r\n                 autofocus\r\n                 id=\"txtCode\"\r\n                 min=\"10000\"\r\n                 max=\"999999\"\r\n                 title=\"Saisissez votre code d'accès à 6 chiffres\"\r\n                 placeholder=\"Votre code\"\r\n                 [(ngModel)]=\"code\"\r\n                 (change)=\"updateCode($event)\">\r\n        </mat-form-field>\r\n\r\n        <br>\r\n        <app-tuto label=\"Le code à 6 chiffres vous a été envoyé sur votre adresse mail à votre première authentification. Si vous ne retrouvez pas le mail vous pouvez vous le faire renvoyer par KERBERUS\"></app-tuto>\r\n\r\n        <br>\r\n        <button class=\"app-button login-button\"\r\n                mat-button mat-raised-button\r\n                *ngIf=\"code>10000\"\r\n                id=\"cmdValider\"\r\n                (click)=\"updateCode({target:{value:code}})\">\r\n          Valider\r\n        </button>\r\n        <br><br><br>\r\n        <div *ngIf=\"code.length<4\">\r\n          <button class=\"app-button login-button\"\r\n                  mat-button mat-raised-button\r\n                  id=\"cmdResend\"\r\n                  (click)=\"resend_code()\">\r\n            Renvoyer le code\r\n          </button>\r\n          &nbsp;\r\n          <button class=\"app-button login-button\"\r\n                  mat-button mat-raised-button\r\n                  id=\"cmdReset\"\r\n                  (click)=\"next()\">\r\n            Rester anonyme\r\n          </button>\r\n        </div>\r\n\r\n        <br>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!--Zone d'acceuil-->\r\n  <div *ngIf=\"config.user?.email?.length>0\">\r\n    <h1>Bonjour {{config.user?.pseudo}}</h1>\r\n    <br>\r\n    <img *ngIf=\"config.user?.photo?.length>0\"\r\n         [src]=\"config.user?.photo\" width=\"150px\"\r\n         height=\"150px\"\r\n         class=\"image-photo\">\r\n    <br>\r\n\r\n    <button class=\"app-button\"\r\n            id=\"cmdGoStore\"\r\n            mat-button mat-raised-button\r\n            (click)=\"next()\">\r\n      Continuer\r\n    </button>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loginbar/loginbar.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loginbar/loginbar.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!config.user?.user?.email || config.user?.user?.email?.length==0\">\n  Identifiez vous pour accèder<br>\n  aux fonctionalités avancées\n</div>\n\n<div *ngIf=\"config.user?.user?.email.length>0\">\n  <div style=\"color:lightgray;font-size: x-small\">Bonjour,</div>\n  {{config.user?.user?.email}}\n  <br><br>\n</div>\n\n<hr>\n<br>\n\n<mat-nav-list>\n\n  <a title=\"Consultation de l'annuaire\"\n     routerLink=\"search\"\n     mat-list-item\n     id=\"cmdSearch\">\n    <mat-icon>search</mat-icon>\n    &nbsp;&nbsp;Consulter l'annuaire\n  </a>\n\n  <a title=\"Voir les oeuvres de la FEMIS\"\n     routerLink=\"pows\"\n     mat-list-item\n     id=\"cmdShowMovies\">\n    <mat-icon>event_seat</mat-icon>\n    &nbsp;&nbsp;Consulter les films\n  </a>\n\n  <br>\n  <a title=\"Editer votre profil\"\n     *ngIf=\"config.user?.profil\"\n     routerLink=\"edit\"\n     [queryParams]=\"{id:this.config.user?.profil}\"\n     mat-list-item\n     id=\"cmdEditProfil\">\n    <mat-icon>build</mat-icon>\n    &nbsp;&nbsp;Editer votre profil\n  </a>\n\n <a title=\"Ajouter des films dans le catalogue\"\n     *ngIf=\"config.hasPerm('add_movies') || isLocal\"\n     routerLink=\"addpow\"\n     [queryParams]=\"{owner:'public'}\"\n     mat-list-item\n     id=\"cmdAddMovie\">\n    <mat-icon>videocam</mat-icon>\n    &nbsp;&nbsp;Ajouter des films\n  </a>\n\n\n  <a title=\"Changer vos permissions\"\n     *ngIf=\"config.user?.user?.email?.length>0\"\n     mat-list-item\n     routerLink=\"profils\"\n     id=\"cmdEditPerms\">\n    <mat-icon>lock</mat-icon>\n    &nbsp;&nbsp;Permissions\n  </a>\n  <br>\n  <hr>\n  <br>\n  <a title=\"Effacer votre compte\"\n     *ngIf=\"config.user?.user?.email?.length>0\"\n     mat-list-item (click)=\"del_user()\"\n     id=\"cmdDeleteUser\">\n    <mat-icon>delete</mat-icon>\n    &nbsp;&nbsp;Détruire votre compte\n  </a>\n\n\n  <a title=\"Se déconnecter\"\n     *ngIf=\"config.user?.user?.email?.length>0\"\n     mat-list-item (click)=\"logout()\"\n     id=\"cmdLogout\">\n    <mat-icon>logout</mat-icon>\n    &nbsp;&nbsp;Se déconnecter\n  </a>\n\n\n\n  <a title=\"Se connecter\"\n     *ngIf=\"!config.user?.user || config.user?.user?.email?.length==0\"\n     mat-list-item\n     (click)=\"router.navigate(['login'])\"\n     id=\"cmdLogin\">\n    <mat-icon>login</mat-icon>\n    &nbsp;&nbsp;Se Connecter\n  </a>\n  <br>\n  <br>\n\n  <a title=\"Aide\" routerLink=\"faqs\"\n     mat-list-item\n     id=\"cmdHelp\">\n    <mat-icon>help</mat-icon>\n    &nbsp;&nbsp;Aide\n  </a>\n\n  <a title=\"A propos\" routerLink=\"about\"\n     mat-list-item\n     id=\"cmdAbout\">\n    <mat-icon>article</mat-icon>\n    &nbsp;&nbsp;A propos\n  </a>\n\n  <br>\n  <br>\n  <a title=\"Administration\"\n     *ngIf=\"isLocal\"\n     mat-list-item routerLink=\"admin\"\n     id=\"cmdAdmin\">\n    <mat-icon>settings</mat-icon>\n    &nbsp;&nbsp;Console d'administration\n  </a>\n\n</mat-nav-list>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pow/pow.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pow/pow.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table mat-table [dataSource]=\"data\" class=\"app-table\"\n           matSort matSortActive=\"created\" matSortDisableClear matSortDirection=\"desc\">\n      <!-- Number Column -->\n      <ng-container matColumnDef=\"title\">\n        <th mat-header-cell *matHeaderCellDef>#</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.number}}</td>\n      </ng-container>\n</table>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pows/pows.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pows/pows.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mainform\">\n\n   <app-tuto label=\"Vous pouvez également consulter la liste des élèves de la FEMIS (anciens et actuels), via le menu latéral\"></app-tuto>\n\n\n   <mat-form-field appearance=\"legacy\" style=\"max-width:600px;width:96%;font-size: x-large;\" autofocus>\n    <mat-label>Rechercher un film</mat-label>\n      <input matInput matNativeControl\n             title=\"Un ou plusieurs mots pour effectuer des recherches dans les métiers, les noms, les réalisations ...\"\n             (keyup)=\"onQuery($event)\"\n             placeholder=\"Un ou plusieurs mots du titre du films, une année\" [(ngModel)]=\"query.value\">\n      <mat-icon *ngIf=\"query.value?.length>0\"\n                matSuffix style=\"cursor: pointer\"\n                (click)=\"clearQuery()\">cancel</mat-icon>\n    </mat-form-field>\n  <br>\n\n\n<div class=\"wrap-list\" style=\"margin: 5px;\">\n  <mat-expansion-panel *ngFor=\"let pow of pows\" class=\"app-card-panel\" (afterExpand)=\"get_pow(pow)\" [expanded]=\"pow.expanded\">\n    <mat-expansion-panel-header>\n       <mat-panel-title>\n      {{pow.title}}\n         <small>({{pow.year}})</small>\n         </mat-panel-title>\n    </mat-expansion-panel-header>\n\n    <table>\n        <tr>\n          <td>\n            <img [src]=\"pow.visual\"\n                 style=\"width: 125px;\"\n            >\n          </td>\n          <td>\n              {{pow.description}}\n          </td>\n        </tr>\n      </table>\n\n    <div *ngFor=\"let link of pow.links\" style=\"font-size: large;font-weight: lighter;\">\n          <a href=\"{{link.url}}\" target=\"_blank\">{{link.text}}</a>\n    </div>\n\n    <div *ngIf=\"pow.works.length>0\">\n      <div *ngFor=\"let work of pow.works\">\n        {{work.job}}: {{work.name}}\n        <mat-icon style=\"font-size: medium;cursor: pointer;\"\n                  title=\"Cliquer pour consulter le profil\"\n                  (click)=\"open_search(work.name)\">account_circle</mat-icon>\n      </div>\n    </div>\n\n    <mat-action-row>\n       <button class=\"app-button\"\n               *ngIf=\"config.user?.profil\"\n               mat-button mat-raised-button\n               (click)=\"add_experience(pow)\">\n      <div class=\"bloc-bouton\">\n        Ajouter en<br>expérience\n      </div>\n\n    </button>\n\n      <button mat-icon-button\n              mat-raised-button\n              class=\"icon-button\"\n              mat-button title=\"Partager la fiche de ce film\"\n            *ngIf=\"config.hasPerm('share')\"\n            (click)=\"share(pow)\">\n      <mat-icon>share</mat-icon>\n    </button>\n\n    </mat-action-row>\n\n  </mat-expansion-panel>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profil/profil.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profil/profil.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card [ngStyle]=\"{width:width,backgroundColor:backgroundColor,textAlign:'left'}\" [class.mat-elevation-z8]=\"true\">\n  <mat-card-header>\n    <div mat-card-avatar *ngIf=\"config.hasPerm('r_photo')\">\n      <img mat-card-avatar [src]=\"profil?.photo\" class=\"icon-profil\">\n    </div>\n    <mat-card-title>\n      <span *ngIf=\"config.hasPerm('r_firstname')\">{{profil?.firstname}}</span>\n      <span *ngIf=\"config.hasPerm('r_lastname')\"> {{profil?.lastname}}</span>\n    </mat-card-title>\n    <mat-card-subtitle *ngIf=\"config.hasPerm('r_promo')\">Promotion {{profil?.degree_year}}</mat-card-subtitle>\n  </mat-card-header>\n\n  <mat-card-content>\n\n    <ng-content></ng-content>\n\n  </mat-card-content>\n\n  <mat-card-actions *ngIf=\"showAction\" style=\"text-align: left;\">\n    <button mat-button mat-icon-button\n            *ngIf=\"config.user?.user?.email!=profil?.email && config.hasPerm('write_email')\"\n            (click)=\"write(profil)\"\n            title=\"Lui envoyer un message\">\n      <mat-icon>email</mat-icon>\n    </button>\n\n    <button mat-button mat-icon-button\n            title=\"Réalisations / Films / Livres\"\n            *ngIf=\"profil?.works?.length>0 && config.hasPerm('r_works')\"\n            (click)=\"openWork(profil)\">\n      <mat-icon>videocam</mat-icon>\n    </button>\n\n\n    <button mat-icon-button mat-button title=\"Partager / Envoyer ce profil\"\n            *ngIf=\"profil?.public_url?.length>0 && config.hasPerm('share')\"\n            (click)=\"share(profil)\">\n      <mat-icon>share</mat-icon>\n    </button>\n\n    <button mat-button mat-icon-button\n            title=\"Consulter son site web\"\n            *ngIf=\"profil?.website?.length>0\"\n            (click)=\"openWebSite(profil?.website)\">\n      <mat-icon>public</mat-icon>\n    </button>\n\n     <button mat-button mat-icon-button\n            title=\"Editer mon profil\"\n            *ngIf=\"config.user?.user?.email==profil?.email\"\n            (click)=\"editProfil(profil)\">\n      <mat-icon>create</mat-icon>\n    </button>\n\n    <button mat-button mat-icon-button\n            *ngIf=\"profil?.linkedin?.length>0 && config.hasPerm('r_linkedin')\"\n            (click)=\"openWebSite(profil?.linkedin)\">\n        <img src=\"/assets/icons/LinkedIn.png\"\n             class=\"icon-button\"\n             style=\"background-color: white;\">\n    </button>\n  </mat-card-actions>\n</mat-card>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/profiles.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/profiles.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mainform\" style=\"font-weight: lighter;\">\n  <br>\n  <h2>Vous souhaitez accéder à plus d'information sur les élèves</h2>\n  <br>\n\n  <mat-accordion [multi]=\"false\" style=\"text-align: left;\">\n  <mat-expansion-panel *ngFor=\"let profil of config.profils | filter:['subscription','online']\" class=\"app-panel\" style=\"margin:10px;\">\n    <mat-expansion-panel-header>\n      <mat-panel-title class=\"app-mat-panel-title\">{{profil.title}}</mat-panel-title>\n    </mat-expansion-panel-header>\n\n    <p>{{profil.presentation}}</p>\n\n    <div *ngIf=\"this.perms\" style=\"font-size: small;text-align: left;\">\n      Vous avez accès:\n      {{detailPerm(profil.perm)}}\n      <br>\n    </div>\n\n    <div *ngIf=\"profil.price>0\">\n      <br><br>\n      Prix:{{profil.price}}€/mois\n    </div>\n\n\n    <mat-action-row>\n      <button mat-button mat-raised-button\n          class=\"app-button\"\n          (click)=\"sel_profil(profil)\">\n          Souscrire\n        </button>\n    </mat-action-row>\n\n  </mat-expansion-panel>\n\n  </mat-accordion>\n\n\n  <br>\n\n  <div *ngIf=\"showPerm\">\n    <br>\n    Actuellement vous avez accès :\n    <br><small>{{detailPerm(config.user.perm)}}</small>\n    <br><br>\n  </div>\n\n\n  <div class=\"bottom-bar\">\n    <hr>\n     <button mat-button mat-raised-button\n          class=\"app-button\"\n          (click)=\"showPerm=true\">\n          Vos permissions\n    </button>\n\n    <button mat-button mat-raised-button\n          class=\"app-button\"\n          (click)=\"_location.back()\">\n          Retour\n        </button>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/prompt/prompt.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prompt/prompt.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>{{data.title}}</h1>\r\n<div mat-dialog-content>\r\n  <p *ngIf=\"data.question?.length>0 && !data.question?.startsWith('http') && !data.question?.startsWith('./')\">{{data.question}}</p>\r\n  <div *ngIf=\"data.question?.length>0 && (data.question?.startsWith('http') || data.question?.startsWith('./'))\">\r\n    <iframe  scrolling=\"auto\" frameborder=\"0\" style=\"background: none;\"\r\n             [src]=\"data.question | safe: 'resourceUrl'\" width=\"100%\">\r\n    </iframe>\r\n  </div>\r\n\r\n  <mat-form-field *ngIf=\"!data.onlyConfirm\" style=\"width: 95%;\">\r\n    <input id=\"txtPrompt\" [type]=\"_type\" matInput [(ngModel)]=\"data.result\" cdkFocusInitial (keypress)=\"onEnter($event)\">\r\n    <mat-icon *ngIf=\"data.emojis\" matSuffix (click)=\"showEmoji=!showEmoji\">emoji_emotions</mat-icon>\r\n  </mat-form-field>\r\n\r\n  <emoji-mart\r\n    *ngIf=\"showEmoji\"\r\n    set=\"google\"\r\n    [showPreview]=\"false\"\r\n    [emojiSize]=\"32\"\r\n    (emojiSelect)=\"selectEmoji($event)\"\r\n    [style]=\"{ display: 'inline-block', bottom: '20px', right: '20px' }\"\r\n    [emojiTooltip]=\"true\"\r\n    emoji=\"point_up\">\r\n  </emoji-mart>\r\n\r\n</div>\r\n<div mat-dialog-actions style=\"text-align: right;\">\r\n    <button id=\"cmdNo\" *ngIf=\"data.lbl_cancel\" mat-button mat-raised-button [mat-dialog-close]=\"'no'\">{{data.lbl_cancel}}</button>\r\n    <button id=\"cmdYes\" *ngIf=\"data.lbl_ok\" mat-button mat-raised-button [mat-dialog-close]=\"data.result\">{{data.lbl_ok}}</button>\r\n    <button id=\"cmdSup\" *ngIf=\"data.lbl_sup\" mat-button mat-raised-button [mat-dialog-close]=\"'lbl_sup'\">{{data.lbl_sup}}</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/public.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/public.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mainform\">\n<app-profil [profil]=\"profil\" level=\"0\" class=\"large-card\">\n  {{profil?.job}}<br>\n  <div class=\"wrap-list\">\n    <div *ngFor=\"let wrk of works\" style=\"max-width: 400px;margin:1%;\">\n      <app-work [work]=\"wrk\" backgroundColor=\"#265480\">\n      </app-work>\n    </div>\n  </div>\n\n</app-profil>\n\n<div class=\"bottom-bar\">\n  <hr>\n  <button mat-button mat-raised-button\n            class=\"app-button\"\n            (click)=\"router.navigate(['search'],{queryParams:{filter:profil.lastname}})\">\n      Annuaire\n   </button>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin:1%;text-align: center;min-width: 300px;\">\r\n\r\n  <app-tuto label=\"Vous pouvez également consulter la liste des réalisations de la FEMIS, via le menu latéral\"></app-tuto>\r\n\r\n  <mat-form-field appearance=\"legacy\" style=\"max-width:600px;width:96%;font-size: x-large;\" autofocus>\r\n    <mat-label>Rechercher un profil</mat-label>\r\n      <input matInput matNativeControl\r\n             title=\"Un ou plusieurs mots pour effectuer des recherches dans les métiers, les noms, les réalisations ...\"\r\n             (keyup)=\"onQuery($event)\"\r\n             placeholder=\"nom, métier, promotion ou titre d'une réalisation\" [(ngModel)]=\"query.value\">\r\n      <mat-icon *ngIf=\"query.value?.length>0\"\r\n                matSuffix style=\"cursor: pointer\"\r\n                (click)=\"clearQuery()\">cancel</mat-icon>\r\n    </mat-form-field>\r\n\r\n  <div *ngIf=\"config.hasPerm('advanced_search')\">\r\n<!--       <mat-checkbox [checked]=\"searchInTitle\">-->\r\n<!--          Chercher uniquement via les titres-->\r\n<!--        </mat-checkbox>-->\r\n    </div>\r\n\r\n    <div *ngIf=\"config.hasPerm('stats')\">\r\n      <br>\r\n      <button mat-button mat-raised-button\r\n              class=\"app-button\"\r\n              (click)=\"export_result()\">\r\n        Exporter\r\n      </button>\r\n      <button mat-button mat-raised-button\r\n              class=\"app-button\"\r\n              (click)=\"openStats()\">\r\n        <div class=\"bloc-bouton\">Console<br>statistiques</div>\r\n      </button>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"div-center\">\r\n  <app-hourglass [message]=\"message\"></app-hourglass>\r\n</div>\r\n\r\n<div class=\"wrap-list\" *ngIf=\"message.length==0 && config.ready\">\r\n<!--  *ngFor=\"let profil of profils | filter:['filter_tag',query.value.toLowerCase()]\"-->\r\n  <app-profil\r\n              *ngFor=\"let profil of profils\"\r\n              [writeAccess]=\"config.user && config.user.profil==profil?.id\"\r\n              class=\"app-card\" [profil]=\"profil\">\r\n\r\n    <div *ngIf=\"config.hasPerm('r_department')\"\r\n         style=\"margin-top:20px;margin-bottom:20px;width: 100%;text-align: center;font-size: large\">\r\n      {{profil?.department}}\r\n    </div>\r\n\r\n  </app-profil>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/splash/splash.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/splash/splash.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mainform\" style=\"width:100%;text-align: center;\">\n  <br>\n  <h1>Data Culture Pro</h1>\n\n  <br><br>\n  <app-hourglass message=\" \"\n                 diameter=\"40\"\n                 fontsize=\"20px\"></app-hourglass>\n  <br><br>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stats/stats.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stats/stats.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"mainform\">\n  <h2>\n    Bienvenue dans la console statistiques\n  </h2>\n\n  <app-tuto label=\"Grâce aux langages GraphQL vous pouvez interroger la base des anciens éleves\"></app-tuto>\n\n  <textarea\n            [rows]=\"10\"\n            style=\"margin:2%;width: 95%;background-color: lightgray;\"\n            placeholder=\"Votre requête ici\"  [(ngModel)]=\"query\">\n  </textarea>\n\n  <div class=\"bottom-bar\">\n    <hr>\n    <button mat-button mat-raised-button\n            class=\"app-button\"\n            (click)=\"_location.back()\">\n      Retour\n    </button>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tuto/tuto.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tuto/tuto.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"_if && text?.length>0\" (click)=\"hideTuto(true)\">\n\n  <div *ngIf=\"_type=='tips'\" style=\"max-width:800px;Vtext-align:left;display:inline-block;margin-top:6px;margin-bottom:8px;\">\n    <table>\n      <tr>\n        <td>\n          <img *ngIf=\"image?.length>0\"\n               [src]=\"image\"\n               style=\"width:30px;height:30px;padding:3px;\">\n\n          <span *ngIf=\"icon?.length>0\">\n            <mat-icon style=\"margin:10px;\">{{icon}}</mat-icon>\n          </span>\n\n          <span *ngIf=\"_button?.length>0\">\n            <button class=\"app-button\" mat-button mat-flat-button mat-icon-button>\n              <mat-icon style=\"margin:10px;\">{{_button}}</mat-icon>\n            </button>\n          </span>\n        </td>\n        <td>\n          <span [ngStyle]=\"{'color':color,'font-size':'small','font-weight':'normal'}\">\n            {{text}}\n          </span>\n        </td>\n      </tr>\n    </table>\n  </div>\n\n  <div  *ngIf=\"background?.length>0 && _type=='title'\"\n        style=\"background-color:black;cursor: none;pointer-events: none;position: fixed;top:0;left:0;height:100vh;width:100vw;z-index: 999;object-fit:cover;\">\n    <img [src]=\"background\" *ngIf=\"background?.startsWith('http') || background?.startsWith('./')\"\n         style=\"min-width:100%;min-height:100%;\">\n  </div>\n\n  <div *ngIf=\"background?.length==0 && _type=='title'\"\n       style=\"background-color: white;cursor: none;pointer-events: none;position: fixed;left:0px;top:0px;width: 100%;height:100%;z-index: 999;\">\n  </div>\n\n  <div [ngStyle]=\"{'color':color}\">\n    <div *ngIf=\"_type=='title'\"\n         style=\"z-index:1000;display:inline-block;position:fixed;top:0px;left:0px;width:100vw;height:100vh;text-align:center;\">\n\n      <div style=\"width:80%;text-align:center;font-size: 6vmin;margin-top:5vh;margin-bottom:5vh;margin-left:10%;\"\n            [innerHTML]=\"text | safe:'html'\">\n      </div>\n      <img *ngIf=\"image?.length>0\"\n           [src]=\"image\"\n           style=\"max-width:400px;max-height:400px;width:60vmin;height:60vmin;margin-bottom:3vh;display: inline-block;\">\n\n      <div *ngIf=\"image?.length==0\"\n           style=\"height:40vh\"></div>\n\n      <div style=\"width:90%;margin-left:5%;margin-top:4vh;text-align:center;font-size: large;margin-bottom: 5vh;\"\n           [innerHTML]=\"subtitle | safe:'html'\"></div>\n\n      <button class=\"app-button\" mat-button mat-raised-button id=\"btnStart\">{{labelButton}}</button>\n\n    </div>\n  </div>\n\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/work/work.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/work/work.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card [ngStyle]=\"{'backgroundColor':backgroundColor}\">\n  <mat-card-header>\n    <div mat-card-avatar>\n      <img src=\"/assets/img/movie.png\" class=\"icon-profil\">\n    </div>\n    <mat-card-title>{{work?.pow?.title}}</mat-card-title>\n    <mat-card-subtitle>{{work.job}} du {{work.dtStart | date:'dd/MM'}} au {{work.dtStart | date:'dd/MM/yy'}}</mat-card-subtitle>\n  </mat-card-header>\n\n  <mat-card-content>\n\n    <ng-content></ng-content>\n\n  </mat-card-content>\n\n  <mat-card-actions *ngIf=\"showAction\" style=\"text-align: left;\">\n\n    <button mat-button mat-icon-button\n            *ngIf=\"work?.pow?.links.length>0\"\n            (click)=\"openInfo(work.pow.links[0])\"\n            [title]=\"work?.pow.links[0].text\">\n      <mat-icon>info</mat-icon>\n    </button>\n\n  </mat-card-actions>\n</mat-card>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/works/works.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/works/works.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mainform\">\n\n  <div class=\"h-zone\">Réalisations</div>\n  <div class=\"wrap-list\">\n    <div *ngFor=\"let wrk of works\" style=\"max-width: 400px;margin:1%;\">\n      <app-work [work]=\"wrk\" backgroundColor=\"#265480\" [showAction]=\"true\">\n        <small>{{wrk.comment}}</small>\n      </app-work>\n    </div>\n  </div>\n\n\n<br>\n<div class=\"bottom-bar\">\n  <hr>\n<button mat-raised-button mat-button (click)=\"_location.back()\">\n  Retour\n</button>\n</div>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/write/write.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/write/write.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mainform\">\n  <br>\n  <app-profil [profil]=\"profil\" [showAction]=\"false\" width=\"90vw\" style=\"display: inline-block\">\n\n    <table>\n      <tr *ngIf=\"config.hasPerm('r_address r_cp')\">\n        <td>\n          Adresse postale:\n        </td>\n        <td>{{profil?.address}} {{profil?.cp}}</td>\n      </tr>\n      <tr *ngIf=\"config.hasPerm('r_mobile') && profil?.mobile?.length>4\">\n        <td>Mobile: </td>\n        <td>{{profil?.mobile}}</td>\n      </tr>\n    </table>\n\n\n  <br>\n  <mat-form-field appearance=\"fill\"\n                  *ngIf=\"config.hasPerm('write_email')\"\n                  style=\"width:100%;\">\n    <mat-label>Votre message pour {{profil?.firstname}}</mat-label>\n    <textarea matInput\n              [rows]=\"10\"\n              [(ngModel)]=\"text\">\n    </textarea>\n  </mat-form-field>\n  <br>\n\n  <button mat-button mat-raised-button\n            class=\"app-button\"\n            *ngIf=\"config.hasPerm('write_email')\"\n            (click)=\"send()\">\n      Envoyer\n   </button>\n\n</app-profil>\n<div class=\"bottom-bar\">\n  <hr>\n  <button mat-button mat-raised-button\n            class=\"app-button\"\n            (click)=\"_location.back()\">\n      Retour\n   </button>\n</div>\n\n\n</div>\n");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"DataCulturePro\",\"version\":\"0.0.55\",\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve\",\"build\":\"npm version patch && ng build --output-hashing none --baseHref=https://dcp.f80.fr\",\"prod\":\"npm version patch && ng build --prod --output-hashing none --baseHref=https://dcp.f80.fr\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"^10.0.11\",\"@angular/cdk\":\"^10.1.3\",\"@angular/common\":\"^10.0.11\",\"@angular/compiler\":\"^10.0.11\",\"@angular/core\":\"^10.0.11\",\"@angular/forms\":\"^10.0.11\",\"@angular/material\":\"^10.1.3\",\"@angular/platform-browser\":\"^10.0.11\",\"@angular/platform-browser-dynamic\":\"^10.0.11\",\"@angular/router\":\"^10.0.11\",\"@angular/service-worker\":\"^10.0.11\",\"ng-navigator-share\":\"^1.0.4\",\"ngx-image-cropper\":\"^2.1.2\",\"ngx-clipboard\":\"^13.0.1\",\"ngx-json-viewer\":\"^2.4.0\",\"ngx-quill\":\"^12.0.1\",\"ngx-social-button\":\"^1.0.4\",\"ngx-webcam\":\"^0.3.0\",\"quill\":\"^1.3.7\",\"rxjs\":\"~6.5.5\",\"tslib\":\"^2.0.1\",\"zone.js\":\"~0.10.3\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"^0.1000.7\",\"@angular/cli\":\"^10.0.7\",\"@angular/compiler-cli\":\"^10.0.11\",\"@types/jasmine\":\"^3.5.13\",\"@types/jasminewd2\":\"~2.0.3\",\"@types/node\":\"^12.12.54\",\"codelyzer\":\"^6.0.0\",\"jasmine-core\":\"~3.5.0\",\"jasmine-spec-reporter\":\"~5.0.0\",\"karma\":\"~5.0.0\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage-istanbul-reporter\":\"~3.0.2\",\"karma-jasmine\":\"~3.3.0\",\"karma-jasmine-html-reporter\":\"^1.5.0\",\"protractor\":\"~7.0.0\",\"ts-node\":\"~8.3.0\",\"tslint\":\"^6.1.3\",\"typescript\":\"~3.9.5\"}}");

/***/ }),

/***/ "./src/app/about/about.component.sass":
/*!********************************************!*\
  !*** ./src/app/about/about.component.sass ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let AboutComponent = class AboutComponent {
    constructor(config) {
        this.config = config;
        this.config.init();
        this.appVersion = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appVersion;
    }
    ngOnInit() {
    }
    openFrame(forum) {
    }
    openMail(url) {
        open(url);
    }
};
AboutComponent.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
];
AboutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./about.component.sass */ "./src/app/about/about.component.sass")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/addpow/addpow.component.sass":
/*!**********************************************!*\
  !*** ./src/app/addpow/addpow.component.sass ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHBvdy9hZGRwb3cuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/addpow/addpow.component.ts":
/*!********************************************!*\
  !*** ./src/app/addpow/addpow.component.ts ***!
  \********************************************/
/*! exports provided: AddpowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpowComponent", function() { return AddpowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools */ "./src/app/tools.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _image_selector_image_selector_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../image-selector/image-selector.component */ "./src/app/image-selector/image-selector.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");










const reg_url = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
let AddpowComponent = class AddpowComponent {
    constructor(_location, dialog, routes, router, api, config, toast) {
        this._location = _location;
        this.dialog = dialog;
        this.routes = routes;
        this.router = router;
        this.api = api;
        this.config = config;
        this.toast = toast;
        this.pows = [];
        this.showDetail = false;
        this.link = { url: "", text: "" };
        this.message = "";
    }
    ngOnInit() {
        this.initPow();
    }
    initPow() {
        this.pow = { title: "", links: [], description: "", visual: "" };
        this.pow.owner = this.routes.snapshot.queryParamMap.get("owner");
    }
    quit(bSave = true) {
        if (bSave) {
            let id_work = this.routes.snapshot.queryParamMap.get("id");
            if (this.pow.hasOwnProperty('id')) {
                if (this.routes.snapshot.queryParamMap.get("redirect") == "addwork") {
                    Object(_tools__WEBPACK_IMPORTED_MODULE_2__["$$"])("Le titre est déjà dans la base on retourne à l'ajout d'expérience");
                    this.router.navigate(["edit"], {
                        queryParams: {
                            id: id_work,
                            add: this.pow.id,
                            title: this.pow.title
                        }
                    });
                }
            }
            else {
                Object(_tools__WEBPACK_IMPORTED_MODULE_2__["$$"])("Le titre n'est pas dans la base, on l'enregistre");
                //this.pow.links=JSON.stringify(this.pow.links);
                this.api.addpow(this.pow).subscribe((r) => {
                    Object(_tools__WEBPACK_IMPORTED_MODULE_2__["showMessage"])(this, "Enregistré");
                    if (this.routes.snapshot.queryParamMap.get("redirect") == "addwork") {
                        this.router.navigate(["edit"], { queryParams: {
                                id: id_work,
                                add: r.id,
                                title: r.title
                            },
                            replaceUrl: true
                        });
                    }
                    else {
                        this.initPow();
                        this.showDetail = false;
                    }
                });
            }
        }
        else {
            this._location.back();
        }
    }
    changeTitle(evt) {
        if (evt.length > 2) {
            this.api._get("powsdoc", "search=" + evt).subscribe((r) => {
                this.pows = r.results;
            });
        }
        else {
            this.pows = [];
        }
    }
    add_title() {
        this.showDetail = true;
    }
    select_title(pow) {
        this.pow = pow;
        this.quit(true);
    }
    remove(_url) {
        this.pow.links.splice(this.pow.links.indexOf(_url), 1);
    }
    add_link() {
        if (!this.link.url.startsWith("http"))
            this.link.url = "https://" + this.link.url;
        this.pow.links.push(this.link);
        this.link = { url: "", text: "" };
    }
    change_visual() {
        this.dialog.open(_image_selector_image_selector_component__WEBPACK_IMPORTED_MODULE_8__["ImageSelectorComponent"], { position: { left: '5vw', top: '5vh' },
            maxWidth: 400, maxHeight: 700, width: '50vw', height: '90vh', data: {
                result: this.pow.visual,
                checkCode: true,
                width: 200,
                height: 200,
                emoji: false,
                internet: false,
                ratio: 1,
                quality: 0.7
            }
        }).afterClosed().subscribe((result) => {
            if (result) {
                this.pow.visual = result;
            }
        });
    }
    import(fileInputEvent) {
        var reader = new FileReader();
        this.message = "Chargement du fichier";
        reader.onload = () => {
            this.message = "Importation du fichier de films";
            this.api._post("movie_importer/", "", reader.result, 200).subscribe((r) => {
                this.message = "";
                Object(_tools__WEBPACK_IMPORTED_MODULE_2__["showMessage"])(this, r);
                this.router.navigate(["pows"]);
            }, (err) => {
                Object(_tools__WEBPACK_IMPORTED_MODULE_2__["showError"])(this, err);
            });
        };
        reader.readAsDataURL(fileInputEvent.target.files[0]);
    }
};
AddpowComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
AddpowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addpow',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addpow.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/addpow/addpow.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addpow.component.sass */ "./src/app/addpow/addpow.component.sass")).default]
    })
], AddpowComponent);



/***/ }),

/***/ "./src/app/admin/admin.component.sass":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.sass ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools */ "./src/app/tools.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");







let AdminComponent = class AdminComponent {
    constructor(api, router, toast) {
        this.api = api;
        this.router = router;
        this.toast = toast;
    }
    ngOnInit() {
    }
    raz() {
        this.message = "Effacement de la base de données";
        this.api._get("raz/", "", 200).subscribe(() => {
            Object(_tools__WEBPACK_IMPORTED_MODULE_3__["showMessage"])(this, "Base de données effacée");
            this.message = "";
            this.initdb();
            this.router.navigate(["import"]);
        }, (err) => {
            Object(_tools__WEBPACK_IMPORTED_MODULE_3__["showError"])(this, "Echec d'effacement de la base");
        });
    }
    openQuery() {
        open(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].domain_server + "/graphql", "admin");
    }
    openDjangoAdmin() {
        open(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].domain_server + "/admin/", "admin");
    }
    openHelloWorld() {
        this.api.hello_world().subscribe((r) => {
            Object(_tools__WEBPACK_IMPORTED_MODULE_3__["showMessage"])(this, r.message);
        });
    }
    initdb() {
        this.api._get("initdb").subscribe(() => {
            Object(_tools__WEBPACK_IMPORTED_MODULE_3__["showMessage"])(this, "Base initialisée");
        });
    }
};
AdminComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
];
AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin.component.sass */ "./src/app/admin/admin.component.sass")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools */ "./src/app/tools.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");






let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.token = null;
        this.token = localStorage.getItem("token");
    }
    getHttpOptions() {
        let httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        if (!this.token)
            this.token = localStorage.getItem("token");
        if (this.token)
            httpOptions.headers["Authorization"] = 'Token ' + this.token;
        return httpOptions;
    }
    _get(url, params = "", _timeoutInSec = 60) {
        url = Object(_tools__WEBPACK_IMPORTED_MODULE_2__["api"])(url, params);
        return this.http.get(url, this.getHttpOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(_timeoutInSec * 1000));
    }
    _post(url, params = "", body, _timeoutInSec = 60) {
        url = Object(_tools__WEBPACK_IMPORTED_MODULE_2__["api"])(url, params, true, "");
        Object(_tools__WEBPACK_IMPORTED_MODULE_2__["$$"])("Appel de " + url);
        return this.http.post(url, body, this.getHttpOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(_timeoutInSec * 1000));
    }
    _delete(url, params = "") {
        url = Object(_tools__WEBPACK_IMPORTED_MODULE_2__["api"])(url, params, true, "");
        return this.http.delete(url, this.getHttpOptions()).pipe();
    }
    _put(url, params = "", body, _timeoutInSec = 60) {
        url = Object(_tools__WEBPACK_IMPORTED_MODULE_2__["api"])(url, params, true, "");
        return this.http.put(url, body, this.getHttpOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(_timeoutInSec * 1000));
    }
    resend(email) {
        return this._get("resend", "email=" + email);
    }
    refreshToken() {
        this.http.post('/api-token-refresh/', JSON.stringify({ token: this.token }), this.getHttpOptions()).subscribe(data => {
            this.token = data['token'];
        }, err => { Object(_tools__WEBPACK_IMPORTED_MODULE_2__["showError"])(this, err); });
    }
    logout() {
        Object(_tools__WEBPACK_IMPORTED_MODULE_2__["$$"])("Déconnexion de l'utilisateur");
        this.token = null;
        this.token_expires = null;
        localStorage.removeItem("token");
        localStorage.removeItem("email");
    }
    getyaml(url = "", name = "") {
        let param = "";
        if (url.length > 0)
            param = "url=" + url;
        if (name.length > 0)
            param = "name=" + name;
        return this._get("getyaml", param);
    }
    updateData(token) {
        this.token = token;
        // decode the token to read the username and expiration timestamp
        const token_parts = this.token.split(/\./);
        const token_decoded = JSON.parse(window.atob(token_parts[1]));
        this.token_expires = new Date(token_decoded.exp * 1000);
        //this.username = token_decoded.username;
    }
    login(user) {
        this.http.post('/api-token-auth/', JSON.stringify(user), this.getHttpOptions()).subscribe(data => {
            this.updateData(data['token']);
        }, err => { Object(_tools__WEBPACK_IMPORTED_MODULE_2__["showError"])(this, err); });
    }
    checkCode(email, code) {
        //let body="username="+email+"&password="+code;
        let body = { "username": email, "password": code };
        return this._post("api-token-auth/", "", body);
    }
    deluser(address) {
        return this._get("deluser");
    }
    getuser(email) {
        return this._get("extrausers", "search=" + email);
    }
    register(body) {
        return this._post("users/register", "", body);
    }
    setuser(fields) {
        //if(fields["acceptSponsor"])fields["acceptSponsor"]="True"; else fields["acceptSponsor"]="False";
        return this._put("extrausers/" + fields.id + "/", "", fields);
    }
    hello_world() {
        return this._get("helloworld/");
    }
    getPOW(id = null) {
        let params = "";
        if (id)
            params = id + "/";
        return this._get("pows/" + params);
    }
    addpow(pow) {
        return this._post("pows/", "", pow);
    }
    addwork(work) {
        work.dtEnd = work.dtEnd.split("T")[0];
        work.dtStart = work.dtStart.split("T")[0];
        work.profil = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].domain_server + "/api/profils/" + work.profil + "/";
        work.pow = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].domain_server + "/api/pows/" + work.pow + "/";
        return this._post("works/", "", work);
    }
    getworks(email) {
        return this._get("extraworks", "search=" + email);
    }
    setprofil(data) {
        return this._put("profils/" + data.id + "/", "", data);
    }
    send(id, _from, text) {
        return this._post("send_to", "profil=" + id + "&from=" + _from, text);
    }
    gettokenforimagesearchengine() {
    }
    searchImage(result, number, access_token) {
    }
    searchPOW(query) {
        return this._get("pows", "search=" + query);
    }
    getfaqs() {
        return this.http.get(Object(_tools__WEBPACK_IMPORTED_MODULE_2__["api"])('getyaml', "name=faqs"));
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _import_import_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./import/import.component */ "./src/app/import/import.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _public_public_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./public/public.component */ "./src/app/public/public.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profiles/profiles.component */ "./src/app/profiles/profiles.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _pow_pow_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pow/pow.component */ "./src/app/pow/pow.component.ts");
/* harmony import */ var _addpow_addpow_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./addpow/addpow.component */ "./src/app/addpow/addpow.component.ts");
/* harmony import */ var _works_works_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./works/works.component */ "./src/app/works/works.component.ts");
/* harmony import */ var _splash_splash_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./splash/splash.component */ "./src/app/splash/splash.component.ts");
/* harmony import */ var _write_write_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./write/write.component */ "./src/app/write/write.component.ts");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./stats/stats.component */ "./src/app/stats/stats.component.ts");
/* harmony import */ var _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./faqs/faqs.component */ "./src/app/faqs/faqs.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _pows_pows_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pows/pows.component */ "./src/app/pows/pows.component.ts");



















const routes = [
    { path: 'public', component: _public_public_component__WEBPACK_IMPORTED_MODULE_6__["PublicComponent"] },
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"] },
    { path: 'works', component: _works_works_component__WEBPACK_IMPORTED_MODULE_12__["WorksComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'import', component: _import_import_component__WEBPACK_IMPORTED_MODULE_4__["ImportComponent"] },
    { path: 'profils', component: _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_8__["ProfilesComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"] },
    { path: 'edit', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"] },
    { path: 'faqs', component: _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_16__["FaqsComponent"] },
    { path: 'pow', component: _pow_pow_component__WEBPACK_IMPORTED_MODULE_10__["PowComponent"] },
    { path: 'pows', component: _pows_pows_component__WEBPACK_IMPORTED_MODULE_18__["PowsComponent"] },
    { path: 'addpow', component: _addpow_addpow_component__WEBPACK_IMPORTED_MODULE_11__["AddpowComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"] },
    { path: 'stats', component: _stats_stats_component__WEBPACK_IMPORTED_MODULE_15__["StatsComponent"] },
    { path: 'write', component: _write_write_component__WEBPACK_IMPORTED_MODULE_14__["WriteComponent"] },
    { path: '', component: _splash_splash_component__WEBPACK_IMPORTED_MODULE_13__["SplashComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html, body, app-root {\n  overflow: hidden;\n  margin: 0 !important;\n  color: white;\n  background-color: #6e6e6e !important;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.toolbar-app {\n  height: 40px;\n}\n\n.sidenav-content {\n  width: 100%;\n  justify-content: center;\n  text-align: center;\n}\n\n.container {\n  width: 100vw;\n  height: 100vh;\n  background: transparent;\n  position: fixed;\n}\n\n.sidenav {\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGlEQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFJRjs7QUFEQTtFQUNFLGFBQUE7QUFJRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHksIGFwcC1yb290XHJcbiAgb3ZlcmZsb3c6IGhpZGRlblxyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50XHJcbiAgY29sb3I6IHdoaXRlXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlNmU2ZSAhaW1wb3J0YW50XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmXHJcblxyXG4udG9vbGJhci1hcHBcclxuICBoZWlnaHQ6IDQwcHhcclxuXHJcbi5zaWRlbmF2LWNvbnRlbnRcclxuICB3aWR0aDogMTAwJVxyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyXHJcblxyXG4uY29udGFpbmVyXHJcbiAgd2lkdGg6IDEwMHZ3XHJcbiAgaGVpZ2h0OiAxMDB2aFxyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50XHJcbiAgcG9zaXRpb246IGZpeGVkXHJcblxyXG5cclxuLnNpZGVuYXZcclxuICBwYWRkaW5nOiAxNXB4XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");






let AppComponent = class AppComponent {
    constructor(config, api, router) {
        this.config = config;
        this.api = api;
        this.router = router;
        this.title = 'OpenAlumniClient';
        this.message = "";
        this.appVersion = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].appVersion;
        config.init(() => {
            this.config.init_user(() => {
                //this.router.navigate(["search"]);
            }, () => {
                //this.router.navigate(["search"]);
            });
        });
    }
    closeMenu() {
        this.drawer.close();
    }
    logout() {
        this.api.logout();
        this.config.raz_user();
    }
};
AppComponent.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AppComponent.propDecorators = {
    drawer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['drawer', { static: false },] }]
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _import_import_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./import/import.component */ "./src/app/import/import.component.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./faqs/faqs.component */ "./src/app/faqs/faqs.component.ts");
/* harmony import */ var _hourglass_hourglass_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./hourglass/hourglass.component */ "./src/app/hourglass/hourglass.component.ts");
/* harmony import */ var _tuto_tuto_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./tuto/tuto.component */ "./src/app/tuto/tuto.component.ts");
/* harmony import */ var _image_selector_image_selector_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./image-selector/image-selector.component */ "./src/app/image-selector/image-selector.component.ts");
/* harmony import */ var _trans_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./trans.pipe */ "./src/app/trans.pipe.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/safe.pipe.ts");
/* harmony import */ var _profil_profil_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./profil/profil.component */ "./src/app/profil/profil.component.ts");
/* harmony import */ var _public_public_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./public/public.component */ "./src/app/public/public.component.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _prompt_prompt_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./prompt/prompt.component */ "./src/app/prompt/prompt.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var ngx_social_button__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-social-button */ "./node_modules/ngx-social-button/__ivy_ngcc__/fesm2015/ngx-social-button.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./tools */ "./src/app/tools.ts");
/* harmony import */ var _loginbar_loginbar_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./loginbar/loginbar.component */ "./src/app/loginbar/loginbar.component.ts");
/* harmony import */ var _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./profiles/profiles.component */ "./src/app/profiles/profiles.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _pow_pow_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pow/pow.component */ "./src/app/pow/pow.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _addpow_addpow_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./addpow/addpow.component */ "./src/app/addpow/addpow.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _works_works_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./works/works.component */ "./src/app/works/works.component.ts");
/* harmony import */ var _splash_splash_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./splash/splash.component */ "./src/app/splash/splash.component.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js");
/* harmony import */ var _write_write_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./write/write.component */ "./src/app/write/write.component.ts");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./stats/stats.component */ "./src/app/stats/stats.component.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _pows_pows_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./pows/pows.component */ "./src/app/pows/pows.component.ts");




























































let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"],
            _import_import_component__WEBPACK_IMPORTED_MODULE_9__["ImportComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__["AdminComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_20__["AboutComponent"],
            _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_21__["FaqsComponent"],
            _hourglass_hourglass_component__WEBPACK_IMPORTED_MODULE_22__["HourglassComponent"],
            _tuto_tuto_component__WEBPACK_IMPORTED_MODULE_23__["TutoComponent"],
            _image_selector_image_selector_component__WEBPACK_IMPORTED_MODULE_24__["ImageSelectorComponent"],
            _trans_pipe__WEBPACK_IMPORTED_MODULE_25__["TransPipe"],
            _safe_pipe__WEBPACK_IMPORTED_MODULE_27__["SafePipe"],
            _profil_profil_component__WEBPACK_IMPORTED_MODULE_28__["ProfilComponent"],
            _public_public_component__WEBPACK_IMPORTED_MODULE_29__["PublicComponent"],
            _filter_pipe__WEBPACK_IMPORTED_MODULE_30__["FilterPipe"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_31__["LoginComponent"],
            _prompt_prompt_component__WEBPACK_IMPORTED_MODULE_32__["PromptComponent"],
            _work_work_component__WEBPACK_IMPORTED_MODULE_33__["WorkComponent"],
            _loginbar_loginbar_component__WEBPACK_IMPORTED_MODULE_37__["LoginbarComponent"],
            _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_38__["ProfilesComponent"],
            _edit_edit_component__WEBPACK_IMPORTED_MODULE_39__["EditComponent"],
            _pow_pow_component__WEBPACK_IMPORTED_MODULE_40__["PowComponent"],
            _addpow_addpow_component__WEBPACK_IMPORTED_MODULE_42__["AddpowComponent"],
            _works_works_component__WEBPACK_IMPORTED_MODULE_46__["WorksComponent"],
            _splash_splash_component__WEBPACK_IMPORTED_MODULE_47__["SplashComponent"],
            _write_write_component__WEBPACK_IMPORTED_MODULE_49__["WriteComponent"],
            _stats_stats_component__WEBPACK_IMPORTED_MODULE_51__["StatsComponent"],
            _pows_pows_component__WEBPACK_IMPORTED_MODULE_59__["PowsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_45__["MatNativeDateModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production }),
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            ngx_quill__WEBPACK_IMPORTED_MODULE_48__["QuillModule"].forRoot({
                placeholder: 'Ecrivez votre message'
            }),
            _angular_material_table__WEBPACK_IMPORTED_MODULE_41__["MatTableModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_52__["ImageCropperModule"],
            _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_50__["TextFieldModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatProgressSpinnerModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_43__["MatSelectModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_44__["MatDatepickerModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_53__["MatGridListModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_54__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_55__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_56__["MatListModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_57__["MatCheckboxModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_58__["MatExpansionModule"]
        ],
        providers: [
            _api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"], _trans_pipe__WEBPACK_IMPORTED_MODULE_25__["TransPipe"],
            { provide: ngx_social_button__WEBPACK_IMPORTED_MODULE_35__["SocialServiceConfig"], useFactory: _tools__WEBPACK_IMPORTED_MODULE_36__["getAuthServiceConfigs"] },
            { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MAT_DIALOG_DATA"], useValue: { hasBackdrop: false } }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/config.service.ts":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tools */ "./src/app/tools.ts");








let ConfigService = class ConfigService {
    constructor(location, http, platform, api) {
        this.location = location;
        this.http = http;
        this.platform = platform;
        this.api = api;
        this.visibleTuto = false;
        this.ready = false;
        this.profils = [];
        this.jobs = [];
    }
    getJson(jsonFile) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return Promise.resolve((yield this.http.get(jsonFile).toPromise()));
        });
    }
    hasPerm(perms, comments = "") {
        if (!this.user)
            return false;
        if (!this.user.perm)
            return false;
        for (let p of perms.split(" ")) {
            if (this.user.perm.indexOf(p) == -1) {
                return false;
            }
        }
        return true;
    }
    getConfig() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.config) {
                this.config = (yield this.api.getyaml("", _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].config_file).toPromise());
            }
            return Promise.resolve(this.config);
        });
    }
    /**
     * Initialisation des principaux paramètres
     * @param func
     */
    init(func = null) {
        Object(_tools__WEBPACK_IMPORTED_MODULE_7__["$$"])("Initialisation de la configuration");
        this.width_screen = window.innerWidth;
        Object(_tools__WEBPACK_IMPORTED_MODULE_7__["initAvailableCameras"])((res) => { this.webcamsAvailable = res; });
        Object(_tools__WEBPACK_IMPORTED_MODULE_7__["$$"])("Chargement des jobs");
        this.getJson('/assets/jobs.json').then((r) => {
            if (this.jobs.length == 0) {
                for (let i of Object.values(r)) {
                    this.jobs.push({ value: i, label: i });
                }
                this.api.getyaml("", "profils").subscribe((r) => {
                    this.profils = r.profils;
                    this.raz_user();
                    this.getConfig().then(r => {
                        this.values = r;
                        this.ready = true;
                        Object(_tools__WEBPACK_IMPORTED_MODULE_7__["$$"])("Chargement du fichier de configuration", r);
                        if (func != null)
                            func(this.values);
                    }, () => {
                        Object(_tools__WEBPACK_IMPORTED_MODULE_7__["$$"])("Probléme de chargement de la configuration");
                    });
                });
            }
        });
    }
    init_user(func_success = null, func_anonyme = null) {
        Object(_tools__WEBPACK_IMPORTED_MODULE_7__["$$"])("Initialisation de l'utilisateur");
        let email = localStorage.getItem("email");
        this.api.getuser(email).subscribe((r) => {
            if (r.count > 0) {
                Object(_tools__WEBPACK_IMPORTED_MODULE_7__["$$"])("Chargement de l'utilisateur ", r.results[0]);
                this.user = r.results[0];
                if (func_success)
                    func_success();
            }
            else {
                Object(_tools__WEBPACK_IMPORTED_MODULE_7__["$$"])("Aucun compte disponible a l'adresse mail" + email + " on réinitialise le compte");
                this.raz_user();
                this.api.logout();
                this.user.perm = this.profils[this.values.anonymousOffer].perm;
                if (func_anonyme)
                    func_anonyme();
            }
        });
    }
    raz_user() {
        this.user = { email: "", perm: this.profils[0].perm };
    }
};
ConfigService.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
ConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ConfigService);



/***/ }),

/***/ "./src/app/edit/edit.component.sass":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.sass ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tools */ "./src/app/tools.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _prompt_prompt_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../prompt/prompt.component */ "./src/app/prompt/prompt.component.ts");
/* harmony import */ var _image_selector_image_selector_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../image-selector/image-selector.component */ "./src/app/image-selector/image-selector.component.ts");











let EditComponent = class EditComponent {
    constructor(_location, routes, dialog, config, router, api) {
        this._location = _location;
        this.routes = routes;
        this.dialog = dialog;
        this.config = config;
        this.router = router;
        this.api = api;
        this.profil = null;
        this.works = [];
        this.showAddWork = -1;
        this.displayedColumns = ["title", "dtStart", "sel"];
        this.dataSource = null;
        this.dtStart = new Date();
        this.dtEnd = new Date(new Date().getTime() + 1000 * 3600 * 24 * 5);
        this.duration = 5 * 8;
        this.job = "";
        this.comment = "";
        this.message = "";
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    ngOnInit() {
        if (Object(_tools__WEBPACK_IMPORTED_MODULE_6__["checkLogin"])(this)) {
            this.message = "Chargement de votre profil";
            this.loadProfil(() => {
                this.showAddWork = 0;
                this.message = "";
                this.autoAddMovie();
            });
        }
    }
    refresh() {
        this.loadMovies((data) => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](data);
            this.autoAddMovie();
        });
    }
    autoAddMovie() {
        let add = this.routes.snapshot.queryParamMap.get("add");
        let title = this.routes.snapshot.queryParamMap.get("title");
        if (add) {
            this.select({ title: title, id: add });
        }
    }
    loadProfil(func = null) {
        let id = this.routes.snapshot.queryParamMap.get("id");
        Object(_tools__WEBPACK_IMPORTED_MODULE_6__["$$"])("Chargement du profil & des travaux");
        this.api._get("profils/" + id + "/", "").subscribe((p) => {
            Object(_tools__WEBPACK_IMPORTED_MODULE_6__["$$"])("Profil chargé ", p);
            if (p) {
                this.profil = p;
                let d_min = 1e9;
                for (let j of this.config.jobs) {
                    let d = Object(_tools__WEBPACK_IMPORTED_MODULE_6__["stringDistance"])(p.department, j.value);
                    if (d < d_min) {
                        d_min = d;
                        this.job = j.value;
                    }
                }
            }
            if (func)
                func();
        });
        this.api._get("extraworks", "search=" + id).subscribe((r) => {
            Object(_tools__WEBPACK_IMPORTED_MODULE_6__["$$"])("Travaux chargés");
            this.works = r.results;
        });
    }
    loadMovies(func) {
        let rc = [];
        this.api.getPOW().subscribe((r) => {
            for (let i of r.results) {
                if (i.owner == "public" || this.config.user == null || this.config.user.user == null || i.owner == this.config.user.user.id) {
                    i["sel"] = "";
                    rc.push(i);
                }
            }
            func(rc);
        });
    }
    select(element) {
        this.add_work = {
            movie: element.title,
            movie_id: element.id
        };
        this.showAddWork = 2;
    }
    save_newwork() {
        this.add_work = {
            profil: this.profil.id,
            pow: this.add_work.movie_id,
            job: this.job,
            earning: this.earning,
            comment: this.comment,
            dtStart: this.dtStart.toISOString().split("T")[0],
            dtEnd: this.dtEnd.toISOString().split("T")[0],
            duration: this.duration
        };
        Object(_tools__WEBPACK_IMPORTED_MODULE_6__["$$"])("Insertion de ", this.add_work);
        this.api._post("works/", "", this.add_work).subscribe((rany) => {
            this.showAddWork = 0;
            this.loadProfil();
            this.router.navigate(["edit"], { queryParams: { id: this.profil.id }, replaceUrl: true });
            Object(_tools__WEBPACK_IMPORTED_MODULE_6__["showMessage"])(this, "Travail enregistré");
        });
    }
    quit(bSave = true) {
        if (bSave) {
            this.profil.dtLastUpdate = new Date().toISOString();
            this.api.setprofil(this.profil).subscribe(() => {
                Object(_tools__WEBPACK_IMPORTED_MODULE_6__["showMessage"])(this, "Profil enregistré");
            }, (err) => {
                Object(_tools__WEBPACK_IMPORTED_MODULE_6__["showError"])(this, err);
            });
            this.save_user();
        }
        this.router.navigate(["search"], { replaceUrl: true });
    }
    del_work(wrk) {
        this.dialog.open(_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_9__["PromptComponent"], { data: {
                title: 'Confirmation',
                question: 'Supprimer cette expérience',
                onlyConfirm: true,
                canEmoji: false,
                lbl_ok: 'Oui',
                lbl_cancel: 'Non'
            } }).afterClosed().subscribe((result_code) => {
            if (result_code != 'no') {
                this.api._delete("works/" + wrk.id + "/").subscribe(() => {
                    this.loadProfil();
                });
            }
        });
    }
    change_photo() {
        this.dialog.open(_image_selector_image_selector_component__WEBPACK_IMPORTED_MODULE_10__["ImageSelectorComponent"], { position: { left: '5vw', top: '5vh' },
            maxWidth: 400, maxHeight: 700, width: '90vw', height: '90vh', data: {
                result: this.profil.photo,
                checkCode: true,
                width: 200,
                height: 200,
                emoji: false,
                internet: false,
                ratio: 1,
                quality: 0.7
            }
        }).afterClosed().subscribe((result) => {
            if (result) {
                this.profil.photo = result;
            }
        });
    }
    add_pow() {
        if (this.config.user.user) {
            this.router.navigate(['addpow'], { queryParams: {
                    redirect: 'addwork',
                    id: this.profil.id,
                    owner: this.config.user.user.id
                }
            });
        }
    }
    save_user(evt = null) {
        if (evt != null) {
            let prop = Object.keys(evt)[0];
            this.config.user.user[prop] = evt[prop].checked;
        }
        this.api.setuser(this.config.user.user).subscribe(() => { });
    }
};
EditComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
EditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit.component.sass */ "./src/app/edit/edit.component.sass")).default]
    })
], EditComponent);



/***/ }),

/***/ "./src/app/faqs/faqs.component.sass":
/*!******************************************!*\
  !*** ./src/app/faqs/faqs.component.sass ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhcXMvZmFxcy5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "./src/app/faqs/faqs.component.ts":
/*!****************************************!*\
  !*** ./src/app/faqs/faqs.component.ts ***!
  \****************************************/
/*! exports provided: FaqsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsComponent", function() { return FaqsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





let FaqsComponent = class FaqsComponent {
    constructor(api, _location, route) {
        this.api = api;
        this._location = _location;
        this.route = route;
        this.faqs = [];
    }
    ngOnInit() {
        this.api.getfaqs().subscribe((rc) => {
            var params = this.route.snapshot.queryParamMap;
            this.faqs = [];
            for (let faq of rc.content) {
                if (!params.has("open") || faq["index"].indexOf(params.get("open")) > -1) {
                    faq.visible = params.has("open");
                    this.faqs.push(faq);
                }
            }
        });
    }
};
FaqsComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
FaqsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-faqs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./faqs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/faqs/faqs.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./faqs.component.sass */ "./src/app/faqs/faqs.component.sass")).default]
    })
], FaqsComponent);



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FilterPipe = class FilterPipe {
    transform(items, args) {
        if (args.length == 1) {
            if (args[0] == "" || args[0] == "*")
                return items;
            return items.filter(item => item == args[0]);
        }
        else {
            if (args[1] == "")
                return items;
            return items.filter(item => !item.hasOwnProperty(args[0]) || (item[args[0]].indexOf(args[1]) !== -1));
        }
    }
};
FilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);



/***/ }),

/***/ "./src/app/hourglass/hourglass.component.sass":
/*!****************************************************!*\
  !*** ./src/app/hourglass/hourglass.component.sass ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdXJnbGFzcy9ob3VyZ2xhc3MuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/hourglass/hourglass.component.ts":
/*!**************************************************!*\
  !*** ./src/app/hourglass/hourglass.component.ts ***!
  \**************************************************/
/*! exports provided: HourglassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HourglassComponent", function() { return HourglassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let HourglassComponent = class HourglassComponent {
    constructor(router) {
        this.router = router;
        this.diameter = 18;
        this.message = "";
        this.canCancel = false;
        this.maxwidth = "100vw";
        this.faq = "";
        this.fontsize = "medium";
        this.oncancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    openfaq() {
        this.router.navigate(["faq"], { queryParams: { open: this.faq } });
    }
};
HourglassComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HourglassComponent.propDecorators = {
    diameter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["diameter",] }],
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["message",] }],
    canCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["canCancel",] }],
    maxwidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["maxwidth",] }],
    faq: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["faq",] }],
    fontsize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["fontsize",] }],
    oncancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['cancel',] }]
};
HourglassComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hourglass',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./hourglass.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hourglass/hourglass.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./hourglass.component.sass */ "./src/app/hourglass/hourglass.component.sass")).default]
    })
], HourglassComponent);



/***/ }),

/***/ "./src/app/image-selector/image-selector.component.sass":
/*!**************************************************************!*\
  !*** ./src/app/image-selector/image-selector.component.sass ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlLXNlbGVjdG9yL2ltYWdlLXNlbGVjdG9yLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "./src/app/image-selector/image-selector.component.ts":
/*!************************************************************!*\
  !*** ./src/app/image-selector/image-selector.component.ts ***!
  \************************************************************/
/*! exports provided: ImageSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSelectorComponent", function() { return ImageSelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _prompt_prompt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../prompt/prompt.component */ "./src/app/prompt/prompt.component.ts");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools */ "./src/app/tools.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");







let ImageSelectorComponent = class ImageSelectorComponent {
    constructor(dialog, snackBar, api, dialogRef, data) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.api = api;
        this.dialogRef = dialogRef;
        this.data = data;
        this.icons = [];
        this.showIcons = false;
        this.showEmoji = false;
        this.pictures = [];
        this.imagesearchengine_token = "";
        this.ratio = 1;
        this.imageBase64 = null;
        this.croppedImage = null;
        if (data.emoji == null)
            data.emoji = false;
        if (data.width != null && data.width == data.height)
            data.square = true;
        data.title = data.title || "Sélectionner une image";
        if (data.square == null)
            data.square = true;
        data.maxsize = data.maxsize || 500;
        this.ratio = data.ratio || 1;
        data.width = data.width || data.maxsize;
        if (data.square)
            data.height = data.width;
        if (data.width > data.maxsize)
            data.width = data.maxsize;
        if (data.height > data.maxsize)
            data.height = data.maxsize;
        if (data.result.startsWith("http")) {
            // this.api.convert(data.result).subscribe((r:any)=>{
            //   this.imageBase64="data:image/jpg;base64,"+r.result;
            // });
        }
        if (data.result.startsWith("data:"))
            this.imageBase64 = data.result;
    }
    addIcons() {
        var root = "https://shifumix.com/avatars/";
        if (this.icons.length == 0) {
            for (var i = 1; i < 300; i++)
                this.icons.push({ photo: root + "file_emojis" + i + ".png" });
        }
        this.showIcons = true;
    }
    selectEmoji(event) {
        this.data.result = event.emoji.native;
        this.imageBase64 = null;
        this.showEmoji = false;
    }
    onSelectFile(event) {
        Object(_tools__WEBPACK_IMPORTED_MODULE_3__["selectFile"])(event, this.data.maxsize, this.data.quality, false, (res) => {
            this.imageBase64 = res;
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    rotatePhoto() {
        Object(_tools__WEBPACK_IMPORTED_MODULE_3__["rotate"])(this.imageBase64, 90, this.data.quality, (res) => {
            this.imageBase64 = res;
        });
    }
    selIcon(icon) {
        this.showIcons = false;
        this.data.result = icon.photo;
    }
    addEmoji() {
        this.dialog.open(_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_2__["PromptComponent"], { width: '250px', data: { title: "Utiliser un emoji", question: "" }
        }).afterClosed().subscribe((result) => {
            if (result) {
                this.data.result = result;
                this.imageBase64 = null;
            }
        });
    }
    ngOnInit() {
    }
    addUrl() {
        this.dialog.open(_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_2__["PromptComponent"], {
            width: '250px', data: { title: "Un mot clé ou directement une adresse internet de votre image", question: "" }
        }).afterClosed().subscribe((result) => {
            if (result) {
                if (result.startsWith("http")) {
                    this.data.result = result;
                }
                else {
                    // this.api.gettokenforimagesearchengine().subscribe((token:any)=>{
                    //   this.api.searchImage(result,10,token.access_token).subscribe((r:any)=>{
                    //     if(r==null || r.length==0)
                    //       this.snackBar.open("Désolé nous n'avons pas trouvé d'images pour le mot "+result,"",{duration:2000});
                    //     else{
                    //       if(r.length>10)r=r.slice(0,9);
                    //       this.pictures=r;
                    //       this.imageBase64=null;
                    //     }
                    //
                    //   });
                    // });
                }
            }
        });
    }
    imageCropped(event) {
        this.croppedImage = event.base64;
        this.data.result = event.base64;
    }
    imageLoaded() {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }
    selPicture(tile) {
        // this.api.convert(tile).subscribe((res:any)=>{
        //   this.imageBase64="data:image/jpg;base64,"+res.result;
        // });
    }
};
ImageSelectorComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
];
ImageSelectorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-selector',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./image-selector.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/image-selector/image-selector.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./image-selector.component.sass */ "./src/app/image-selector/image-selector.component.sass")).default]
    })
], ImageSelectorComponent);



/***/ }),

/***/ "./src/app/import/import.component.sass":
/*!**********************************************!*\
  !*** ./src/app/import/import.component.sass ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltcG9ydC9pbXBvcnQuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/import/import.component.ts":
/*!********************************************!*\
  !*** ./src/app/import/import.component.ts ***!
  \********************************************/
/*! exports provided: ImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportComponent", function() { return ImportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools */ "./src/app/tools.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let ImportComponent = class ImportComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.message = "";
    }
    ngOnInit() {
    }
    import(fileInputEvent) {
        var reader = new FileReader();
        this.message = "Chargement du fichier";
        reader.onload = () => {
            this.message = "Transfert du fichier";
            this.api._post("importer/", "", reader.result, 200).subscribe((r) => {
                this.message = "";
                Object(_tools__WEBPACK_IMPORTED_MODULE_3__["showMessage"])(this, r);
                this.router.navigate(["search"]);
            }, (err) => {
                Object(_tools__WEBPACK_IMPORTED_MODULE_3__["showError"])(this, err);
            });
        };
        reader.readAsDataURL(fileInputEvent.target.files[0]);
    }
};
ImportComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ImportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-import',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./import.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/import/import.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./import.component.sass */ "./src/app/import/import.component.sass")).default]
    })
], ImportComponent);



/***/ }),

/***/ "./src/app/login/login.component.sass":
/*!********************************************!*\
  !*** ./src/app/login/login.component.sass ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_social_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-social-button */ "./node_modules/ngx-social-button/__ivy_ngcc__/fesm2015/ngx-social-button.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools */ "./src/app/tools.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _prompt_prompt_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../prompt/prompt.component */ "./src/app/prompt/prompt.component.ts");











let LoginComponent = class LoginComponent {
    constructor(api, router, dialog, toast, _location, config, route, socialAuthService) {
        // if(this.config.device.isMobile && this.config.device.infos.brower=="Opera"){
        //   $$("L'usage des plateformes d'authentification n'est pas compatible avec Opera pour smarphone");
        //   this.showAuthentPlatform=false;
        // }
        this.api = api;
        this.router = router;
        this.dialog = dialog;
        this.toast = toast;
        this._location = _location;
        this.config = config;
        this.route = route;
        this.socialAuthService = socialAuthService;
        this.email = 'paul.dudule@gmail.com';
        this.message = "Pour enregistrer votre mail, vous pouvez utilisez Google ou Facebook, ou directement le saisir";
        this.wait_message = "";
        this.redirect = null;
        this.code = "";
        this.showAuthentPlatform = true;
        this.shareObj = {
            href: "FACEBOOK-SHARE-LINK",
            hashtag: "#FACEBOOK-SHARE-HASGTAG"
        };
        this.handle = null;
        this.messageCode = "";
    }
    ngOnInit() {
        Object(_tools__WEBPACK_IMPORTED_MODULE_2__["$$"])("Ouverture de la fenêtre de login");
        if (localStorage.getItem("email") && localStorage.getItem("token"))
            this.quit();
        var params = this.route.snapshot.queryParamMap;
        this.redirect = params.get("redirect");
        if (params.has("message"))
            this.message = params.get("message");
        if (params.has("address") || params.has("email")) {
            var addr = params.get("address");
            if (!addr)
                addr = params.get("email");
            Object(_tools__WEBPACK_IMPORTED_MODULE_2__["$$"])("Récupération de l'adresse " + addr);
            localStorage.setItem("lastEmail", addr);
            this.email_login();
        }
    }
    next() {
        Object(_tools__WEBPACK_IMPORTED_MODULE_2__["$$"])("Traitement de la rediction vers " + this.redirect);
        clearTimeout(this.handle);
        if (this.redirect == null)
            this.router.navigate(["search"]);
        else {
            if (this.redirect == "back" || this.config.user.user.email.length == 0)
                this._location.back();
            else {
                this.redirect = this.redirect.replace("{{email}}", this.config.user.user.email);
                Object(_tools__WEBPACK_IMPORTED_MODULE_2__["$$"])("!Redirection vers " + this.redirect);
                if (this.redirect.startsWith("http")) {
                    open(this.redirect, "_blank");
                }
                else {
                    if (this.redirect.indexOf("?") > -1)
                        this.router.navigateByUrl(this.redirect);
                    else
                        this.router.navigate([this.redirect]);
                }
            }
        }
    }
    quit() {
        this.router.navigate(["search"], { replaceUrl: true });
        //this._location.back();
    }
    updateUser() {
        // this.api.setuser(this.data.user).subscribe((res:any)=>{
        //   localStorage.setItem("user",res.user.address);
        //   this.dialogRef.close({user:res.user,message:"Vous êtes maintenant authentifier",code:200,force_refresh:true});
        // },(err)=>{showError(this,err)});
    }
    email_login() {
        Object(_tools__WEBPACK_IMPORTED_MODULE_2__["$$"])("Ouverture du login par email");
        this.dialog.open(_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_10__["PromptComponent"], {
            width: '90vw', data: {
                title: "Authentification par email",
                result: localStorage.getItem("lastEmail"),
                question: "Renseigner votre adresse mail",
                lbl_ok: "OK",
                lbl_cancel: "Annuler"
            }
        }).afterClosed().subscribe((email) => {
            if (email != "no") {
                localStorage.setItem("lastEmail", email);
                this.email = email;
                Object(_tools__WEBPACK_IMPORTED_MODULE_2__["$$"])("Recherche d'un compte déjà existant a l'email=" + email);
                this.wait_message = "Recherche du compte";
                this.api.getuser(email).subscribe((result) => {
                    this.wait_message = "";
                    if (result.count > 0) {
                        this.messageCode = "Veuillez indiquer son code à 6 chiffres";
                    }
                    else {
                        this.wait_message = "Nouveau compte, création en cours";
                        this.api.register({ "email": email, "username": email }).subscribe((res) => {
                            this.wait_message = "";
                            if (res != null) {
                                this.messageCode = "Afin de vérifier que vous êtes bien le propriétaire de " + email + ", veuillez indiquer le code à 6 chiffres que vous avez reçu";
                            }
                        }, (err) => {
                            Object(_tools__WEBPACK_IMPORTED_MODULE_2__["showError"])(this, err);
                            this.wait_message = "";
                            this._location.back();
                        });
                    }
                }, (err) => {
                    Object(_tools__WEBPACK_IMPORTED_MODULE_2__["showError"])(this, err);
                    this.wait_message = "";
                });
            }
            else {
                this.wait_message = "";
                Object(_tools__WEBPACK_IMPORTED_MODULE_2__["showMessage"])(this, "Vous restez anonyme");
                this._location.back();
            }
        });
        // var message="Un lien de connexion à votre nouveau profil vous a été envoyer sur votre boite. Utilisez le pour vous reconnecter";
        // if(res.status!=200)message="Problème technique. Essayer une autre méthode d'authentification";
        // this.message=message;
        // setTimeout(()=>{
        //   this.dialogRef.close({"message":message});
        // },5000);
        //     })
        //   }
        // });
        //   var firstname=this.email.split("@")[0];
        // this.api.adduser(this.email,firstname).subscribe((res:any)=>{
        //   localStorage.setItem("code",res.code);
        //   res.message="Un lien est disponible dans votre boite "+this.email+" pour votre première connexion";
        //
        // },(error)=>{showError(this,error);});
    }
    signOut() {
        if (this.socialAuthService.isSocialLoggedIn()) {
            this.socialAuthService.signOut().then(() => {
            }).catch((err) => {
            });
        }
    }
    resend_code() {
        this.api.resend(this.email).subscribe(() => {
            Object(_tools__WEBPACK_IMPORTED_MODULE_2__["showMessage"])(this, "Votre code d'accès a été renvoyé, consultez votre mail");
        });
    }
    updateCode(event, code = null) {
        if (!code)
            code = event.target.value;
        Object(_tools__WEBPACK_IMPORTED_MODULE_2__["$$"])("Vérification du code");
        this.wait_message = "Vérification du code";
        this.api.checkCode(this.email, code).subscribe((r) => {
            this.wait_message = "";
            if (r != null) {
                this.api.token = r.token;
                localStorage.setItem("token", r.token);
                if (this.email)
                    localStorage.setItem("email", this.email);
                Object(_tools__WEBPACK_IMPORTED_MODULE_2__["showMessage"])(this, "Connexion à votre compte");
                this.messageCode = "";
                this.config.init_user(() => { this.quit(); });
            }
            else {
                this.config.raz_user();
                this.messageCode = "";
                this.quit();
            }
        }, (err) => {
            this.wait_message = "";
            this.code = "";
            Object(_tools__WEBPACK_IMPORTED_MODULE_2__["showMessage"])(this, "Code incorrect, veuillez recommencer la procédure");
        });
    }
    initUser(data, askForCode = false) {
        Object(_tools__WEBPACK_IMPORTED_MODULE_2__["$$"])("Recherche d'un compte ayant ce mail", data);
        debugger;
        this.wait_message = "Récupération de l'utilisateur";
        this.api.getuser(data.email).subscribe((result) => {
            if (result.results.length > 0) {
                let _old_user = result.results[0];
                this.wait_message = "";
                this.messageCode = "Le compte " + _old_user.email + " existe déjà, veuillez saisir votre mot de passe";
                this.email = data.email;
            }
            else {
                Object(_tools__WEBPACK_IMPORTED_MODULE_2__["$$"])("Il n'y a pas de compte à cet email");
                this.email = data.email;
                this.api.register({ "email": data.email, "username": data.last_name }).subscribe((res) => {
                    this.resend_code();
                    this.messageCode = "Veuillez saisir le code qui vous a été envoyé sur votre adresse mail";
                    this.wait_message = "";
                }, (err) => {
                    Object(_tools__WEBPACK_IMPORTED_MODULE_2__["showError"])(this, err);
                });
            }
        });
    }
    socialSignIn(socialPlatform) {
        Object(_tools__WEBPACK_IMPORTED_MODULE_2__["showMessage"])(this, "En construction");
        return;
        let socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = ngx_social_button__WEBPACK_IMPORTED_MODULE_1__["FacebookLoginProvider"].PROVIDER_TYPE;
        }
        else if (socialPlatform == "google") {
            socialPlatformProvider = ngx_social_button__WEBPACK_IMPORTED_MODULE_1__["GoogleLoginProvider"].PROVIDER_TYPE;
        }
        Object(_tools__WEBPACK_IMPORTED_MODULE_2__["$$"])("Appel de la plateforme d'authentification " + socialPlatform);
        this.wait_message = "Récupération de votre adresse mail via " + socialPlatform;
        this.socialAuthService.signIn(socialPlatformProvider).then((socialUser) => {
            this.wait_message = "";
            this.message = "";
            Object(_tools__WEBPACK_IMPORTED_MODULE_2__["$$"])("Resultat de l'authentification ", socialUser);
            this.initUser({ "email": socialUser.email, "firstname": socialUser.name.split(" ")[0], "photo": socialUser.image });
        }, (err) => {
            this.wait_message = "";
            Object(_tools__WEBPACK_IMPORTED_MODULE_2__["showError"])(this, err);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: ngx_social_button__WEBPACK_IMPORTED_MODULE_1__["SocialService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.sass */ "./src/app/login/login.component.sass")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/loginbar/loginbar.component.sass":
/*!**************************************************!*\
  !*** ./src/app/loginbar/loginbar.component.sass ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luYmFyL2xvZ2luYmFyLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "./src/app/loginbar/loginbar.component.ts":
/*!************************************************!*\
  !*** ./src/app/loginbar/loginbar.component.ts ***!
  \************************************************/
/*! exports provided: LoginbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginbarComponent", function() { return LoginbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tools */ "./src/app/tools.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _prompt_prompt_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../prompt/prompt.component */ "./src/app/prompt/prompt.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");











let LoginbarComponent = class LoginbarComponent {
    constructor(router, dialog, toast, _location, config, api) {
        this.router = router;
        this.dialog = dialog;
        this.toast = toast;
        this._location = _location;
        this.config = config;
        this.api = api;
        this.onlogout = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isLocal = false;
    }
    ngOnInit() {
        this.isLocal = !_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production;
    }
    logout() {
        this.onlogout.emit();
    }
    ngOnChanges(changes) {
    }
    help() {
        debugger;
    }
    del_user() {
        this.dialog.open(_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_9__["PromptComponent"], { data: {
                title: 'Confirmation',
                question: 'Supprimer votre compte ?',
                onlyConfirm: true,
                canEmoji: false,
                lbl_ok: 'Oui',
                lbl_cancel: 'Non'
            } }).afterClosed().subscribe((result_code) => {
            if (result_code != 'no') {
                this.api._delete("users/" + this.config.user.id + "/", "").subscribe(() => {
                    Object(_tools__WEBPACK_IMPORTED_MODULE_5__["showMessage"])(this, "Votre compte est effacé");
                    this.api.logout();
                    window.location.reload();
                });
            }
        });
    }
};
LoginbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
LoginbarComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["user",] }],
    onlogout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['logout',] }]
};
LoginbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loginbar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./loginbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loginbar/loginbar.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./loginbar.component.sass */ "./src/app/loginbar/loginbar.component.sass")).default]
    })
], LoginbarComponent);



/***/ }),

/***/ "./src/app/pow/pow.component.sass":
/*!****************************************!*\
  !*** ./src/app/pow/pow.component.sass ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvdy9wb3cuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/pow/pow.component.ts":
/*!**************************************!*\
  !*** ./src/app/pow/pow.component.ts ***!
  \**************************************/
/*! exports provided: PowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowComponent", function() { return PowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");



let PowComponent = class PowComponent {
    constructor(api) {
        this.api = api;
        this.data = [];
    }
    ngOnInit() {
        this.api.getPOW().subscribe((r) => {
            this.data = r;
        });
    }
};
PowComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
PowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pow',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pow.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pow/pow.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pow.component.sass */ "./src/app/pow/pow.component.sass")).default]
    })
], PowComponent);



/***/ }),

/***/ "./src/app/pows/pows.component.sass":
/*!******************************************!*\
  !*** ./src/app/pows/pows.component.sass ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvd3MvcG93cy5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "./src/app/pows/pows.component.ts":
/*!****************************************!*\
  !*** ./src/app/pows/pows.component.ts ***!
  \****************************************/
/*! exports provided: PowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowsComponent", function() { return PowsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools */ "./src/app/tools.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var ng_navigator_share__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-navigator-share */ "./node_modules/ng-navigator-share/__ivy_ngcc__/fesm2015/ng-navigator-share.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");









let PowsComponent = class PowsComponent {
    constructor(api, ngNavigatorShareService, _clipboardService, router, routes, config) {
        this.api = api;
        this.ngNavigatorShareService = ngNavigatorShareService;
        this._clipboardService = _clipboardService;
        this.router = router;
        this.routes = routes;
        this.config = config;
        this.pows = [];
        this.query = { value: "" };
    }
    ngOnInit() {
        if (this.routes.snapshot.queryParamMap.has("filter"))
            this.query.value = this.routes.snapshot.queryParamMap.get("filter");
        this.refresh();
    }
    open_search(name) {
        this.router.navigate(["search"], { queryParams: { filter: name } });
    }
    clearQuery() {
        this.query.value = '';
        this.refresh();
    }
    onQuery($event) {
        clearTimeout(this.handle);
        this.handle = setTimeout(() => {
            this.refresh();
        }, 1000);
    }
    refresh() {
        let param = "";
        if (this.query.value.length > 0)
            param = "search=" + this.query.value;
        this.api._get("powsdoc", param).subscribe((r) => {
            this.pows = [];
            for (let i of r.results) {
                let tmp = [];
                if (i.hasOwnProperty("works")) {
                    for (let w of i.works) {
                        while (w.indexOf("'") > -1) {
                            w = w.replace("'", "\"");
                        }
                        tmp.push(JSON.parse(w));
                    }
                }
                i.works = tmp;
                this.pows.push(i);
            }
        }, (err) => {
            Object(_tools__WEBPACK_IMPORTED_MODULE_4__["showError"])(this, err);
        });
    }
    add_experience(pow) {
        this.router.navigate(["edit"], { queryParams: { id: this.config.user.profil, add: pow.id, title: pow.title } });
    }
    share(pow) {
        let public_url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].domain_appli + "/pows?filter=" + pow.title;
        Object(_tools__WEBPACK_IMPORTED_MODULE_4__["showMessage"])(this, "Lien du profil disponible dans le presse-papier");
        this.ngNavigatorShareService.share({
            title: pow.title,
            text: "Retrouver les films de la femis",
            url: public_url
        })
            .then((response) => { console.log(response); }, () => {
            this._clipboardService.copyFromContent(public_url);
        })
            .catch((error) => {
            this._clipboardService.copyFromContent(public_url);
        });
    }
    get_pow(pow) {
        let index = this.pows.indexOf(pow);
        if (!this.pows[index].hasOwnProperty("links")) {
            this.api.getPOW(pow.id).subscribe((r) => {
                let rc = [];
                for (let w of r.works) {
                    let json_str = w.replace(/\'/gi, "\"").replace("\xa0", "");
                    ;
                    try {
                        rc.push(JSON.parse(json_str));
                    }
                    catch (e) { }
                }
                r.works = rc;
                r.expanded = true;
                this.pows[index] = r;
            });
        }
    }
};
PowsComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: ng_navigator_share__WEBPACK_IMPORTED_MODULE_6__["NgNavigatorShareService"] },
    { type: ngx_clipboard__WEBPACK_IMPORTED_MODULE_7__["ClipboardService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] }
];
PowsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pows',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pows.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pows/pows.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pows.component.sass */ "./src/app/pows/pows.component.sass")).default]
    })
], PowsComponent);



/***/ }),

/***/ "./src/app/profil/profil.component.sass":
/*!**********************************************!*\
  !*** ./src/app/profil/profil.component.sass ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbC9wcm9maWwuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/profil/profil.component.ts":
/*!********************************************!*\
  !*** ./src/app/profil/profil.component.ts ***!
  \********************************************/
/*! exports provided: ProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilComponent", function() { return ProfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools */ "./src/app/tools.ts");
/* harmony import */ var ng_navigator_share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-navigator-share */ "./node_modules/ng-navigator-share/__ivy_ngcc__/fesm2015/ng-navigator-share.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");








let ProfilComponent = class ProfilComponent {
    constructor(toast, router, config, ngNavigatorShareService, _clipboardService) {
        this.toast = toast;
        this.router = router;
        this.config = config;
        this.ngNavigatorShareService = ngNavigatorShareService;
        this._clipboardService = _clipboardService;
        this.profil = {};
        this.level = 1;
        this.pows = 1;
        this.showAction = true;
        this.writeAccess = false;
        this.backgroundColor = "x404040";
        this.width = "300px";
    }
    ngOnInit() {
    }
    share(profil) {
        Object(_tools__WEBPACK_IMPORTED_MODULE_2__["showMessage"])(this, "Lien du profil disponible dans le presse-papier");
        this.ngNavigatorShareService.share({
            title: profil.firstname + " " + profil.lastname,
            text: "Profil de l'annuaire de la FEMIS",
            url: profil.public_url
        })
            .then((response) => { console.log(response); }, () => {
            this._clipboardService.copyFromContent(profil.public_url);
        })
            .catch((error) => {
            this._clipboardService.copyFromContent(profil.public_url);
        });
    }
    openWebSite(url) {
        open(url, "_blank");
    }
    openWork(profil) {
        this.router.navigate(['works'], { queryParams: { id: profil.id } });
    }
    editProfil(profil) {
        this.router.navigate(['edit'], { queryParams: { id: profil.id } });
    }
    ngOnChanges(changes) {
    }
    write(profil) {
        this.router.navigate(["write"], { queryParams: { id: profil.id } });
    }
};
ProfilComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"] },
    { type: ng_navigator_share__WEBPACK_IMPORTED_MODULE_3__["NgNavigatorShareService"] },
    { type: ngx_clipboard__WEBPACK_IMPORTED_MODULE_4__["ClipboardService"] }
];
ProfilComponent.propDecorators = {
    profil: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["profil",] }],
    level: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["level",] }],
    pows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["pows",] }],
    showAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["showAction",] }],
    writeAccess: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["writeAccess",] }],
    backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["backgroundColor",] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["width",] }]
};
ProfilComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profil',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profil.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profil/profil.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profil.component.sass */ "./src/app/profil/profil.component.sass")).default]
    })
], ProfilComponent);



/***/ }),

/***/ "./src/app/profiles/profiles.component.sass":
/*!**************************************************!*\
  !*** ./src/app/profiles/profiles.component.sass ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGVzL3Byb2ZpbGVzLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "./src/app/profiles/profiles.component.ts":
/*!************************************************!*\
  !*** ./src/app/profiles/profiles.component.ts ***!
  \************************************************/
/*! exports provided: ProfilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesComponent", function() { return ProfilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools */ "./src/app/tools.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








let ProfilesComponent = class ProfilesComponent {
    constructor(api, toast, _location, config, router) {
        this.api = api;
        this.toast = toast;
        this._location = _location;
        this.config = config;
        this.router = router;
        this.showPerm = false;
    }
    ngOnInit() {
        if (Object(_tools__WEBPACK_IMPORTED_MODULE_4__["checkLogin"])(this)) {
            this.api.getyaml("", "perms").subscribe((r) => {
                this.perms = r.perms;
            });
        }
    }
    readPerm(perm, sep = ",") {
        for (let p of this.perms) {
            let rc = "";
            if (p.tag == perm)
                rc = p.description;
            if (rc.length == 0 && p.tag == perm.replace("r_", ""))
                rc = p.description;
            if (rc.length == 0 && p.tag == perm.replace("w_", ""))
                rc = p.description + " en modification";
            if (rc.length > 0)
                return rc + sep;
        }
        return "";
    }
    detailPerm(perm) {
        if (!perm)
            return "";
        let rc = "";
        for (let it of perm.split(" ")) {
            rc = rc + this.readPerm(it) + " ";
        }
        return rc;
    }
    sel_profil(p) {
        this.config.user.perm = p.perm;
        this.api.setuser(this.config.user).subscribe(() => {
            Object(_tools__WEBPACK_IMPORTED_MODULE_4__["showMessage"])(this, "Profil modifié");
            this._location.back();
        });
    }
};
ProfilesComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ProfilesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profiles',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profiles.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/profiles.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profiles.component.sass */ "./src/app/profiles/profiles.component.sass")).default]
    })
], ProfilesComponent);



/***/ }),

/***/ "./src/app/prompt/prompt.component.sass":
/*!**********************************************!*\
  !*** ./src/app/prompt/prompt.component.sass ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb21wdC9wcm9tcHQuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/prompt/prompt.component.ts":
/*!********************************************!*\
  !*** ./src/app/prompt/prompt.component.ts ***!
  \********************************************/
/*! exports provided: PromptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromptComponent", function() { return PromptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");



let PromptComponent = class PromptComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.showEmoji = false;
        this._type = "text";
        if (data.hasOwnProperty("type"))
            this._type = data.type;
    }
    onNoClick() {
        this.dialogRef.close(null);
    }
    selectEmoji(event) {
        this.data.result = this.data.result + event.emoji.native;
        this.showEmoji = false;
    }
    onEnter(evt) {
        if (evt.keyCode == 13)
            this.dialogRef.close(this.data.result);
    }
};
PromptComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
PromptComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prompt',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./prompt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/prompt/prompt.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./prompt.component.sass */ "./src/app/prompt/prompt.component.sass")).default]
    })
], PromptComponent);



/***/ }),

/***/ "./src/app/public/public.component.sass":
/*!**********************************************!*\
  !*** ./src/app/public/public.component.sass ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9wdWJsaWMuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/public/public.component.ts":
/*!********************************************!*\
  !*** ./src/app/public/public.component.ts ***!
  \********************************************/
/*! exports provided: PublicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicComponent", function() { return PublicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");




let PublicComponent = class PublicComponent {
    constructor(router, route, api) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.works = [];
    }
    ngOnInit() {
        let id = this.route.snapshot.queryParamMap.get("id");
        if (id) {
            this.api._get("profils/" + id + "/").subscribe((p) => {
                this.profil = p;
                this.works = [];
                for (let w of p.works) {
                    for (var i = 0; i < 100; i++)
                        w = w.replace("'", "\"");
                    this.works.push(JSON.parse(w));
                }
                debugger;
            });
        }
        else {
            this.router.navigate(["search"]);
        }
    }
};
PublicComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
PublicComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-public',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./public.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/public.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./public.component.sass */ "./src/app/public/public.component.sass")).default]
    })
], PublicComponent);



/***/ }),

/***/ "./src/app/safe.pipe.ts":
/*!******************************!*\
  !*** ./src/app/safe.pipe.ts ***!
  \******************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SafePipe = class SafePipe {
    transform(value, ...args) {
        return null;
    }
};
SafePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safe'
    })
], SafePipe);



/***/ }),

/***/ "./src/app/search/search.component.sass":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.sass ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools */ "./src/app/tools.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");








let SearchComponent = class SearchComponent {
    constructor(api, toast, routes, router, config) {
        this.api = api;
        this.toast = toast;
        this.routes = routes;
        this.router = router;
        this.config = config;
        this.profils = [];
        this.query = { value: "" };
        this.message = "";
        this.perm = "";
        this.dtLastSearch = 0;
        this.handle = null;
        this.searchInTitle = false;
    }
    ngOnInit() {
        if (this.query.value == "")
            this.query.value = this.routes.snapshot.queryParamMap.get("filter") || this.routes.snapshot.queryParamMap.get("query") || "";
        this.refresh();
    }
    translate(text) {
        let dict = {
            "nom": "lastname",
            "prenom": "firstname",
            "prénom": "firstname",
            "ville": "town",
            "code postal": "cp",
            "film": "works__title",
            "promotion": "promo",
            "titre": "works__title",
            "job": "works__job"
        };
        for (let k in dict) {
            text = text.replace(k + ":", dict[k] + ":");
        }
        return text;
    }
    refresh() {
        if (this.api.token)
            this.perm = "mail";
        else
            this.perm = "";
        if (this.query.value.length > 3 || this.query.value.length == 0) {
            let param = "/";
            let prefixe = "";
            let q = this.translate(this.query.value);
            if (this.searchInTitle)
                prefixe = "works__title:";
            if (q.length > 0)
                param = "search=" + prefixe + q;
            this.message = "Chargement des profils";
            this.api._get("profilsdoc", param).subscribe((r) => {
                this.message = "";
                this.profils = [];
                for (let item of r.results) {
                    item.filter_tag = Object(_tools__WEBPACK_IMPORTED_MODULE_3__["normaliser"])("nom:" + item.lastname + " pre:" + item.firstname + " dep:" + item.department + " promo:" + item.degree_year + " cp:" + item.cp);
                    for (let _work of item.works) {
                        item.filter_tag = Object(_tools__WEBPACK_IMPORTED_MODULE_3__["normaliser"])(item.filter_tag + "titre:" + _work.title + " ");
                    }
                    this.profils.push(item);
                }
                if (this.profils.length == 0) {
                    if (q.length == 0) {
                        Object(_tools__WEBPACK_IMPORTED_MODULE_3__["$$"])("La base des profils est vide, on propose l'importation");
                        this.router.navigate(["import"]);
                    }
                }
            }, (err) => {
                Object(_tools__WEBPACK_IMPORTED_MODULE_3__["showError"])(this, err);
            });
        }
    }
    export_result() {
        let param = "";
        if (this.query.value.length > 0)
            param = "search=" + this.query.value;
        let url = Object(_tools__WEBPACK_IMPORTED_MODULE_3__["api"])("profilsdoc/", param, false, "json");
        open(url, "_blank", "download");
    }
    openStats() {
        //router.navigate(['stats'])
        open(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].domain_server + "/graphql", "stats");
    }
    onQuery($event) {
        clearTimeout(this.handle);
        this.handle = setTimeout(() => {
            this.refresh();
        }, 1000);
    }
    clearQuery() {
        this.query.value = '';
        this.refresh();
    }
};
SearchComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] }
];
SearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search.component.sass */ "./src/app/search/search.component.sass")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/splash/splash.component.sass":
/*!**********************************************!*\
  !*** ./src/app/splash/splash.component.sass ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwbGFzaC9zcGxhc2guY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/splash/splash.component.ts":
/*!********************************************!*\
  !*** ./src/app/splash/splash.component.ts ***!
  \********************************************/
/*! exports provided: SplashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashComponent", function() { return SplashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





let SplashComponent = class SplashComponent {
    constructor(config, router) {
        this.config = config;
        this.router = router;
    }
    ngOnInit() {
        this.version = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].appVersion;
        setTimeout(() => {
            this.router.navigate(["search"]);
        }, 2000);
    }
};
SplashComponent.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SplashComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-splash',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./splash.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/splash/splash.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./splash.component.sass */ "./src/app/splash/splash.component.sass")).default]
    })
], SplashComponent);



/***/ }),

/***/ "./src/app/stats/stats.component.sass":
/*!********************************************!*\
  !*** ./src/app/stats/stats.component.sass ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRzL3N0YXRzLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "./src/app/stats/stats.component.ts":
/*!******************************************!*\
  !*** ./src/app/stats/stats.component.ts ***!
  \******************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools */ "./src/app/tools.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let StatsComponent = class StatsComponent {
    constructor(_location, router, config) {
        this._location = _location;
        this.router = router;
        this.config = config;
        this.query = "";
    }
    ngOnInit() {
        Object(_tools__WEBPACK_IMPORTED_MODULE_3__["checkLogin"])(this);
    }
};
StatsComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
StatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stats',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./stats.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stats/stats.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./stats.component.sass */ "./src/app/stats/stats.component.sass")).default]
    })
], StatsComponent);



/***/ }),

/***/ "./src/app/tools.ts":
/*!**************************!*\
  !*** ./src/app/tools.ts ***!
  \**************************/
/*! exports provided: ADMIN_PASSWORD, showError, brand_text, normaliser, extract_id, range, getAuthServiceConfigs, api, direct_api, hashCode, tirage, selectFile, getTime, isToday, now, unique_id, sendToPrint, openGraph, isNull, subscribe_socket, $$, createMap, getMarkerLayer, showMessage, askForAuthent, isLocal, loginWithEmail, traitement_coupon, buildTeaser, createMarker, resizeBase64Img, getSize, cropBase64Img, evalTitle, getImageLightness, cropToSquare, compute, exportToHTML, checkConfig, checkLogin, openGraphForShop, arrayRemove, stringDistance, fixTagPage, initAvailableCameras, getDelay, normeString, clear, extractEXIF, autoRotate, rotate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADMIN_PASSWORD", function() { return ADMIN_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showError", function() { return showError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brand_text", function() { return brand_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normaliser", function() { return normaliser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extract_id", function() { return extract_id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "direct_api", function() { return direct_api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashCode", function() { return hashCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tirage", function() { return tirage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFile", function() { return selectFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTime", function() { return getTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isToday", function() { return isToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unique_id", function() { return unique_id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendToPrint", function() { return sendToPrint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openGraph", function() { return openGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return isNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe_socket", function() { return subscribe_socket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$", function() { return $$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMap", function() { return createMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkerLayer", function() { return getMarkerLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMessage", function() { return showMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "askForAuthent", function() { return askForAuthent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLocal", function() { return isLocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginWithEmail", function() { return loginWithEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traitement_coupon", function() { return traitement_coupon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildTeaser", function() { return buildTeaser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return createMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeBase64Img", function() { return resizeBase64Img; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSize", function() { return getSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cropBase64Img", function() { return cropBase64Img; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evalTitle", function() { return evalTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageLightness", function() { return getImageLightness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cropToSquare", function() { return cropToSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compute", function() { return compute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportToHTML", function() { return exportToHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkConfig", function() { return checkConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkLogin", function() { return checkLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openGraphForShop", function() { return openGraphForShop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayRemove", function() { return arrayRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringDistance", function() { return stringDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixTagPage", function() { return fixTagPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAvailableCameras", function() { return initAvailableCameras; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDelay", function() { return getDelay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normeString", function() { return normeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractEXIF", function() { return extractEXIF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoRotate", function() { return autoRotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/__ivy_ngcc__/fesm2015/ngx-webcam.js");
/* harmony import */ var ngx_social_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-social-button */ "./node_modules/ngx-social-button/__ivy_ngcc__/fesm2015/ngx-social-button.js");



const ADMIN_PASSWORD = "hh4271";
function showError(vm, err) {
    $$("!Error ", err);
    if (vm.hasOwnProperty("message"))
        vm.message = "";
    showMessage(vm, "L'application est en cours de maintenance, Merci de réessayer l'opération dans quelques instants");
}
function brand_text(text, config) {
    if (text == null || text.length == 0)
        return "";
    if (config == null || config.values == null || config.values.brands == null)
        return text;
    for (var i = 0; i < 5; i++)
        text = text.replace("REDUCSHARE", config.values.brands[config.activeBrand].appname);
    return text;
}
function normaliser(s) {
    s = s.replace("é", "e").replace("è", "e").replace("ê", "e");
    return s.toLowerCase();
}
function extract_id(url) {
    if (url.indexOf("?") > -1)
        url = url.substr(0, url.indexOf("?"));
    if (url.endsWith("/"))
        url = url.substr(0, url.length - 1);
    if (url.indexOf("/") == -1)
        return url;
    let lastPos = url.lastIndexOf("/");
    return url.substr(lastPos + 1);
}
function range(start = 0, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}
function getAuthServiceConfigs() {
    let config = new ngx_social_button__WEBPACK_IMPORTED_MODULE_2__["SocialServiceConfig"]()
        .addFacebook("1064548794002409");
    return config;
}
function api(service, param = '', encode = true, format = "json") {
    debugger;
    let rc = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].domain_server + '/api/' + service + "/?";
    if (encode) {
        param = encodeURI(param);
    }
    if (format.length > 0)
        rc = rc + "&format=" + format;
    if (param.length > 0)
        rc = rc + "&" + param;
    for (let i = 0; i < 10; i++)
        rc = rc.replace("//", "/").replace("?&", "?");
    rc = rc.replace("http:/", "http://");
    return rc;
}
function direct_api(service, param, encode = true) {
    if (encode) {
        param = encodeURI(param);
    }
    return (_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].domain_server + '/api/' + service + '?' + param);
}
function hashCode(s) {
    // tslint:disable-next-line:no-bitwise
    return s.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0);
}
function tirage(max) {
    return Math.trunc(Math.random() * max);
}
function selectFile(event, maxsize, quality, square = true, func = null) {
    if (event.target.files && event.target.files.length > 0) {
        var reader = new FileReader();
        reader.onload = () => {
            var dataURL = reader.result;
            resizeBase64Img(dataURL, maxsize, quality, (result => {
                autoRotate(result, quality, (res) => {
                    if (square) {
                        cropToSquare(res, quality, (result_square) => {
                            func(result_square);
                        });
                    }
                    else
                        func(result);
                });
            }));
        };
        reader.readAsDataURL(event.target.files[0]);
    }
}
function getTime(d) {
    var _d = new Date(d * 1000);
    return _d.getHours() + ":" + _d.getMinutes();
}
function isToday(d) {
    var _d = new Date(d * 1000);
    _d.setHours(0);
    _d.setMinutes(0);
    _d.setSeconds(0);
    //TODO: a vérifier l'histoire du GMT fuseau pour l'égalité
    var _now = new Date();
    _now.setMinutes(0);
    _now.setHours(0);
    _now.setSeconds(0);
    var diff = (_now.getTime() - _d.getTime());
    return diff == 0;
}
function now() {
    return new Date().getTime();
}
//On cherche a produire une reference au terminal de l'utilisateur
function unique_id() {
    var rc = "";
    rc = rc + navigator.userAgent; // User Agent
    rc = rc + navigator.platform; // nom du système d'exploitation
    rc = rc + navigator.product;
    rc = rc + navigator.cookieEnabled; // si les cookies sont activés ou non
    rc = rc + navigator.appName; // nom complet du navigateur
    rc = rc + navigator.appCodeName; // nom de code du navigateur
    rc = rc + screen.height; // hauteur de l'écran (en pixels)
    rc = rc + screen.width; // largeur de l'écran (en pixels)
    rc = rc + screen.colorDepth; // profondeur de couleur.
    return rc;
}
function sendToPrint(section = "print-section") {
    const printContent = document.getElementById(section);
    const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    WindowPrt.document.write(printContent.innerHTML);
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
}
/**
 * Ouverture d'un graph des transactions
 * @param tx
 */
function openGraph(tx) {
    var domain_server = "http://localhost";
    var graph_url = domain_server + ":6800/api/getgraph/" + tx + "/50/gpickle";
    var url = domain_server + ":5500/graph/b64="
        + btoa(graph_url) + "/fr?algo_comm=self&dir=public&axis=False&notext=True&metrics=True&add_property=False&autorotate=False" +
        "&limit=5000&pca=1&processors=2&title=Distribution_des_coupons_de_votre_point_de_vente";
    $$("url=", url);
    return url;
}
function isNull(x) {
    if (x == null)
        return true;
    else
        return false;
}
/**
 *
 * @param vm
 * @param event_name
 * @param func
 */
function subscribe_socket(vm, event_name, func = null) {
    if (vm.socket != null) {
        $$("Installation de la socket pour l'event " + event_name);
        vm.socket.on(event_name, (data) => {
            if (data.to == vm.config.user.address || data.to == "*") {
                $$("Réception de " + event_name + " avec data=", data);
                if (vm.toast != null && data.message != null && data.message.length > 0)
                    showMessage(vm, data.message);
                setTimeout(() => {
                    if (func == null) {
                        if (vm.refresh != null)
                            vm.refresh();
                    }
                    else {
                        func(data);
                    }
                }, 500);
            }
        });
    }
    else {
        $$("Impossibilité d'installer la socket pour " + event_name);
        debugger;
    }
}
function $$(s, obj = null) {
    if ((s != null && s.startsWith("!")) || localStorage.getItem("debug") == "1") {
        debugger;
    }
    const lg = new Date().getHours() + ':' + new Date().getMinutes() + ' -> ' + s;
    if (obj != null) {
        obj = JSON.stringify(obj);
    }
    else {
        obj = '';
    }
    console.log(lg + ' ' + obj);
    if (lg.indexOf('!!') > -1 || localStorage.getItem("debug") == "2") {
        alert(lg);
    }
}
function createMap(center, icon = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/223/man_1f468.png", zoom = 18, scale = 0.2, func_move = null, func_sel = null, func_click = null) {
    var vectorSource = new ol.source.Vector({
        features: [
            createMarker(center.lng, center.lat, icon, null, scale)
        ]
    });
    var vectorLayer = new ol.layer.Vector({ source: vectorSource });
    //var olSource=new ol.layer.Tile({source: new ol.source.OSM()});
    //Info sur la source : https://www.bingmapsportal.com/Application
    var olSource = new ol.layer.Tile({ source: new ol.source.BingMaps({
            imagerySet: 'Road',
            key: 'Am04xtfIsPy43By5-20LAeD2uxvrX9Yfe3DVunnWQoCeT3Kzks9J7-9DU63EzEaf'
        }) });
    var rc = new ol.Map({
        target: 'map',
        layers: [
            olSource,
            vectorLayer,
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([center.lng, center.lat]),
            zoom: zoom
        })
    });
    if (func_sel) {
        rc.on("dblclick", function (e) {
            rc.forEachFeatureAtPixel(e.pixel, function (feature, layer) {
                func_sel(feature);
            });
        });
    }
    if (func_click)
        rc.on("singleclick", (e) => {
            rc.forEachFeatureAtPixel(e.pixel, function (feature, layer) {
                func_click(feature);
            });
        });
    // if(func_move)
    //   rc.on('pointermove',(e)=> {
    //     rc.forEachFeatureAtPixel(e.pixel, function (feature, layer) {
    //       func_sel(feature);
    //     });
    //   });
    if (func_move != null) {
        rc.on("moveend", func_move);
    }
    return rc;
}
function getMarkerLayer(map) {
    var rc = null;
    map.getLayers().forEach((layer) => {
        if (layer instanceof ol.layer.Vector) {
            rc = layer;
        }
    });
    return rc;
}
/**
 * Affichage du message
 * @param vm
 * @param s
 * @param duration
 */
function showMessage(vm, s = "", duration = 2000, func = null, label_button = "ok") {
    if (s == null || s.length == 0)
        return false;
    s = s + "";
    $$("Affichage du message :", s);
    if (s.startsWith("#")) {
        //Affichage en mode plein écran
        s = s.substr(1);
        vm.message = s;
        if (s.length > 0)
            setTimeout(() => { vm.showMessage = true; }, 500);
    }
    else {
        //Affichage en mode toaster
        var toaster = vm.toast || vm.snackBar || vm.toaster;
        if (toaster != null) {
            if (duration == 0)
                toaster.open(s, label_button).onAction().subscribe(() => {
                    if (func != null)
                        func();
                });
            else
                toaster.open(s, "", { duration: duration });
        }
    }
}
/**
 * Demande l'authentification
 * @param vm
 * @param message
 * @param redirect
 * @param func
 */
function askForAuthent(vm, message, redirect) {
    if (vm.config.user != null && vm.config.user.user.email == "") {
        $$("L'utilisateur n'est pas encore authentifié, il est renvoyé vers la page de login");
        vm.router.navigate(["login"], { queryParams: { message: message, redirect: redirect } });
    }
    else {
        $$("Email renseigne " + vm.config.user.user.email + ", redirection vers " + redirect);
        if (redirect.startsWith("http")) {
            redirect = redirect.replace("{{email}}", vm.config.user.user.email);
            open(redirect, "_blank");
        }
        else {
            if (redirect.indexOf("?") > -1)
                vm.router.navigateByUrl(redirect);
            else
                vm.router.navigate([redirect]);
        }
    }
}
function isLocal() {
    return location.href.indexOf("localhost") > -1;
}
function loginWithEmail(vm, user, func = null, func_error = null) {
    if (!vm.dialog)
        $$("La fenetre ne dispose pas de 'dialog'");
    var _width = "250px";
    if (screen.width > 600) {
        _width = "400px";
    }
    // vm.dialog.open(LoginComponent,{width:_width,data: {facebook:true,google:true,email:true,user:user}}).afterClosed().subscribe((result:any) => {
    //   if(result) {
    //     $$("Récupération correct des coordonnées du compte ",result);
    //     if (func) func(result);
    //   }
    //    else {
    //      $$("Probleme de récupération du user");
    //     if(func_error)func_error();
    //   }
    // });
}
function traitement_coupon(coupons, showCoupon) {
    var rc = [];
    if (coupons == null)
        return rc;
    coupons.forEach((coupon) => {
        if (coupon._id == showCoupon)
            coupon.visible = true;
        coupon["visible"] = false;
        coupon["message"] = "Je recommande cette promotion. " + buildTeaser(coupon, coupon.shopname);
        rc.push(coupon);
    });
    return rc;
}
/**
 * Mise en forme du teaser de la promotion
 * @param c
 * @param lieu
 * @param withCondition indique si l'on doit ou pas ajouter les conditions
 *
 */
function buildTeaser(coupon, lieu, withCondition = false) {
    var rc = coupon.label;
    var prefixe = "à";
    if (lieu == null)
        lieu = "";
    if (lieu.toLowerCase().startsWith("chez"))
        prefixe = "";
    if (lieu.toLowerCase().startsWith("au ") || lieu.toLowerCase().startsWith("à ") || lieu.toLowerCase().startsWith("a "))
        prefixe = "";
    rc = rc + " " + prefixe + " '" + lieu + "'";
    var pluriel = "s";
    var firstWord = coupon.unity.split(" ")[0];
    if (firstWord.endsWith("x") || firstWord.endsWith("%") || firstWord.endsWith("s"))
        pluriel = "";
    if (coupon.max <= 1)
        pluriel = "";
    if (coupon.max > 0) {
        if (!rc.toLowerCase().startsWith("gagne"))
            rc = rc + ". Gagnez";
        rc = rc + ", jusqu'a " + coupon.max + " " + coupon.unity.replace(firstWord, firstWord + pluriel) + " (" + coupon.symbol + ")";
    }
    if (withCondition) {
        var prefixe_conditions = "pour ";
        if (coupon.conditions.toLowerCase().startsWith("pour") || coupon.conditions.toLowerCase().startsWith("sur"))
            prefixe_conditions = "";
        rc = rc + ", " + prefixe_conditions + coupon.conditions;
    }
    for (var i = 0; i < 10; i++)
        rc = rc.replace("..", ".").replace("!.", "!").replace("  ", " ");
    return rc;
}
function createMarker(lon, lat, icon, coupon = null, scale = 0.2) {
    if (!icon)
        icon = "";
    var iconStyle = new ol.style.Style({ image: new ol.style.Circle({ radius: 15, fill: new ol.style.Fill({ color: 'white' }) }) });
    if (!icon.startsWith("data") && !icon.startsWith("http") && !icon.startsWith("./")) {
        //On a un emoji
        iconStyle = new ol.style.Style({
            text: new ol.style.Text(({
                anchor: [0.6, 1.0],
                text: icon,
                scale: 3,
                textAlign: "center"
            }))
        });
    }
    else {
        //On a une image
        iconStyle = new ol.style.Style({
            image: new ol.style.Icon(({
                anchor: [0.6, 1.0],
                scale: scale,
                anchorXUnits: 'fraction',
                anchorYUnits: 'pixels',
                src: icon,
                opacity: 1.0,
            })),
        });
    }
    if (coupon != null) {
        iconStyle.setText(new ol.style.Text({
            text: coupon.symbol,
            textAlign: "center",
            font: "22px sans-serif"
        }));
    }
    var marker = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat])),
    });
    marker.coupon = coupon;
    marker.setStyle(iconStyle);
    return marker;
}
/**
 *
 * @param base64
 * @param maxsize
 * @param quality
 * @param func
 */
function resizeBase64Img(base64, maxsize, quality, func) {
    if (base64 == null || base64 == "") {
        $$("Probleme d'image vide");
        func();
    }
    var canvas = document.createElement("canvas");
    var img = new Image();
    img.onload = function () {
        var ratio = 1;
        if (maxsize != null)
            ratio = maxsize / Math.max(img.width, img.height);
        if (ratio <= 1) {
            canvas.width = img.width * ratio;
            canvas.height = img.height * ratio;
            var context = canvas.getContext("2d");
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
            var rc = canvas.toDataURL("image/jpeg", quality);
        }
        else
            rc = base64;
        func(rc);
    };
    img.src = base64;
}
/**
 *
 */
// export function getAuthServiceConfigs() {
//   let config = new SocialServiceConfig()
//     .addFacebook("1746089735526674")
//     .addGoogle("1075601969790-d4dujm30k9lebicc1k2uudacbijj84of.apps.googleusercontent.com")
//     .addLinkedIn("86cnm1fo8cffax")
//   return config;
// }
/**
 *
 * @param base64
 * @param func
 */
function getSize(base64, func) {
    var img = new Image();
    img.src = base64;
    img.onload = function () {
        func(img.width, img.height);
    };
}
/**
 *
 * @param base64
 * @param x
 * @param y
 * @param width
 * @param height
 * @param quality
 * @param func
 * @param func_error
 */
function cropBase64Img(base64, x, y, width, height, quality = 1, func, func_error) {
    try {
        var canvas = document.createElement("canvas");
        var img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = function () {
            canvas.width = width;
            canvas.height = height;
            var context = canvas.getContext("2d");
            context.drawImage(img, x, y, width, height, 0, 0, width, height);
            var rc = canvas.toDataURL("image/jpeg", quality);
            func(rc);
        };
        img.src = base64;
    }
    catch (e) {
        if (func_error != null)
            func_error(e);
    }
}
/**
 * Permet de calculer le titre du coupon par défaut
 * @param coupon
 */
function evalTitle(coupon) {
    var s = coupon.label;
    if (s.length > 30)
        s = s.substr(0, 30) + "...";
    if (coupon.max > 0)
        s = s + " - Jusqu'a " + coupon.max + coupon.symbol;
    return s;
}
/**
 * Retourne la blancheur de l'image permettant de choisir la couleur du texte
 * @param imageSrc
 * @param callback
 */
function getImageLightness(imageSrc, callback) {
    var img = document.createElement("img");
    img.src = imageSrc;
    img.style.display = "none";
    document.body.appendChild(img);
    var colorSum = 0;
    img.onload = () => {
        // create canvas
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        img.setAttribute("crossOrigin", "");
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        try {
            var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            var data = imageData.data;
            var r, g, b, avg;
            for (var x = 0, len = data.length; x < len; x += 4) {
                r = data[x];
                g = data[x + 1];
                b = data[x + 2];
                avg = Math.floor((r + g + b) / 3);
                colorSum += avg;
            }
            var brightness = Math.floor(colorSum / (img.width * img.height));
            callback(brightness);
        }
        catch (e) {
            callback(0);
        }
    };
}
function cropToSquare(base64, quality = 1, func) {
    var img = new Image();
    img.onload = function () {
        var i = this;
        var l = Math.min(i.width, i.height);
        var x = (i.width - l) / 2;
        var y = (i.height - l) / 2;
        cropBase64Img(base64, x, y, l, l, quality, func, null);
    };
    img.src = base64;
}
function compute(coupon) {
    coupon["conditions"] = coupon["conditions"] || "";
    if (coupon.visual == null)
        coupon.visual = coupon.picture;
    if (coupon.label == "")
        coupon.label = "Super promotion";
    if (coupon.conditions == "")
        coupon.conditions = "sur simple présentation du coupon REDUCSHARE";
    if (!coupon.conditions.startsWith("pour ") && !coupon.conditions.startsWith("sur "))
        coupon.conditions = "pour " + coupon.conditions;
    coupon.conditions = coupon.conditions.replace("offre valable pour", "").replace("valable pour", "");
    coupon.dtStart = new Date().getTime();
    if (coupon.duration_jours == null)
        coupon.duration_jours = 0;
    if (coupon.duration_hours == null)
        coupon.duration_hours = 0;
    coupon.durationInSec = coupon.duration_jours * 24 * 3600 + coupon.duration_hours * 3600;
    coupon.delay = 0;
    coupon.share_bonus = Number(coupon.share_bonus);
    coupon.pay_bonus = Number(coupon.pay_bonus);
    coupon.direct_bonus = Number(coupon.direct_bonus);
    coupon.final_bonus = Number(coupon.final_bonus);
    coupon.max = Number(coupon.max);
    coupon.stock = Number(coupon.stock);
    if (coupon.ink_color == null)
        coupon.ink_color = "white";
    if (coupon.nb_partage > 0)
        coupon.share_bonus = 1 / coupon.nb_partage;
    else
        coupon.share_bonus = 0;
    //if(coupon.pluriel && coupon.unity.endsWith("s"))coupon.unity=coupon.unity.substr(0,coupon.unity.length-1);
    coupon.unity = coupon.unity.toLowerCase();
    return coupon;
}
function exportToHTML(src, coupon, func, color = "darkred") {
    var code = "";
    var fields = [];
    for (let word of src.split(" ")) {
        var field = word.replace("#", "").replace("@", "");
        if (word.startsWith("#")) {
            fields.push(field);
            field = field.split("=")[0];
            code = code + "<span id='id_" + field + "' style='color:" + color + ";cursor: pointer;font-weight: bold;'>" + coupon[field] + "</span> ";
        }
        if (word.startsWith("@"))
            code = code + coupon[field] + " ";
        if (!word.startsWith("@") && !word.startsWith("#"))
            code = code + word + " ";
    }
    setTimeout(() => { func(fields); }, 10);
    return normeString(code);
}
function checkConfig(vm) {
    if (vm.config == null || vm.config.user == null) {
        if (vm.router != null)
            vm.router.navigate(["home"]);
        else {
            $$("Tentative de retour à la page principale");
            window.location.reload();
        }
    }
}
function checkLogin(vm, params = null, router = null) {
    if (vm.config.user == null || vm.config.user.user == null || vm.config.user.user.email == "") {
        if (router == null)
            router = vm.router;
        router.navigate(['search'], { queryParams: params });
        return false;
    }
    else {
        return true;
    }
}
function openGraphForShop(idshop, _type = "coupon", domain_server = "https://server.f80.fr") {
    var graph_url = domain_server + ":5500/api/getgraph/" + idshop + "/hh4271/gpickle/" + _type;
    var url = domain_server + ":5000/graph/b64="
        + btoa(graph_url) + "/fr?algo_comm=self&dir=public&axis=False&notext=True&metrics=True&add_property=False&autorotate=False" +
        "&limit=5000&pca=1&processors=2&title=Distribution_des_coupons_de_votre_point_de_vente";
    $$("url=", url);
    return url;
}
function arrayRemove(arr, value) {
    return arr.filter((ele) => {
        return ele != value;
    });
}
function stringDistance(a, b) {
    const an = a ? a.length : 0;
    const bn = b ? b.length : 0;
    if (an === 0) {
        return bn;
    }
    if (bn === 0) {
        return an;
    }
    const matrix = new Array(bn + 1);
    for (let i = 0; i <= bn; ++i) {
        let row = matrix[i] = new Array(an + 1);
        row[0] = i;
    }
    const firstRow = matrix[0];
    for (let j = 1; j <= an; ++j) {
        firstRow[j] = j;
    }
    for (let i = 1; i <= bn; ++i) {
        for (let j = 1; j <= an; ++j) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            }
            else {
                matrix[i][j] = Math.min(matrix[i - 1][j - 1], // substitution
                matrix[i][j - 1], // insertion
                matrix[i - 1][j] // deletion
                ) + 1;
            }
        }
    }
    return matrix[bn][an];
}
function fixTagPage(meta, coupon) {
    meta.removeTag('name = "og:url"');
    meta.removeTag('name = "og:type"');
    meta.removeTag('name = "og:title"');
    meta.removeTag('name = "og:description"');
    meta.removeTag('name = "og:image"');
    meta.addTags([
        { name: "og:url", content: coupon.url },
        { name: "og:type", content: "website" },
        { name: "og:locale", content: "fr_FR" },
        { name: "og:title", content: coupon.label },
        { name: "og:description", content: "Ouvrir pour profiter vous aussi de la promotion" },
        { name: "og:image", content: coupon.picture }
    ], true);
}
function initAvailableCameras(func) {
    ngx_webcam__WEBPACK_IMPORTED_MODULE_1__["WebcamUtil"].getAvailableVideoInputs()
        .then((mediaDevices) => {
        if (mediaDevices == null)
            func(0);
        else
            func(mediaDevices.length);
    });
}
//
// export function openGeneral(item, domain)  {
//   return new Promise((resolve, reject) => {
//       const url = environment.root_api + '/api/connectTo?service=' + item + '&domain=' + domain;
//       const hwnd: any = window.open(url, 'Login', 'menubar=0,status=0,height=600,titlebar=0,width=400');
//       window.addEventListener('message', (event: any) => {
//         clearInterval(hTimer);
//         resolve(event.data);
//       }, false);
//
//       const hTimer = setInterval(() => {
//         if (hwnd != null) {
//           if (hwnd.location.href != null && hwnd.location.href.indexOf('email') > -1) {
//             const pos = hwnd.location.href.indexOf('email=');
//             const email = hwnd.location.href.substr(pos + 6, hwnd.location.href.indexOf('&', pos) - pos - 6);
//             const password = hwnd.location.href.substr(hwnd.location.href.indexOf('&', pos) + 10);
//             hwnd.close();
//             clearInterval(hTimer);
//             resolve({email, password});
//           }
//         }
//       }, 1000);
//
//       // hwnd.addEventListener("unload",(event)=>{
//       //   var obj={email:localStorage.getItem("email"),password:localStorage.getItem("password")};
//       // })
//   });
// }
function getDelay(dtStart, lang = 'en', label_day = 'jours', serverNow = null) {
    if (dtStart == undefined) {
        return '';
    }
    if (serverNow == null) {
        serverNow = new Date().getTime();
    }
    const delay = Math.abs(dtStart - serverNow);
    if (delay > 24 * 3600 * 1000) {
        const nbJours = Math.trunc(delay / (24 * 3600 * 1000));
        return nbJours + ' ' + label_day;
    }
    if (lang == undefined) {
        lang = 'fr';
    }
    let affichage = new Date(delay).toUTCString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
    if (affichage.indexOf('00:') == 0) {
        affichage = affichage.split(':')[1] + ':' + affichage.split(':')[2];
    }
    else {
        affichage = affichage.split(':')[0] + 'h' + affichage.split(':')[1];
    }
    return affichage;
}
function normeString(s) {
    if (s == null)
        return "";
    s = s.replace("à chez", "chez");
    s = s.replace("pour sur", "sur");
    s = s.replace("pour pour", "pour");
    return s;
}
function clear(elt, xpath) {
    const doc = elt.contentDocument;
    const to_keep = doc.querySelector(xpath);
    to_keep.parentElement.childNodes.forEach((n) => {
        if (n != to_keep) {
            n.style.display = 'none';
        }
    });
}
function extractEXIF(src, func) {
    var image = new Image();
    image.onload = function () {
        EXIF.getData(this, function () {
            var model = EXIF.getTag(this, 'Model');
            var tags = EXIF.getAllTags(this);
            if (Object.keys(tags).length == 0) {
                tags["width"] = image.width;
                tags["height"] = image.height;
            }
            func(tags);
        });
    };
    image.src = src;
}
function autoRotate(src, quality, func) {
    //var blob=atob(src.split("base64,")[1]);
    extractEXIF(src, (data) => {
        if (data.exif != null) {
            var orientation = data.exif.get('Orientation');
            var angle = 0;
            switch (orientation) {
                case 8:
                    angle = -90;
                    break;
                case 3:
                    angle = 180;
                    break;
                case 6:
                    angle = 90;
                    break;
            }
            rotate(src, angle, quality, func);
        }
        else {
            var angle = 0;
            // if(data.width>data.height)angle=0;
            // if(data.width==data.height)angle=90;
            rotate(src, angle, quality, func);
        }
    });
    //   }else{
    //     debugger;
    //     rotate(src, -90, quality, func);
    //   }
    //
    // });
}
// export function autoRotate(src: string, quality: number, func) {
//   var image = new Image();
//   image.onload =  () => {
//     EXIF.getData(image,  function() {
//       var orientation= EXIF.getTag(this,"Orientation");
//       var angle = 0;
//       switch (orientation) {
//         case 8:
//           angle = -90;
//           break;
//         case 3:
//           angle = 180;
//           break;
//         case 6:
//           angle = 90;
//           break;
//       }
//       rotate(src, angle, quality, func);
//     });
//   };
//   image.src = src;
// }
/**
 *
 * @param src
 * @param angle
 * @param quality
 * @param func
 */
function rotate(src, angle, quality, func) {
    if (angle == 0)
        func(src);
    else {
        var img = new Image();
        img.onload = function () {
            var canvas = document.createElement('canvas');
            canvas.width = img.height;
            canvas.height = img.width;
            drawRotated(canvas, this, angle);
            var rc = canvas.toDataURL("image/jpeg", quality);
            func(rc);
        };
        img.src = src;
    }
}
function drawRotated(canvas, image, degrees) {
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(degrees * Math.PI / 180);
    ctx.drawImage(image, -image.width / 2, -image.height / 2);
    ctx.restore();
}


/***/ }),

/***/ "./src/app/trans.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/trans.pipe.ts ***!
  \*******************************/
/*! exports provided: TransPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransPipe", function() { return TransPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



let TransPipe = class TransPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, _type = "html") {
        switch (_type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error(`Invalid safe type specified: ${_type}`);
        }
    }
};
TransPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
TransPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'trans'
    })
], TransPipe);



/***/ }),

/***/ "./src/app/tuto/tuto.component.sass":
/*!******************************************!*\
  !*** ./src/app/tuto/tuto.component.sass ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R1dG8vdHV0by5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "./src/app/tuto/tuto.component.ts":
/*!****************************************!*\
  !*** ./src/app/tuto/tuto.component.ts ***!
  \****************************************/
/*! exports provided: TutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutoComponent", function() { return TutoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools */ "./src/app/tools.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _trans_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../trans.pipe */ "./src/app/trans.pipe.ts");





let TutoComponent = class TutoComponent {
    constructor(config, transPipe) {
        this.config = config;
        this.transPipe = transPipe;
        this.text = "";
        this.title = "";
        this._type = "tips";
        this.label = "";
        this.subtitle = "";
        this.position = "center";
        this.delay = 0.2;
        this.duration = 0;
        this.background = "";
        this._if = true;
        this.image = "";
        this.labelButton = "Continuez";
        this.icon = "";
        this.color = "white";
        this.force = false;
        this.faq = "";
        this._button = "";
        this.height = "auto";
        this.code = "";
    }
    refresh() {
        this.text = Object(_tools__WEBPACK_IMPORTED_MODULE_2__["brand_text"])(this.text, this.config);
        this.title = Object(_tools__WEBPACK_IMPORTED_MODULE_2__["brand_text"])(this.title, this.config);
        //if(this.config.params==null)return;
        //if(!this.config.params.tuto)this.hideTuto(false);
        if (!this.config.visibleTuto || this._type == "title" || this.force) {
            if (this._if) {
                this.config.visibleTuto = true;
                this.handle = setTimeout(() => {
                    this.hideTuto(true);
                }, 3000 + this.duration * 1000);
            }
            else {
                this.hideTuto();
            }
        }
        else
            this.hideTuto();
    }
    ngOnChanges() {
    }
    hideTuto(addHisto = false) {
        if (addHisto) {
            var s = localStorage.getItem("tuto") + "," + this.code;
            localStorage.setItem("tuto", s);
        } //Marque l'affichage
        this.text = "";
        this._if = false;
        this.config.visibleTuto = false;
        this.title = "";
        this.subtitle = "";
        clearTimeout(this.handle);
    }
    ngOnInit() {
        if (this._type == "tips" && this.image.length == 0)
            this.image = "./assets/img/tips.png";
        if (this.icon != null && this.icon.length > 0)
            this.image = "";
        if (this.text == null || this.text.length == 0)
            this.text = this.label;
        if (this.title != null && this.title.length > 0 || this.subtitle.length > 0) {
            this._type = "title";
            this.text = this.title;
        }
        if (this._type == "tips" && this._button != null && this._button.length > 0)
            this.image = "";
        //this.text=this.transPipe.transform(this.text);
        this.code = "histo" + Object(_tools__WEBPACK_IMPORTED_MODULE_2__["hashCode"])(this.text + this.subtitle);
        if (localStorage.hasOwnProperty("tuto") && localStorage.getItem("tuto").indexOf(this.code) > -1) {
            this._if = false;
        }
        else {
        }
        if (this.duration == 0)
            this.duration = (this.text.split(" ").length + this.subtitle.split(" ").length) / 2;
        this.refresh();
    }
    showText(b) {
        this._if = b;
        this.ngOnChanges();
    }
};
TutoComponent.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: _trans_pipe__WEBPACK_IMPORTED_MODULE_4__["TransPipe"] }
];
TutoComponent.propDecorators = {
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["text",] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["title",] }],
    _type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["type",] }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["label",] }],
    subtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["subtitle",] }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["position",] }],
    delay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["delay",] }],
    duration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["duration",] }],
    background: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["background",] }],
    _if: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['if',] }],
    image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['image',] }],
    labelButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['main_button',] }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['icon',] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['color',] }],
    force: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['force',] }],
    faq: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['faq',] }],
    _button: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['button',] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['height',] }]
};
TutoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tuto',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tuto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tuto/tuto.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tuto.component.sass */ "./src/app/tuto/tuto.component.sass")).default]
    })
], TutoComponent);



/***/ }),

/***/ "./src/app/work/work.component.sass":
/*!******************************************!*\
  !*** ./src/app/work/work.component.sass ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmsvd29yay5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "./src/app/work/work.component.ts":
/*!****************************************!*\
  !*** ./src/app/work/work.component.ts ***!
  \****************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let WorkComponent = class WorkComponent {
    constructor(_location, routes, api) {
        this._location = _location;
        this.routes = routes;
        this.api = api;
        this.work = {};
        this.level = 1;
        this.perm = "";
        this.showAction = true;
        this.writeAccess = false;
        this.backgroundColor = "grey";
    }
    ngOnInit() {
    }
    openInfo(pow) {
        open(pow.url, "_blank");
    }
};
WorkComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
WorkComponent.propDecorators = {
    work: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["work",] }],
    level: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["level",] }],
    perm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["perm",] }],
    showAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["showAction",] }],
    writeAccess: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["writeAccess",] }],
    backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["backgroundColor",] }]
};
WorkComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-work',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./work.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/work/work.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./work.component.sass */ "./src/app/work/work.component.sass")).default]
    })
], WorkComponent);



/***/ }),

/***/ "./src/app/works/works.component.sass":
/*!********************************************!*\
  !*** ./src/app/works/works.component.sass ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmtzL3dvcmtzLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "./src/app/works/works.component.ts":
/*!******************************************!*\
  !*** ./src/app/works/works.component.ts ***!
  \******************************************/
/*! exports provided: WorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksComponent", function() { return WorksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tools */ "./src/app/tools.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");







let WorksComponent = class WorksComponent {
    constructor(_location, toast, routes, api) {
        this._location = _location;
        this.toast = toast;
        this.routes = routes;
        this.api = api;
    }
    ngOnInit() {
        let id = this.routes.snapshot.queryParamMap.get("id");
        this.api.getworks(id).subscribe((r) => {
            if (r.results.length == 0) {
                Object(_tools__WEBPACK_IMPORTED_MODULE_5__["showMessage"])(this, "Aucune production référencée pour ce profil");
                this._location.back();
            }
            else {
                this.works = r.results;
            }
        });
    }
};
WorksComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
WorksComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-works',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./works.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/works/works.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./works.component.sass */ "./src/app/works/works.component.sass")).default]
    })
], WorksComponent);



/***/ }),

/***/ "./src/app/write/write.component.sass":
/*!********************************************!*\
  !*** ./src/app/write/write.component.sass ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dyaXRlL3dyaXRlLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "./src/app/write/write.component.ts":
/*!******************************************!*\
  !*** ./src/app/write/write.component.ts ***!
  \******************************************/
/*! exports provided: WriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteComponent", function() { return WriteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tools */ "./src/app/tools.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");








let WriteComponent = class WriteComponent {
    constructor(config, _location, toast, api, routes) {
        this.config = config;
        this._location = _location;
        this.toast = toast;
        this.api = api;
        this.routes = routes;
    }
    ngOnInit() {
        Object(_tools__WEBPACK_IMPORTED_MODULE_5__["checkLogin"])(this);
        let id = this.routes.snapshot.queryParamMap.get("id");
        this.api._get("profils/" + id + "/").subscribe((p) => {
            this.profil = p;
        });
    }
    send() {
        this.api.send(this.profil.id, this.config.user.id, this.text).subscribe(r => {
            Object(_tools__WEBPACK_IMPORTED_MODULE_5__["showMessage"])(this, "Message envoyé a " + this.profil.firstname + " " + this.profil.lastname);
            this._location.back();
        }, (err) => {
            Object(_tools__WEBPACK_IMPORTED_MODULE_5__["showError"])(this, err);
        });
    }
};
WriteComponent.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
WriteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-write',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./write.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/write/write.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./write.component.sass */ "./src/app/write/write.component.sass")).default]
    })
], WriteComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    domain_server: "http://localhost:8000",
    config_file: "config",
    domain_appli: "http://localhost:4200",
    appVersion: __webpack_require__(/*! ../../package.json */ "./package.json").version + '-dev',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hhoareau\PycharmProjects\OpenAlumni\FrontEnd\OpenAlumniClient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map