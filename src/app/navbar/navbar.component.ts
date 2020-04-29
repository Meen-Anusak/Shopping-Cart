import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() navToggle = new EventEmitter();

  mailNoti = 10;
  Noti = 12;
  constructor() { }

  ngOnInit(): void {
  }
  onSideNavToggle(){
    this.navToggle.emit();
  }
}
