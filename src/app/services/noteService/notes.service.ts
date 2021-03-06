import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }
  
  getNotes(): Observable<any> {
    return this.http.get('http://localhost:3000/api/notes')
  }

  getRecent(): Observable<any> {
    return this.http.get('http://localhost:3000/api/notes/recent')
  }

  getImportant(): Observable<any> {
    return this.http.get('http://localhost:3000/api/notes/important')
  }

}
