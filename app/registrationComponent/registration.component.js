"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Влад on 14.03.2017.
 */
var core_1 = require("@angular/core");
var posts_service_1 = require("../services/posts.service");
var User_1 = require("../Entities/User");
var Role_1 = require("../Entities/Role");
var router_1 = require("@angular/router");
var RegistrationComponent = (function () {
    function RegistrationComponent(postsService, router) {
        this.postsService = postsService;
        this.router = router;
        this.isAdmin = false;
        this.id = 1;
    }
    RegistrationComponent.prototype.sendUser = function () {
        var user = new User_1.User(this.id, this.name, this.login, this.pass, this.email, this.isAdmin);
        console.log(user);
        this.postsService.sendPost(user, 'http://localhost:8080/createUser').subscribe(function (answer) {
            console.log(answer.title);
        });
        var role = new Role_1.Role();
        role.setUser();
        Role_1.Role.title = this.name;
        this.router.navigate([""]);
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "registration",
        templateUrl: "registration.component.html",
        styleUrls: ["registration.component.css"],
    }),
    __metadata("design:paramtypes", [posts_service_1.PostsService, router_1.Router])
], RegistrationComponent);
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=registration.component.js.map