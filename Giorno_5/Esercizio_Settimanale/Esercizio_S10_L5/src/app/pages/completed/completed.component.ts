import { Component } from '@angular/core';
import { UserServiceService } from '../../service/user-service.service';
import { iTodos } from '../../models/i-todos';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent {

  todosWithUser:iTodos[] = [];
  constructor(private arrComb: UserServiceService) { }

  ngOnInit() {
    this.todosWithUser = this.arrComb.getArrTodosUsers();
    console.log(this.todosWithUser);
  }

}
