import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  countryArr: Country[] =[];
  myc: string[];
  valueSelected: string;
  constructor() {
    this.countryArr.push(new Country('India', 1));
    this.countryArr.push(new Country('US', 2));
    this.countryArr.push(new Country('Singapore', 3));
    this.countryArr[2].selected = true;
  }

  reset() {
    for(let i =0; i<this.countryArr.length; i++ ){
      this.countryArr[i].selected = false;
    }
  }

  updateSelect() {
    this.reset();
    let valArray = this.valueSelected.split(',');
    for(let i =0; i<valArray.length; i++ ){
      this.countryArr[valArray[i]].selected = true;
    }
  }

}

class Country {
  name: string;
  id: number;
  selected: boolean;
  constructor(n: string, i: number) {
    this.name = n;
    this.id = i;
    this.selected = false;
  }
}
