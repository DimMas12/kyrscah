/**
 * Created by Влад on 17.03.2017.
 */
import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
    moduleId:module.id,
    selector: 'google-map',
    templateUrl: 'google.map.html',
    styleUrls: ['google.map.css']
})
export class GoogleMap {
    lat: number;
    lng: number;
    title:string;
    number1:string;
    number2:string;
    number3:string;
    adress:string;
    time1:string;
    timeWeekend:string;
    email:string;
    constructor(private router:Router){
        this.lat=53.896674;
        this.lng=27.500333;
        this.title="Тренажерный зал «Викинг» ждет вас";
        this.number1="376 60 52";
        this.number2="668 60 57";
        this.number3="686 60 57";
        this.adress="ул. Харьковская 86, Минск, Беларусь";
        this.time1="Пн-пт: c 7:00 до 23:00";
        this.timeWeekend="Сб-вс и праздничные дни: c 9:00 до 21:00";
        this.email="nikitin_vladislav1996@mail.ru";
    }
    clickMarker(){
        this.router.navigate(["main"]);
    }
}