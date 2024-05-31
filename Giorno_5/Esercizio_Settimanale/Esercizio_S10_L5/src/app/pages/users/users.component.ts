import { Component } from '@angular/core';
import { UserServiceService } from '../../service/user-service.service';
import { iUser } from '../../models/i-user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  usersWithTodos: iUser[] = []
  constructor(private arrComb: UserServiceService){}

  ngOnInit(){
    this.usersWithTodos = this.arrComb.getArrUsersTodos();
    console.log(this.usersWithTodos)
  }

}
