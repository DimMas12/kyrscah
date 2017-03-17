import {User} from "./User";
/**
 * Created by Влад on 16.03.2017.
 */
export class LocaleAuth{
    localeItem:string;
    constructor(){
        this.localeItem='currentUser';
    }
    checkAuth():boolean{
        if(localStorage.getItem(this.localeItem)){
            return true;
        }
        else {
            return false;
        }
    }
    logIn(user:User):void{
        localStorage.setItem(this.localeItem,JSON.stringify(user));
    }
    logOut():void{
        localStorage.removeItem(this.localeItem);
    }
    getUser():string{
        if(this.checkAuth()) {
            console.log(localStorage.getItem(this.localeItem));
            var user: User;
            user=Object.assign(new User(0,"","","","",false), JSON.parse(localStorage.getItem(this.localeItem)));
            return user.login;
        }
    }
}