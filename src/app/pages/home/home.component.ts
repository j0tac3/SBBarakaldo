import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/Models/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public users! : UserModel[];
  constructor( private userService : UserService) { }

  ngOnInit(): void {
    this.getUsersFromDB();
  }

  getUsersFromDB() {
    this.userService.getUsers()
    .subscribe( resp => {
      console.log(resp['data']);
    });
  }

}
