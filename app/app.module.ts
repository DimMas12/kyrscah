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


@NgModule({
    imports:[BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(routes)],
    declarations:[AppComponent,MainPage,PhotoGallery,RegistrationComponent],
    providers:[PostsService],
    bootstrap:[AppComponent]
})
export class AppModule{
}