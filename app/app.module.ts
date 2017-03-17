import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser' ;
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { MainPage } from './mainPage/main.page';
import { PhotoGallery } from './photoGallery/photo.gallery';
import {routes} from './app.routes';
import {RegistrationComponent} from "./registrationComponent/registration.component";
import {PostsService} from "./services/posts.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

import { AgmCoreModule } from 'angular2-google-maps/core';
import {GoogleMap} from "./googleMap/google.map.component";


@NgModule({
    imports:[BrowserModule,FormsModule,HttpModule,AgmCoreModule.forRoot({
        apiKey: 'AIzaSyCpW3itKX63qjTBrU_EaFpBsRu24lb5GLE'
    }),RouterModule.forRoot(routes)],
    declarations:[AppComponent,MainPage,PhotoGallery,RegistrationComponent,GoogleMap],
    providers:[PostsService],
    bootstrap:[AppComponent]
})
export class AppModule{
}