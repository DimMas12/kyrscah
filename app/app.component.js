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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Role_1 = require("./Entities/Role");
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.role = new Role_1.Role();
    }
    AppComponent.prototype.goMainPage = function () {
        this.router.navigate(["main"]);
    };
    AppComponent.prototype.goPhotoGallery = function () {
        this.router.navigate(["photos"]);
    };
    AppComponent.prototype.goRegistration = function () {
        this.router.navigate(["registration"]);
    };
    AppComponent.prototype.exit = function () {
        this.role.setGuest();
        this.goMainPage();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "my-app",
        templateUrl: "app.component.html",
        styleUrls: ["app.component.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map