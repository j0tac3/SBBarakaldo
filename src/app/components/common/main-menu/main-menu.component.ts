import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  public showSubMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  onShowSubMenu(){
    this.showSubMenu = !this.showSubMenu;
  }

}
