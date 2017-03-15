/**
 * Created by Влад on 14.03.2017.
 */
export class User{
    private _id:number;
    private _name:string;
    private _login:string;
    private _pass:string;
    private _email:string;
    private _isAdmin:boolean;

    constructor(id: number, name: string, login: string, pass: string, email: string, isAdmin: boolean) {
        this._id = id;
        this._name = name;
        this._login = login;
        this._pass = pass;
        this._email = email;
        this._isAdmin = isAdmin;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get login(): string {
        return this._login;
    }

    set login(value: string) {
        this._login = value;
    }

    get pass(): string {
        return this._pass;
    }

    set pass(value: string) {
        this._pass = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get isAdmin(): boolean {
        return this._isAdmin;
    }

    set isAdmin(value: boolean) {
        this._isAdmin = value;
    }
}