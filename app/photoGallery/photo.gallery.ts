import { Component } from '@angular/core';
import {PostsService} from "../services/posts.service";
// import {Ng2Uploader} from '../../node_modules/ng2-file-uploader/src/services/ng2-uploader'
declare function startGalerea();

@Component({
    moduleId:module.id,
    selector:"photo-gallery",
    templateUrl:"photo.gallery.html",
    styleUrls:["photo.gallery.css"]
})

export class PhotoGallery{
    photos:string[]=[];
    constructor(private postsService:PostsService){
        this.init();

    }
    init(){
        this.postsService.getPhotos('getPhotos').subscribe(answer=>{
            var clone:string[]=answer;
            for(var i=0;i<clone.length;i++){
                this.photos.push('../../images/gym/'+clone[i]);
            }
        });
        startGalerea();
    }

}