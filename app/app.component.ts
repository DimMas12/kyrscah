import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {Role} from "./Entities/Role";

@Component({
    moduleId:module.id,
    selector:"my-app",
    templateUrl:"app.component.html",
    styleUrls:["app.component.css"]
})
export class AppComponent{
    role:Role;

    constructor(private router:Router){
        this.role=new Role();
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
    exit():void{
        this.role.setGuest();
        this.goMainPage();
    }
}