import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  //get all notes
  getNotes(): Observable<any>{
    return this.http.get('http://localhost:3000/api/notes')
  }
}
