import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs/Subscriber';
import { UserService } from '../../services/user.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent{
  users = [];
  products = [];
  
  constructor(private productService : ProductService){}

  ngOnInit(){
    this.productService.get().subscribe(data=>{this.products=data;});

  }
}

