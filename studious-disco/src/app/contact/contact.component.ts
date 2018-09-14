import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
@Input() name: string;
@Input() address: string;
  constructor() {

  }

  ngOnInit() {
    this.name= 'Alf Alfa';
    this.address= '1st Street of Wonderland';
  }
}
