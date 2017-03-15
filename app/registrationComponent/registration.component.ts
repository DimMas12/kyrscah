/**
 * Created by Влад on 14.03.2017.
 */
import {Component, Output, EventEmitter} from '@angular/core';
import {PostsService} from "../services/posts.service";
import {User} from "../Entities/User";
import {Role} from "../Entities/Role";
import {Router} from "@angular/router";

@Component({
    moduleId:module.id,
    selector:"registration",
    templateUrl:"registration.component.html",
    styleUrls:["registration.component.css"]
})
export class RegistrationComponent{

    id:number;
    name:string;
    login:string;
    pass:string;
    email:string;
    isAdmin:boolean;
    constructor(private postsService:PostsService, private router:Router){
        this.isAdmin=false;
        this.id=1;
    }

    sendUser():void{
        var user:User=new User(this.id,this.name,this.login,this.pass,this.email,this.isAdmin);
        console.log(user);
        this.postsService.sendPost(user,'http://localhost:8080/createUser').subscribe(answer=>{
            console.log(answer.title);
        });
        var role:Role=new Role();
        role.setUser();
        Role.title=this.name;
        this.router.navigate([""]);
    }
}