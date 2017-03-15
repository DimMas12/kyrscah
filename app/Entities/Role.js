"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Влад on 15.03.2017.
 */
var Role = (function () {
    function Role() {
    }
    Role.prototype.setAdmin = function () {
        Role.role = "admin";
    };
    Role.prototype.setUser = function () {
        Role.role = "user";
    };
    Role.prototype.setGuest = function () {
        Role.role = "guest";
    };
    Role.prototype.isAdmin = function () {
        return Role.role == 'admin';
    };
    Role.prototype.isGuest = function () {
        return Role.role == 'guest';
    };
    Role.prototype.isUser = function () {
        return Role.role == 'user';
    };
    Role.prototype.getTitle = function () {
        return Role.title;
    };
    return Role;
}());
Role.role = "guest";
Role.title = "noname";
exports.Role = Role;
//# sourceMappingURL=Role.js.map