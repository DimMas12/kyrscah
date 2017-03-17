"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
/**
 * Created by Влад on 16.03.2017.
 */
var LocaleAuth = (function () {
    function LocaleAuth() {
        this.localeItem = 'currentUser';
    }
    LocaleAuth.prototype.checkAuth = function () {
        if (localStorage.getItem(this.localeItem)) {
            return true;
        }
        else {
            return false;
        }
    };
    LocaleAuth.prototype.logIn = function (user) {
        localStorage.setItem(this.localeItem, JSON.stringify(user));
    };
    LocaleAuth.prototype.logOut = function () {
        localStorage.removeItem(this.localeItem);
    };
    LocaleAuth.prototype.getUser = function () {
        if (this.checkAuth()) {
            console.log(localStorage.getItem(this.localeItem));
            var user;
            user = Object.assign(new User_1.User(0, "", "", "", "", false), JSON.parse(localStorage.getItem(this.localeItem)));
            return user.login;
        }
    };
    return LocaleAuth;
}());
exports.LocaleAuth = LocaleAuth;
//# sourceMappingURL=LocaleAuth.js.map