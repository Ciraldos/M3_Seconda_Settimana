import { Component } from '@angular/core';
import { UserServiceService } from '../../service/user-service.service';
import { iTodos } from '../../models/i-todos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  search!: string;
  todosWithUser:iTodos[] = [];
  constructor(private arrComb: UserServiceService) { }

  ngOnInit() {
    this.todosWithUser = this.arrComb.getArrTodosUsers();
    console.log(this.todosWithUser);
  }

  searchFunc(search:string){
    this.todosWithUser = this.arrComb.getArrTodosUsers();
    this.todosWithUser = this.todosWithUser.filter(todo => todo.user?.firstName.toLocaleLowerCase().includes(search));
    console.log(this.todosWithUser);
  }
}
