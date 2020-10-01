import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialService
} from "ngx-social-button";

import {$$, clear, showError, showMessage} from "../tools";
import {ApiService} from "../api.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ConfigService} from "../config.service";
import {Location} from "@angular/common";
import {Component, OnInit} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PromptComponent} from "../prompt/prompt.component";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  email = 'paul.dudule@gmail.com';
  message = "Pour enregistrer votre mail, vous pouvez utilisez Google ou Facebook, ou directement le saisir";
  wait_message="";
  redirect = null;
  code="";
  showAuthentPlatform=true;

  shareObj = {
    href: "FACEBOOK-SHARE-LINK",
    hashtag: "#FACEBOOK-SHARE-HASGTAG"
  };
  handle: any = null;
  messageCode:string="";

  constructor(public api: ApiService,
              public router: Router,
              public dialog: MatDialog,
              public toast: MatSnackBar,
              public _location: Location,
              public config: ConfigService,
              public route: ActivatedRoute,
              private socialAuthService: SocialService) {
    // if(this.config.device.isMobile && this.config.device.infos.brower=="Opera"){
    //   $$("L'usage des plateformes d'authentification n'est pas compatible avec Opera pour smarphone");
    //   this.showAuthentPlatform=false;
    // }

  }


  ngOnInit() {
    $$("Ouverture de la fenêtre de login");

    if(localStorage.getItem("email") && localStorage.getItem("token"))this.quit();

    var params: ParamMap = this.route.snapshot.queryParamMap;
    this.redirect = params.get("redirect");
    if (params.has("message")) this.message = params.get("message");
    if (params.has("address") || params.has("email")) {
      var addr=params.get("address");
      if(!addr)addr=params.get("email");
      $$("Récupération de l'adresse " + addr);
      localStorage.setItem("lastEmail", addr);
      this.email_login();
    }
  }



  next() {
    $$("Traitement de la rediction vers "+this.redirect);
    clearTimeout(this.handle);
    if (this.redirect == null)
      this.router.navigate(["search"]);
    else {
      if (this.redirect == "back" || this.config.user.user.email.length==0)
        this._location.back();
      else{
        this.redirect=this.redirect.replace("{{email}}",this.config.user.user.email);
        $$("!Redirection vers "+this.redirect);
        if(this.redirect.startsWith("http")){
          open(this.redirect,"_blank");
        }
        else{
          if(this.redirect.indexOf("?")>-1)
            this.router.navigateByUrl(this.redirect);
          else
            this.router.navigate([this.redirect]);
        }
      }
    }
  }

  quit() {
    this.router.navigate(["search"],{replaceUrl:true});
    //this._location.back();
  }

  updateUser() {
    // this.api.setuser(this.data.user).subscribe((res:any)=>{
    //   localStorage.setItem("user",res.user.address);
    //   this.dialogRef.close({user:res.user,message:"Vous êtes maintenant authentifier",code:200,force_refresh:true});
    // },(err)=>{showError(this,err)});
  }

  email_login() {
    $$("Ouverture du login par email");
    this.dialog.open(PromptComponent, {
      width: '90vw', data: {
        title: "Authentification par email",
        result: localStorage.getItem("lastEmail"),
        question: "Renseigner votre adresse mail",
        lbl_ok: "OK",
        lbl_cancel: "Annuler"
      }
    }).afterClosed().subscribe((email: any) => {
      if (email!="no") {
        localStorage.setItem("lastEmail", email);
        this.email=email;
        $$("Recherche d'un compte déjà existant a l'email="+email);
        this.wait_message="Recherche du compte";
        this.api.getuser(email).subscribe((result: any) => {
          this.wait_message="";
          if (result.count>0) {
            this.messageCode="Veuillez indiquer son code à 6 chiffres";
          } else {
            this.wait_message="Nouveau compte, création en cours";
            this.api.register({"email": email,"username":email}).subscribe((res: any) => {
             this.wait_message="";
              if (res != null) {
                this.messageCode="Afin de vérifier que vous êtes bien le propriétaire de " + email + ", veuillez indiquer le code à 6 chiffres que vous avez reçu";
              }
            },(err)=>{
              showError(this,err);
              this.wait_message="";
              this._location.back();
            });
          }
        }, (err:any) => {
          showError(this,err);
          this.wait_message="";
        });
      } else {
        this.wait_message="";
        showMessage(this,"Vous restez anonyme");
        this._location.back();
      }
    })

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

  signOut(){
    if(this.socialAuthService.isSocialLoggedIn()){
      this.socialAuthService.signOut().then(()=>{

      }).catch((err)=>{

      });
    }
  }

  resend_code(){
    this.api.resend(this.email).subscribe(()=>{
      showMessage(this,"Votre code d'accès a été renvoyé, consultez votre mail");
    });
  }



  updateCode(event,code=null){
    if(!code)code=event.target.value;

    $$("Vérification du code");
    this.wait_message="Vérification du code";
    this.api.checkCode(this.email, code).subscribe((r: any) => {
      this.wait_message="";
      if (r != null) {
          this.api.token=r.token;
          localStorage.setItem("token",r.token);
          if(this.email)localStorage.setItem("email",this.email);
          showMessage(this, "Connexion à votre compte");
          this.messageCode="";
          this.config.init_user(()=>{this.quit();});
      } else {
        this.config.raz_user();
        this.messageCode="";
        this.quit();
      }
    }, (err) => {
      this.wait_message="";
      this.code="";
      showMessage(this, "Code incorrect, veuillez recommencer la procédure");
    });
  }




  initUser(data:any,askForCode=false){
    $$("Recherche d'un compte ayant ce mail",data);
    debugger
    this.wait_message="Récupération de l'utilisateur";
    this.api.getuser(data.email).subscribe((result:any)=> {
      if (result.results.length > 0) {
          let _old_user = result.results[0];
          this.wait_message = "";
          this.messageCode = "Le compte " + _old_user.email + " existe déjà, veuillez saisir votre mot de passe";
          this.email = data.email;
        } else {
          $$("Il n'y a pas de compte à cet email");
          this.email = data.email;

          this.api.register({"email": data.email,"username":data.last_name}).subscribe((res: any) => {
            this.resend_code();
            this.messageCode = "Veuillez saisir le code qui vous a été envoyé sur votre adresse mail";
            this.wait_message = "";
          },(err)=>{
            showError(this,err);
          });
        }
      }
    );
  }




  public socialSignIn(socialPlatform : string) {
    showMessage(this,"En construction");
    return;

    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_TYPE;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_TYPE;
    }

    $$("Appel de la plateforme d'authentification "+socialPlatform);
    this.wait_message="Récupération de votre adresse mail via "+socialPlatform;
    this.socialAuthService.signIn(socialPlatformProvider).then((socialUser) => {
      this.wait_message="";
      this.message="";
      $$("Resultat de l'authentification ",socialUser);
        this.initUser({"email":socialUser.email,"firstname":socialUser.name.split(" ")[0],"photo":socialUser.image});
      },
      (err)=>{
      this.wait_message="";
      showError(this,err);
    }
    );
  }
}
