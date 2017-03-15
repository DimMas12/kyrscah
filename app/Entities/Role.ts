/**
 * Created by Влад on 15.03.2017.
 */
export class Role{
    static role:string="guest";
    static title:string="noname";
    setAdmin():void{
        Role.role="admin";
    }

    setUser():void{
        Role.role="user";
    }

    setGuest():void{
        Role.role="guest";
    }
    isAdmin():boolean{
        return Role.role=='admin';
    }
    isGuest():boolean{
        return Role.role=='guest';
    }
    isUser():boolean{
        return Role.role=='user';
    }
    getTitle():string{
        return Role.title;
    }
}