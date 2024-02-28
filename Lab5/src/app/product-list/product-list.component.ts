import { Component, Input, OnChanges, SimpleChanges  } from '@angular/core';

import { products } from '../products';
import { Category, categories } from '../category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnChanges{
  products = [...products];
  @Input() categoryid: number | undefined;
  // share(product: any) { 
  //   window.open("https://t.me/share/url?url=" + product.productLink) 
  // }
  // onNotify() {
  //   window.alert('You will be notified when the product goes on sale');
  // }
  ngOnChanges(changes: SimpleChanges){
      this.loadCategoryProducts(this.categoryid);
    
  }
  loadCategoryProducts(categoryid: number | undefined){
    this.products = products.filter(product => product.categoryId === categoryid);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
