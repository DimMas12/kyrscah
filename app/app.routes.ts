/**
 * Created by Влад on 14.03.2017.
 */
import {Routes} from '@angular/router';
import {MainPage} from './mainPage/main.page';
import {PhotoGallery} from './photoGallery/photo.gallery';
import {RegistrationComponent} from "./registrationComponent/registration.component";

export const routes:Routes=[
    {path:"main",component:MainPage},
    {path:"photos",component:PhotoGallery},
    {path:"registration",component:RegistrationComponent},
    {path:"", redirectTo:"main",pathMatch:"full"}
]