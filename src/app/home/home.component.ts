import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { ServerService } from '../services/server/server.service'
import { NotesService } from '../services/noteService/notes.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private server: ServerService, private router: Router, private noteService: NotesService) { }
  
  public notes = []
  public favoriteNotes = []
  public recentNotes = []

  ngOnInit(): void {
    
    this.noteService.getNotes().subscribe((data)=>{
      this.notes = data;
    })
    this.noteService.getImportant().subscribe((data)=>{
      this.favoriteNotes = data;
    });
    this.noteService.getRecent().subscribe((data)=>{
      this.recentNotes = data
    });
  }


}
