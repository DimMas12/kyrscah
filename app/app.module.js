"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var main_page_1 = require("./mainPage/main.page");
var photo_gallery_1 = require("./photoGallery/photo.gallery");
var app_routes_1 = require("./app.routes");
var registration_component_1 = require("./registrationComponent/registration.component");
var posts_service_1 = require("./services/posts.service");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var core_2 = require("angular2-google-maps/core");
var google_map_component_1 = require("./googleMap/google.map.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyCpW3itKX63qjTBrU_EaFpBsRu24lb5GLE'
            }), router_1.RouterModule.forRoot(app_routes_1.routes)],
        declarations: [app_component_1.AppComponent, main_page_1.MainPage, photo_gallery_1.PhotoGallery, registration_component_1.RegistrationComponent, google_map_component_1.GoogleMap],
        providers: [posts_service_1.PostsService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map