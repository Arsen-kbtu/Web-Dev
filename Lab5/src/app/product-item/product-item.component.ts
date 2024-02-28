import { Component, Input } from '@angular/core';
import { Product } from '../products';
@Component({
  selector: 'app-product-item',

  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  show = true;
  like(product: Product)  
  {
    product.likes += 1;
  }
  @Input() product!: Product;
  constructor() {
    this.product = {
      id: 0,
      name: "",
      price: 0,
      description: "",
      image: "",
      likes: 0,
      link: "",
      categoryId: 0
    }; // Начальное значение
  }
}
