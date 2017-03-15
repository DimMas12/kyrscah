import { Component } from '@angular/core';


@Component({
    moduleId:module.id,
    selector:"photo-gallery",
    templateUrl:"photo.gallery.html",
    styleUrls:["photo.gallery.css"]
})
export class PhotoGallery{
    photos:string[]=[];
    constructor(){
        for(var i=0;i<9;i++){
            this.photos.push('../../images/gym/'+(i+1)+'.jpg');
        }
        startGalerea();
    }

}