import { Component, Input } from '@angular/core';
import { categories } from './category';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @Input()
  categoryid: number =-1;
  selectCategory(id: number){
    this.categoryid=id;
    console.log(this.categoryid)
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/