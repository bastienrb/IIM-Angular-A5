import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class WeatherService {

  apiKey= 'fc0c4e1ec49d0c022df6519574a1a2ca';

  url;
  constructor(public http: Http) {
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q=';

  }


  getWeather(city, code) {
    console.log(this.url + city + ',' + code  + 'APPID=' + this.apiKey + '&lang=fr');
    return this.http.get(this.url + city + ',' + code  + '&APPID=' + this.apiKey + '&lang=fr' + '&units=metric').map( res => res.json());
  }


}
