import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {Role} from "./Entities/Role";
import {LocaleAuth} from "./Entities/LocaleAuth";

@Component({
    moduleId:module.id,
    selector:"my-app",
    templateUrl:"app.component.html",
    styleUrls:["app.component.css"]
})
export class AppComponent{
    auth:LocaleAuth;
    constructor(private router:Router){
        this.auth=new LocaleAuth();
    }

    goMainPage(){
        this.router.navigate(["main"]);
    }
    goPhotoGallery(){
        this.router.navigate(["photos"]);
    }
    goRegistration(){
        this.router.navigate(["registration"]);
    }
    goMap(){
        this.router.navigate(["map"]);
    }
    exit():void{
        this.auth.logOut();
        this.goMainPage();
    }
}