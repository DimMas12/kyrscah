"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_page_1 = require("./mainPage/main.page");
var photo_gallery_1 = require("./photoGallery/photo.gallery");
var registration_component_1 = require("./registrationComponent/registration.component");
exports.routes = [
    { path: "main", component: main_page_1.MainPage },
    { path: "photos", component: photo_gallery_1.PhotoGallery },
    { path: "registration", component: registration_component_1.RegistrationComponent },
    { path: "", redirectTo: "main", pathMatch: "full" }
];
//# sourceMappingURL=app.routes.js.map