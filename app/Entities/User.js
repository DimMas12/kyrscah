"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Влад on 14.03.2017.
 */
var User = (function () {
    function User(id, name, login, pass, email, isAdmin) {
        this._id = id;
        this._name = name;
        this._login = login;
        this._pass = pass;
        this._email = email;
        this._isAdmin = isAdmin;
    }
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "login", {
        get: function () {
            return this._login;
        },
        set: function (value) {
            this._login = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "pass", {
        get: function () {
            return this._pass;
        },
        set: function (value) {
            this._pass = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "isAdmin", {
        get: function () {
            return this._isAdmin;
        },
        set: function (value) {
            this._isAdmin = value;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map