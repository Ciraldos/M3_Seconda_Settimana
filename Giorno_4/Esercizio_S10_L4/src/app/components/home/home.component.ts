import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { iPhoto } from '../../i-photo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  photoArr:iPhoto[] = [];
  constructor(private productSvc:AppService){}

  ngOnInit(){
    this.productSvc.getPhotos().subscribe(photo => {
      this.photoArr = photo;
      console.log(this.photoArr)
    })
  }

}
