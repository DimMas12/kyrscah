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
 * Created by Влад on 17.03.2017.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var GoogleMap = (function () {
    function GoogleMap(router) {
        this.router = router;
        this.lat = 53.896674;
        this.lng = 27.500333;
        this.title = "Тренажерный зал «Викинг» ждет вас";
        this.number1 = "376 60 52";
        this.number2 = "668 60 57";
        this.number3 = "686 60 57";
        this.adress = "ул. Харьковская 86, Минск, Беларусь";
        this.time1 = "Пн-пт: c 7:00 до 23:00";
        this.timeWeekend = "Сб-вс и праздничные дни: c 9:00 до 21:00";
        this.email = "nikitin_vladislav1996@mail.ru";
    }
    GoogleMap.prototype.clickMarker = function () {
        this.router.navigate(["main"]);
    };
    return GoogleMap;
}());
GoogleMap = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'google-map',
        templateUrl: 'google.map.html',
        styleUrls: ['google.map.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], GoogleMap);
exports.GoogleMap = GoogleMap;
//# sourceMappingURL=google.map.component.js.map