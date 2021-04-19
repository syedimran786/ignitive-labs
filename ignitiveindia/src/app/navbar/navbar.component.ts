import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private title:Title) { }

  
  public changeTitle(mytitle: string)
  {
    this.title.setTitle(mytitle);
  }

  ngOnInit(): void {
  }

}
