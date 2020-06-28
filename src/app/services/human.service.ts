import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class HumanService {

    public url: String;

    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }

    sendHuman(Humanresource) : Observable<any> {
        let params = JSON.stringify(Humanresource);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'humans', params, { headers : headers});
    }

}