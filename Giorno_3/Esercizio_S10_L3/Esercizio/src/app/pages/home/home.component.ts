import { Component } from '@angular/core';
import { iProduct } from '../../i-product';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  products:iProduct[] = [];
  favourites:iProduct[] = [];
  constructor(private productSvc:AppService){}

  ngOnInit(){
    this.productSvc.getProducts().subscribe(prodotti => {
      this.products = prodotti;
      console.log(this.products)
    })
  }

}
