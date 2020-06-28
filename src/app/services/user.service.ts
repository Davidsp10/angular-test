import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class UserService {

    public url: String;

    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }

    login(loginResource) : Observable<any> {
        let params = JSON.stringify(loginResource);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'users/login', params, { headers : headers});
    }

    dataUser(userId) : Observable<any> {
        return this._http.get(this.url+'users/'+userId);
    }

    getStats(userId) : Observable<any> {
        return this._http.get(this.url+'users/stats/'+userId);
    }

}